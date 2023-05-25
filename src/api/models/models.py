from sqlalchemy import Integer, String, Column, DateTime, Boolean, ForeignKey
from datetime import datetime
from pydantic import BaseModel
from db import Database
from sqlalchemy.orm import relationship, Mapped, mapped_column

db = Database()
Base = db.get_base()


class Product(Base):
    """
    User model
    """
    __tablename__ = 'products'
    id: Mapped[int] = mapped_column(Integer(), primary_key=True)
    name = Column(String(20), nullable=False, index=True)
    description = Column(String(255), nullable=False)
    guid = Column(String(50), nullable=False)
    image_filename = Column(String(255))
    created_on = Column(DateTime(), default=datetime.now)
    updated_on = Column(DateTime(), default=datetime.now, onupdate=datetime.now)
    active = Column(Boolean, default=True)
    price = Column(Integer, default=0)
