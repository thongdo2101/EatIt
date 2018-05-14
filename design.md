
# Architecture Design
    Nodejs Server
    MVC
    RESTful
## 1. Collections
- Foods
    - name
    - description
    - ingredients: [
        - quantity
        - name
    ]
    - steps: [String]
    - timers: [Number] (minute)
    - imageURL
    - originalURL
    - active
- Ingredients
    - name
    - active
## 2. Controller
    CRUD
    - create
    - read - get items with active == true
    - update
    - delete // setActive to false           
## 3. Route / RESTful
- API:
    - URI: /api/foods/
        - POST -> /api/foods/ => create new
        - GET -> /api/foods/ => read all if in req.body doesn't have a ingredientList
        - GET -> /api/foods/ read all by condition if in req.body has a ingredientList
        - GET -> /api/foods/:foodId => read a food
        - GET -> /api/foods/:foodId/ingredients/ => get all ingredients of food

        - PUT -> /api/foods/:foodId => update a food
        - DELETE -> /api/foods/:foodId => update state of active
    - URI: /api/ingredients/ 
        - POST -> /api/ingredients/ => create a ingredient
        - GET -> /api/ingredients/ => read all
        - GET -> /api/ingredients/:ingId => read one
        - PUT -> /api/ingredients/:ingId => update one
        - DELETE -> /api/ingredients/;ingId => update state of active
## 4. Cooked Data
- URI: /api/foods/
    - POST -> /api/foods/
        - res.status // HTTP request status
        - foodId
    - GET -> /api/foods/
        - _id
        - name
        - description
    - GET -> /api/foods/:foodId 
        - _id
        - name
        - description
        - ingredients
        - steps
        - timers
        - imageURL
        - originalURL 
    - GET -> /api/foods/:foodId/ingredients/ 
        - ingredients
    - PUT -> /api/foods/:foodId
        - res.status
        - foodId
    - DELETE -> /api/foods/:foodId
        - res.status
        - foodId
- URI: /api/ingredients/ 
    - POST -> /api/ingredients/ 
        - res.status
        - ingId
    - GET -> /api/ingredients/ 
        - _id
        - name
    - GET -> /api/ingredients/:ingId
        - _id
        - name
    - PUT -> /api/ingredients/:ingId 
        - res.status
        - ingId
    - DELETE -> /api/ingredients/:ingId 
        - res.status
        - ingId