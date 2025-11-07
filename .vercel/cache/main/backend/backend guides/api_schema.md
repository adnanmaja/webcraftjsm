# Schematic untuk API Endpoints
- Gambaran API routing
- Semua api diawali dengan /api/
- saat ini masih users dulu, ntar lainnya
- belum di up, masih lokal

## AUTH API

## Operasi CRUD pada tabel Users
### Operator GET
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

### Operator POST
```markdown
POST /api/users
```
#### Contoh penggunaan
**Request**
```markdown
POST /api/users

{
  "name": "Rafa"
  "email": "Rafa@email.com"
  "role": "customer
}
```
**Response**
```
{
  "id": 1
  "name": "Rafa"
  "email": "Rafa@email.com"
  "role": "customer
}
```

### Operator PUT
```
PUT /api/users/{id} 
```

### Operator DELETE
```
DELETE /users/{id}
```

## Operasi CRUD pada tabel Kantin
"kantin" maksutnya tenantnya, sedangkan "lokasi" maksutnya kantinnya, jadi:
- "ayam geprek fisipol" berarti kantin = ayam geprek pak rafa; dan lokasi = fisipoint F. Ilmu Sosial dan Ilmu Politik
- "nasi rames bonbin" berarti kantin = nasi rames pak rafa; dan lokasi = bonbin F. Filsafat 
### Operator GET
```markdown
GET /api/kantin       # Menampilkan semua kantin(tenant) di satu lokasi(kantin) 
GET /api/kantin/{id}  # Tampilin kantin berdasarkan id kantin
GET /api/kantin/      # Tampilkan kantin berasarkan query nama atau lokasi
```
#### Contoh Penggunaan
**Request**
```
GET /api/kantin/1
```
**Response**
```markdown
[
  {
    "id": 1,
    "name": "mi ayam siliwangi",
    "description": "-" ,
    "location": "biogeo",
    "owner_id": 28,
    "menu_item":[
      {
        "id": 1
        "kantin_id":1
        "name": "mi ayam kuah"
        "price": 16000
        "image_url": "-"
        "stock": "-"
      },
      {
        "id": 2,
        "kantin_id": 1,
        "name": "mi ayam tanpa ayam",
        "price": 3 elixir,
        "image_url": "-",
        "stock": "-"
      }
    ]

  }
]
````