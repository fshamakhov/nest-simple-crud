<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Simple CRUD Nest App
### Get list of cats
```
GET http://localhost:3000/cats
```
### Create a cat
```http
POST http://localhost:3000/cats
Content-Type: application/json

{
  "name": "Sukharik",
  "age": 3,
  "breed": "Siberian"
}
```
### Get a cat
```http
GET http://localhost:3000/cats/1
```
### Update a cat
```http
PUT http://localhost:3000/cats/1
Content-Type: application/json

{
  "age": 7
}

```
### Remove a cat
```http
DELETE http://localhost:3000/cats/2
```
