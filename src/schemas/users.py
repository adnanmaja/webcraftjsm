from pydantic import BaseModel

class UserCreate(BaseModel):
    name: str
    email: str
    role: str = "customer"

class UserUpdate(BaseModel):
    name: str = None
    email: str = None
    role: str = None

class UserResponse(BaseModel):
    id: int
    name: str
    email: str
    role: str