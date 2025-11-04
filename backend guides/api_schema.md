# Schematic untuk API Endpoints
- Gambaran API routing
- Semua api diawali dengan /api/
- saat ini masih users dulu, ntar lainnya
- belum di up, masih lokal


## Operasi CRUD pada tabel Users
```markdown
GET /api/users          # Menampilkan seluruh user
GET /api/users/{id}     # Menampilkan user berdasarkan id
GET /api/users/         # Menampilkan user berdasarkan query parameters (nama dan email)
```
#### Contoh penggunaan
```markdown
GET /api/users                          # Akan menampilkan semua user
GET /api/users/1                        # Akan menampilkan user dengan id = 1
GET /api/users/?name=Rafa               # Akan menampilkan user dengan nama Rafa
GET /api/users/?email=rafa@email.com    # Akan menampilkan user dengan email rafa@email.com
```

#### Contoh output
**Request**
```markdown
GET /api/users
```
**Response**
```markdown
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "role": "customer"
  },
  {
    "id": 2,
    "name": "Jane Smith", 
    "email": "jane@example.com",
    "role": "admin"
  }
]
```