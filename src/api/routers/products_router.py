from fastapi import APIRouter, status, Response, Depends
from db import Database
import logging as log
from sqlalchemy.orm import Session

from models import schemas, products_crud

log.basicConfig(level=log.INFO)
products_router = APIRouter()
db = Database()
session = db.get_session()


@products_router.get("/api/products", response_model=list[schemas.ProductBase])
def read_products(skip: int = 0, limit: int = 100, session: Session = Depends(db.get_session)):
    return products_crud.get_products(session, skip=skip, limit=limit)
