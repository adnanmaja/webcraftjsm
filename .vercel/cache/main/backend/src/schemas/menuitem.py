from pydantic import BaseModel, ConfigDict
from typing import Optional
from decimal import Decimal

class MenuItemCreate(BaseModel):
    kantin_id: int
    name: str
    price: Decimal
    image_url: Optional[str] = None
    stock: Optional[int] = 0

class MenuItemUpdate(BaseModel):
    kantin_id: Optional[int] = None
    name: Optional[str] = None
    price: Optional[Decimal] = None
    image_url: Optional[str] = None
    stock: Optional[int] = None

class MenuItemResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    
    id: int
    kantin_id: int
    name: str
    price: Decimal
    image_url: Optional[str]
    stock: int