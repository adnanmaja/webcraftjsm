from fastapi import Depends, HTTPException, APIRouter
from sqlalchemy.orm import Session
from schemas.order import OrderUpdate, OrderCreate, OrderResponse
from schemas.relationships.order_detail import OrderWithDetailsResponse
from database.db import get_db
from models.model import Order
from typing import List

router = APIRouter()

# ====================== API ENDPOINTSSS pada tabel Order ===========================

# === GET ===

# Nampilin semua order (isi tabel Order) (GET) 
@router.get("/order", response_model=list[OrderResponse])
def get_all_orders(db: Session = Depends(get_db)):
    orders = db.query(Order).all()
    return orders

# Cari order berdasarkan id (GET)
@router.get("/order/{order_id}", response_model=OrderWithDetailsResponse)
def get_order(order_id: int, db: Session = Depends(get_db)):
    order = db.query(Order).filter(Order.id == order_id).first()
    
    if not order:
        raise HTTPException(status_code=404, detail="Order nggak ada")
    
    return order

# Cari order berdasarkan user id
@router.get("/users/{user_id}/orders", response_model=List[OrderResponse])
def get_orders_by_user(user_id: int, db: Session = Depends(get_db)):
    orders = db.query(Order).filter(Order.user_id == user_id).all()
    return orders

# Cari order berdasarkan kantin id
@router.get("/kantin/{kantin_id}/orders", response_model=List[OrderResponse])
def get_orders_by_kantin(kantin_id: int, db: Session = Depends(get_db)):
    orders = db.query(Order).filter(Order.kantin_id == kantin_id).all()
    return orders

# Cari order berdasarkan payment status
@router.get("/orders/status/{payment_status}", response_model=List[OrderResponse])
def get_orders_by_status(payment_status: str, db: Session = Depends(get_db)):
    orders = db.query(Order).filter(Order.payment_status == payment_status).all()
    return orders


# === POST ===

# Nambah order 
@router.post("/order", response_model=OrderResponse)
def create_order(order: OrderCreate, db: Session = Depends(get_db)):
    
    new_order = Order(
        user_id=order.user_id,
        kantin_id=order.kantin_id,
        total_price=order.total_price,
        payment_status=order.payment_status,
        created_at=order.created_at
    )
    
    db.add(new_order)
    db.commit()
    db.refresh(new_order)  
    
    return new_order


# === PUT (credits: deepseek)===
# Update order
@router.put("/orders/{order_id}", response_model=OrderResponse)
def update_order(
    order_id: int, 
    order_update: OrderUpdate, 
    db: Session = Depends(get_db)
):
    order = db.query(Order).filter(Order.id == order_id).first()
    
    if not order:
        raise HTTPException(status_code=404, detail="Order nggak ada")
    
    # Update only provided fields
    if order_update.user_id is not None:
        order.user_id = order_update.user_id
    if order_update.kantin_id is not None:
        order.kantin_id = order_update.kantin_id
    if order_update.total_price is not None:
        order.total_price = order_update.total_price
    if order_update.payment_status is not None:
        order.payment_status = order_update.payment_status
    if order_update.created_at is not None:
        order.created_at = order_update.created_at
    
    db.commit()
    db.refresh(order)
    
    return order

# Update order payment status
@router.patch("/orders/{order_id}/status", response_model=OrderResponse)
def update_order_status(
    order_id: int, 
    payment_status: str, 
    db: Session = Depends(get_db)
):
    order = db.query(Order).filter(Order.id == order_id).first()
    
    if not order:
        raise HTTPException(status_code=404, detail="Order nggak ada")
    
    order.payment_status = payment_status
    db.commit()
    db.refresh(order)
    
    return order


# === DELETE ===

# Hapus order berdasarkan id (padahal kyknya gaakan pernah kepake)
@router.delete("/orders/{order_id}")
def delete_order(order_id: int, db: Session = Depends(get_db)):
    order = db.query(Order).filter(Order.id == order_id).first()
    
    if not order:
        raise HTTPException(status_code=404, detail="Order nggak ada")
    
    db.delete(order)
    db.commit()
    
    return {"message": f"Order {order_id} berhasil dihapus"}