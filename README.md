# GPU SaaS Platform

A web-based platform for managing GPU resources across multiple providers.

## Features

- User authentication
- Dashboard for managing GPU resources
- Support for multiple GPU providers (Lambda Labs, Vast.ai, RunPod, etc.)
- Resource status monitoring
- Start/Stop functionality for GPU instances

## Setup

1. Create a virtual environment:
```bash
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Set up environment variables:
- Copy `.env.example` to `.env`
- Update the `SECRET_KEY` in `.env`

4. Initialize the database:
```bash
flask db init
flask db migrate
flask db upgrade
```

5. Run the application:
```bash
python app.py
```

The application will be available at `http://localhost:5000`

## Project Structure

```
.
├── app.py              # Main application file
├── requirements.txt    # Python dependencies
├── .env               # Environment variables
├── static/            # Static files (CSS, JS)
├── templates/         # HTML templates
└── instance/          # Database and instance-specific files
```

## Development

- The application uses Flask for the backend
- Bootstrap 5 for the frontend
- SQLite database for development (can be changed to PostgreSQL for production)
- Flask-Login for user authentication

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 