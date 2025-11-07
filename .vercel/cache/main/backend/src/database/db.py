import os
from dotenv import load_dotenv
from sqlalchemy import create_engine, text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.exc import OperationalError
import time

# Connect ke DB di supabase
load_dotenv()
USER = os.getenv("user2")
PASSWORD = os.getenv("password")
HOST = os.getenv("host2")
PORT = os.getenv("port")
DBNAME = os.getenv("dbname")
DATABASE_URL = f"postgresql+psycopg2://{USER}:{PASSWORD}@{HOST}:{PORT}/{DBNAME}"
if DATABASE_URL and ':None/' in DATABASE_URL:
    DATABASE_URL = DATABASE_URL.replace(':None/', ':6543/')


engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False)
base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# Ini kebawah cuma untuk testing, gapenting
if __name__ == "__main__":

    print(DATABASE_URL)

    try:
        with engine.connect() as connection:
            print("GACORRR!")
    except Exception as e:
        print(f"Gabisa karena: {e}")