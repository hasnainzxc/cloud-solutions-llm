from flask import Flask, render_template, request, redirect, url_for, flash, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from datetime import datetime
import os
from dotenv import load_dotenv
from werkzeug.security import generate_password_hash, check_password_hash

load_dotenv()

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'dev-key-please-change')
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'sqlite:///gpu_saas.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'

# Models
class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    resources = db.relationship('GPUResource', backref='owner', lazy=True)

class GPUResource(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    provider = db.Column(db.String(100), nullable=False)
    gpu_type = db.Column(db.String(100), nullable=False)
    status = db.Column(db.String(20), default='stopped')
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

# Routes
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        user = User.query.filter_by(username=username).first()
        
        if user and check_password_hash(user.password, password):
            login_user(user)
            return redirect(url_for('dashboard'))
        else:
            flash('Invalid username or password', 'danger')
    
    return render_template('login.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form.get('username')
        email = request.form.get('email')
        password = request.form.get('password')
        
        if User.query.filter_by(username=username).first():
            flash('Username already exists', 'danger')
            return redirect(url_for('register'))
        
        if User.query.filter_by(email=email).first():
            flash('Email already registered', 'danger')
            return redirect(url_for('register'))
        
        user = User(
            username=username,
            email=email,
            password=generate_password_hash(password)
        )
        db.session.add(user)
        db.session.commit()
        
        flash('Registration successful! Please login.', 'success')
        return redirect(url_for('login'))
    
    return render_template('register.html')

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('index'))

@app.route('/dashboard')
@login_required
def dashboard():
    resources = GPUResource.query.filter_by(user_id=current_user.id).all()
    return render_template('dashboard.html', resources=resources)

@app.route('/api/resources', methods=['GET'])
@login_required
def get_resources():
    resources = GPUResource.query.filter_by(user_id=current_user.id).all()
    return jsonify([{
        'id': r.id,
        'name': r.name,
        'provider': r.provider,
        'gpu_type': r.gpu_type,
        'status': r.status
    } for r in resources])

@app.route('/api/resources', methods=['POST'])
@login_required
def create_resource():
    data = request.json
    resource = GPUResource(
        name=data['name'],
        provider=data['provider'],
        gpu_type=data['gpu_type'],
        user_id=current_user.id
    )
    db.session.add(resource)
    db.session.commit()
    return jsonify({
        'id': resource.id,
        'name': resource.name,
        'provider': resource.provider,
        'gpu_type': resource.gpu_type,
        'status': resource.status
    })

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True) 