from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from db import Database
from routers import products_router
import logging as log


db_connection = Database()
engine = db_connection.get_engine()
log.basicConfig(level=log.INFO)

app = FastAPI(debug=True)
app.include_router(products_router)

origins = [
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def on_startup():
    db_connection.init_db()


