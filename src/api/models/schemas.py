from pydantic import BaseModel
from datetime import datetime
from typing import Optional


class ProductBase(BaseModel):
    id: int
    name: str
    description: str
    guid: Optional[str]
    image_filename: Optional[str]
    created_on: Optional[datetime] = datetime.now()
    updated_on: Optional[datetime] = datetime.now()
    active: Optional[bool] = True
    price: int

    class Config:
        orm_mode = True


class ProductTypes(BaseModel):
    id: int
    name: str

    class Config:
        orm_mode = True