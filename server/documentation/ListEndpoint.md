# List Endpoint API Documentation

## Overview
This file describes the standard syntax to interact with endpoints for List objects.

## Table of Contents: Routes

1. GET /lists

2. POST /lists

3. GET /lists/:listID

4. PUT /lists/:listID

5. DELETE /lists/:listID


### 1. GET /lists
Description:
Get's an array of lists with a default limit of 50.

**_Accepts no parameters._**

`Example Response (Status 200 OK):`
>```
[
  {
    _id: '59fce17678d3f02559ae7960',
    parentBoard: '59fcd2f0b6090b1f441093eb'),
    title: "CardTitle",
    cards: [ObjectID('stringID')]
  },
  {
    _id: '59fce17678d3f02559ae7960',
    parentBoard: '59fcd2f0b6090b1f441093eb'),
    title: "CardTitle",
    cards: [ObjectID('stringID')]
  }
]
```

`Example Response (Status 422):`
>```
{
  success: false
}
```

---
### 2. POST /lists

Description:
Creates a list and returns a success object.

**Param:** listID *(Required)*

| Params      | Description             | example                  |
|-------------|-------------------------|--------------------------|
| listID      | MongoDB ObjectId String |'59fce17678d3f02559ae7960'|


**Request Body**

| Fields      | Description             | example                  |
|-------------|-------------------------|--------------------------|
| _id         | MongoDB ObjectId String |'59fce17678d3f02559ae7960'|
| parentBoard | MongoDB ObjectId String |'59fcd2f0b6090b1f441093eb'|
| title       | String | 'List Title' |
| cards       | Array of MongoDB ObjectId | [] |

`Example Request Body:`
>```
{
  _id: '59fce17678d3f02559ae7960',
  parentBoard: '59fcd2f0b6090b1f441093eb'),
  title: "CardTitle",
  cards: [ObjectID('stringID')]
}
```

`Example Response (Status 200 OK):`
>```
{
  _id: '59fce17678d3f02559ae7960',
  parentBoard: '59fcd2f0b6090b1f441093eb'),
  title: "CardTitle",
  cards: [ObjectID('stringID')]
}
```

`Example Response (Status 422):`
>```
{
  success: false
}
```

---
### 3. GET /lists/:listID
Description: Gets a list with the provided *listID*.

**Param:** listID *(Required)*

| Params      | Description             | example                  |
|-------------|-------------------------|--------------------------|
| listID      | MongoDB ObjectId String |'59fce17678d3f02559ae7960'|

**Request Body**

| Fields      | Description             | example                  |
|-------------|-------------------------|--------------------------|
| _id         | MongoDB ObjectId String |'59fce17678d3f02559ae7960'|
| parentBoard | MongoDB ObjectId String |'59fcd2f0b6090b1f441093eb'|
| title       | String | 'List Title' |
| cards       | Array of MongoDB ObjectId | [] |

`Example Response (Status 200 OK):`
>```
{
  _id: '59fce17678d3f02559ae7960',
  parentBoard: '59fcd2f0b6090b1f441093eb'),
  title: "CardTitle",
  cards: [ObjectID('stringID')]
}
```

`Example Response (Status 422):`
>```
{
  success: false
}
```

---
### 4. PUT /lists/:listID
Description: Replaces a list with listID with provided list object.

**Param:** listID *(Required)*

| Params      | Description             | example                  |
|-------------|-------------------------|--------------------------|
| listID      | MongoDB ObjectId String |'59fce17678d3f02559ae7960'|

**Request Body**

| Fields      | Description             | example                  |
|-------------|-------------------------|--------------------------|
| _id         | MongoDB ObjectId String |'59fce17678d3f02559ae7960'|
| parentBoard | MongoDB ObjectId String |'59fcd2f0b6090b1f441093eb'|
| title       | String | 'List Title' |
| cards       | Array of MongoDB ObjectId | [] |

`Example Request Body:`
>```
{
  _id: '59fce17678d3f02559ae7960',
  parentBoard: '59fcd2f0b6090b1f441093eb'),
  title: "CardTitle - Updated",
  cards: [ObjectID('stringID')]
}
```

`Example Response (Status 200 OK):`
>```
{
  _id: '59fce17678d3f02559ae7960',
  parentBoard: '59fcd2f0b6090b1f441093eb'),
  title: "CardTitle - Updated",
  cards: [ObjectID('stringID')]
}
```

`Example Response (Status 422):`
>```
{
  success: false
}
```

---

### 5. DELETE /lists/:listID
Description: Removes a list with the provided listID.

**Param:** listID *(Required)*

| Params      | Description             | example                  |
|-------------|-------------------------|--------------------------|
| listID      | MongoDB ObjectId String |'59fce17678d3f02559ae7960'|

`Example Response (Status 200 OK):`
>```
{
  _id: '59fce17678d3f02559ae7960',
  parentBoard: '59fcd2f0b6090b1f441093eb'),
  title: "CardTitle",
  cards: [ObjectID('stringID')]
}
```

`Example Response (Status 422):`
>```
{
  success: false
}
```

---
