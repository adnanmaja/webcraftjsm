# DB Schema setup?

Users
- id (PK)
- name
- email
- password_hash
- role ('customer', 'penjual', 'admin')

Kantin
- id (PK)
- nama
- description
- location

MenuItems
- id (PK)
- kantin_id (FK → kantin.id)
- name
- price
- image_url
- stock

Orders
- id (PK)
- user_id (FK → Users.id)
- kantin_id (FK → kantin.id)
- total_price
- payment_status ('pending', 'paid', 'failed')
- created_at

OrderItems
- id (PK)
- order_id (FK → Orders.id)
- menu_item_id (FK → MenuItems.id)
- quantity
- price_at_purchase

# ?

Users -> Orders -> OrderItems -> MenuItems -> Kantin

Jadi,
- Tiap User bisa punya beberapa order (Orders)
- Tiap Orders bisa punya beberapa item yang diorder (OrderItems)
- Setiap OrderItems merujuk ke MenuItems, yang ada di Kantin