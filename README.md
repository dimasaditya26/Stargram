# Final Project 2

## MyGram Apps with NodeJS
adalah backend project untuk membuat REST-API yang berguna untuk  menyimpan sebuah foto dan memberikan comment. yang mana setiap user dapat menambahkan foto dirinya sendiri dan menambahkan comment di fotonya sendiri maupun foto orang lain.

### Link Deployment
```text
https://mygram-finalproject2-hacktiv8.up.railway.app
```
 ---

# Endpoint Users

### Create Database
```cmd
npx sequelize db:create
```

### Migrate Database
```cmd
npx sequelize db:migrate
```

### Seeder Database
```cmd
npx sequelize db:seed:all
```

## Register Users

```js
localhost:3000/users/register
```

Body
```json
{
  "full_name": "string",
  "email": "string",
  "username": "string",
  "password": "string",
  "profile_image_url": "string",
  "age": "int",
  "phone_number": "int"
}
```

## Login Users

```js
localhost:3000/users/login
```

Body
```json
{
  "email": "string",
  "password": "string"
}
```

## Update Users

```js
localhost:3000/users/:userId
```

Authorization
```js
<token>
```

Params
```js
UserId = "int"
```

Body
```json
{
  "full_name": "string",
  "email": "string",
  "username": "string",
  "profile_image_url": "string",
  "age": "int",
  "phone_number": "int"
}
```

## Delete Users

```js
localhost:3000/users/:userId
```

Authorization
```js
<token>
```

Params
```js
UserId = "int"
```

# Endpoint Photos

## Add Photos

```js
localhost:3000/photos
```

Authorization
```js
<token>
```

Body
```json
{
  "title": "strig",
  "caption": "string",
  "poster_image_url": "string"
}
```

## Get All Photos ByUserId

```js
localhost:3000/photos
```

Authorization
```js
<token>
```

## Update Photos

```js
localhost:3000/photos/:photoId
```

Authorization
```js
<token>
```

Params
```js
photoId = "int"
```

Body
```json
{
  "title": "strig",
  "caption": "string",
  "poster_image_url": "string"
}
```

## Delete Photos

```js
localhost:3000/photos/:photoId
```

Authorization
```js
<token>
```

Params
```js
photoId = "int"
```

Body
```json
{
  "title": "strig",
  "caption": "string",
  "poster_image_url": "string"
}
```

# Endpoint Comment

## Add Comment

```js
localhost:3000/comments
```

Authorization
```js
<token>
```

Body
```json
{
  "comment": "string",
  "PhotoId": "int"
}
```

## Get All Comment by UserId

```js
localhost:3000/comments
```

Authorization
```js
<token>
```

## Update Comment

```js
localhost:3000/comments/:commentId
```

Authorization
```js
<token>
```

Params
```js
commentId = "int"
```

Body
```json
{
  "comment": "string",
  "PhotoId": "int"
}
```

## Delete Comment

```js
localhost:3000/comment/:commentId
```

Authorization
```js
<token>
```

Params
```js
commentId = "int"
```

# Endpoint Social Media

## Add Social Media

```js
localhost:3000/socialmedias
```

Authorization
```js
<token>
```

Body
```json
{
  "name": "string",
  "social_media_url": "string"
}
```

## Get Social Media by UserId

```js
localhost:3000/socialmedias
```

Authorization
```js
<token>
```

## Update Social Media

```js
localhost:3000/socialmedias/:socialMediaId
```

Authorization
```js
<token>
```

Params
```js
socialMediaId = "int"
```

Body
```json
{
  "name": "string",
  "social_media_url": "string"
}
```

## Delete Social Media

```js
localhost:3000/socialmedias/:socialMediaId
```

Authorization
```js
<token>
```

Params
```js
socialMediaId = "int"
```

