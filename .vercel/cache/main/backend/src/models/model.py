from sqlalchemy import Column, Integer, String, ForeignKey, Numeric, Text, TIMESTAMP, CheckConstraint
from sqlalchemy.orm import relationship
from database.db import base, engine

# ==== Schema DB nyaaa (cek db_schema.md) ====

# ini untuk user, basically semua yang pake lah, ada admin, penjual, sama customer
class User(base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index = True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)
    oauth_provider = Column(String, default="google")  # authentication, pake google dulu, lainnya ntar
    oauth_id = Column(String) # sama
    password_hash = Column(String) # hashed pw di db, biar gampang, oauth ribet jir
    role = Column(String, nullable=False, default="customer")
    phone_number = Column(String)

    kantins = relationship("Kantin", back_populates="owner")
    orders = relationship("Order", back_populates="user")

# list semua kantin di ugm 
class Kantin(base):
    __tablename__ = "kantin"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    description = Column(String, nullable=False)
    location = Column(String, nullable=False)
    owner_id = Column(Integer, ForeignKey("users.id"))

    owner = relationship("User", back_populates="kantins") 
    menu_items = relationship("MenuItem", back_populates="kantin") 
    orders = relationship("Order", back_populates="kantin") 

# menu di setiap kantin
class MenuItem(base):
    __tablename__ = "menu_items"

    id = Column(Integer, primary_key=True, index=True)
    kantin_id = Column(Integer, ForeignKey("kantin.id"))
    name = Column(String, nullable=False)
    price = Column(Numeric(10,2), nullable=False)
    image_url = Column(String)
    stock = Column(Integer, default=0)
 
    kantin = relationship("Kantin", back_populates="menu_items")
    order_items = relationship("OrderItem", back_populates="menu_item")

# Jumlah orderan (kayak keranjang gitu)
class Order(base):
    __tablename__ = "orders"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    kantin_id = Column(Integer, ForeignKey("kantin.id"))
    total_price = Column(Numeric(10,2), nullable=False)
    payment_status = Column(String, default="pending")
    created_at = Column(TIMESTAMP)

    user = relationship("User", back_populates="orders")  
    kantin = relationship("Kantin", back_populates="orders")
    order_items = relationship("OrderItem", back_populates="order")

# Item yang di order (Item di keranjang)
class OrderItem(base):
    __tablename__ = "order_items"

    id = Column(Integer, primary_key=True, index=True)
    order_id = Column(Integer, ForeignKey("orders.id"))
    menu_item_id = Column(Integer, ForeignKey("menu_items.id"))
    quantity = Column(Integer, nullable=False)
    price_at_purchase = Column(Numeric(10,2), nullable=False)

    order = relationship("Order", back_populates="order_items")
    menu_item = relationship("MenuItem", back_populates="order_items")

# hapus tabel lawas, ganti sek anyar
if __name__ == "__main__":
    base.metadata.drop_all(engine)
    base.metadata.create_all(engine)