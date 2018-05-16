const express = require("express");
const router = express.Router();

const foodController = require('./controller');

router.post("/", (req, res) => {
    foodController
        .createFood(req.body)
        .then(result => res.send(result))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
});

router.get('/', (req, res) => {
    foodController
        .getAllFoods()
        .then(foods => {
            let result = [];
            let userInput = [];
            userInput = req.body.userInput;
            
        })
        
});

router.get('/:id', (req, res) => {
    foodController
        .getFood(req.params.id)
        .then(images => res.send(images))
        .catch(err => {
            console.error(err);
            res.status(500).send(err)
            //200
            //300 redirect
            //404 not found
            //55
        })
});