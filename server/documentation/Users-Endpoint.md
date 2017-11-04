# Users Endpoint API Documentation

## Overview
This file describes the standard syntax to interact with endpoints for User objects.

## Table of Contents: Routes

1. GET /users

2. POST /users

3. GET /users/:userID

4. PUT /users/:userID

5. DELETE /users/:userID


### 1. GET /users
Description:
Get's an array of users with a default limit of 50.

**_Accepts no parameters._**

**Fields:**

| Fields      | Description             | example                  |
|-------------|-------------------------|--------------------------|
| _id         | MongoDB ObjectId String |'59fce17678d3f02559ae7960'|
| username    | String | 'tommy123'|
| email       | String | 'tommy@me.com' |

`Example Response (Status 200 OK):`
>```
[
  {
    _id: '59fce17678d3f02559ae7960',
    username: 'dragon_slayer'),
    email: "dragon@slayer.com",
  },
  {
    _id: '59fce17678d3f02559ae7960',
    username: 'green_ball'),
    email: "green@ball.com",
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
### 2. POST /users

Description:
Creates a list and returns a the new object.

**_Accepts no parameters._**

**Fields:**

| Fields      | Description             | example                  |
|-------------|-------------------------|--------------------------|
| _id         | MongoDB ObjectId String |'59fce17678d3f02559ae7960'|
| username    | String | 'tommy123'|
| email       | String | 'tommy@me.com' |

`Example Request Body:`
>```
{
  username: 'tommy123'),
  email: "tommy@me.com",
}
```

`Example Response (Status 200 OK):`
>```
{
  _id: '59fce17678d3f02559ae7960',
  username: 'tommy123'),
  email: "tommy@me.com",
}
```

`Example Response (Status 422):`
>```
{
  success: false
}
```

---
### 3. GET /users/:userID
Description: Gets a list with the provided *userID*.

**Param:** userID *(Required)*

| Params      | Description             | example                  |
|-------------|-------------------------|--------------------------|
| userID      | MongoDB ObjectId String |'59fce17678d3f02559ae7960'|

**Request Body**

| Fields      | Description             | example                  |
|-------------|-------------------------|--------------------------|
| _id         | MongoDB ObjectId String |'59fce17678d3f02559ae7960'|
| username    | String | 'tommy123'|
| email       | String | 'tommy@me.com' |

`Example Response (Status 200 OK):`
>```
{
  _id: '59fce17678d3f02559ae7960',
  username: 'tommy123'),
  email: "tommy@me.com",
}
```

`Example Response (Status 422):`
>```
{
  success: false
}
```

---
### 4. PUT /users/:userID
Description: Replaces a list with userID with provided list object.

**Param:** userID *(Required)*

| Params      | Description             | example                  |
|-------------|-------------------------|--------------------------|
| userID      | MongoDB ObjectId String |'59fce17678d3f02559ae7960'|

**Request Body**

| Fields      | Description             | example                  |
|-------------|-------------------------|--------------------------|
| _id         | MongoDB ObjectId String |'59fce17678d3f02559ae7960'|
| username    | String | 'tommy123'|
| email       | String | 'tommy@me.com' |

`Example Request Body:`
>```
{
  username: 'updated123'),
  email: "tommy@me.com",
}
```

`Example Response (Status 200 OK):`
>```
{
  _id: '59fce17678d3f02559ae7960',
  username: 'updated123'),
  email: "tommy@me.com",
}
```

`Example Response (Status 422):`
>```
{
  success: false
}
```

---

### 5. DELETE /users/:userID
Description: Removes a list with the provided userID.

**Param:** userID *(Required)*

| Params      | Description             | example                  |
|-------------|-------------------------|--------------------------|
| userID      | MongoDB ObjectId String |'59fce17678d3f02559ae7960'|

**Fields:**

| Fields      | Description             | example                  |
|-------------|-------------------------|--------------------------|
| _id         | MongoDB ObjectId String |'59fce17678d3f02559ae7960'|
| username    | String | 'tommy123'|
| email       | String | 'tommy@me.com' |

`Example Response (Status 200 OK):`
>```
{
  _id: '59fce17678d3f02559ae7960',
  username: 'tommy123'),
  email: "tommy@me.com",
}
```

`Example Response (Status 422):`
>```
{
  success: false
}
```

---
