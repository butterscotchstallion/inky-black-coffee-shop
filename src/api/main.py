from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session
from models import schemas, user_crud
from models.database import Database
from routers import user_auth_router, ws_router
import logging as log

db = Database()
engine = db.get_engine()
base = db.get_base()
log.basicConfig(level=log.INFO)
base.metadata.create_all(bind=engine)


app = FastAPI()
app.include_router(user_auth_router)
app.include_router(ws_router)

"""
User routes
"""



@app.get("/api/users/", response_model=list[schemas.UserBase])
def read_users(skip: int = 0, limit: int = 100, session: Session = Depends(db.get_session)):
    users = user_crud.get_users(session, skip=skip, limit=limit)
    for user in users:
        user.password = ""
    return users


@app.get("/api/users/{guid}", response_model=schemas.UserBase)
def read_user(guid: str, session: Session = Depends(db.get_session)):
    db_user = user_crud.get_user_by_guid(session, guid=guid)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    db_user.password = ""
    return db_user
