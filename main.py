from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.routes import user


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(user.router, prefix="/api", tags=["users"])