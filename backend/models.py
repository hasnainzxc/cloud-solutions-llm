from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime
from sqlalchemy.orm import relationship
from database import Base
from datetime import datetime

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    username = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    is_active = Column(Boolean, default=True)
    resources = relationship("GPUResource", back_populates="owner")

class GPUResource(Base):
    __tablename__ = "gpu_resources"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    provider = Column(String)
    gpu_type = Column(String)
    status = Column(String, default="stopped")
    created_at = Column(DateTime, default=datetime.utcnow)
    user_id = Column(Integer, ForeignKey("users.id"))
    owner = relationship("User", back_populates="resources") 