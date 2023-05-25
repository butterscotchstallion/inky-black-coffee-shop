import sqlalchemy
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import logging as log


SQLALCHEMY_DATABASE_URL = "sqlite:///./db/database.sqlite"
log.basicConfig(level=log.INFO)


class Database:

    session = None
    base = None
    engine = None

    def __init__(self):
        if not self.session:
            self.engine = create_engine(
                SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
            )
            session_local = sessionmaker(autocommit=False, autoflush=False, bind=self.engine)
            self.session = session_local()
            self.base = declarative_base()

    def get_session(self):
        return self.session

    def get_base(self):
        return self.base

    def get_engine(self):
        return self.engine

    def init_db(self):
        try:
            self.base.metadata.create_all(self.engine)
            log.info("Executed create all")
        except Exception as e:
            log.error("Failed to init db")
            raise e
