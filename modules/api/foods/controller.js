const foodModel = require("./model");

const createFood = ({ name, description, ingredients, steps, timers, imageURL, originalURL }) =>
    new Promise((resolve, reject) => {
        imageModel.create({
            name,
            description,
            ingredients,
            steps,
            timers,
            imageURL,
            originalURL
        })
            .then(data => resolve({ id: data._id })) // chi tra lai id
            .catch(err => reject(err))
    });

const getAllFoods = () => new Promise((resolve, reject) => {
    foodModel.find()
        .exec()
        .select("_id name description ingredients")
        .then(data => resolve(data))
        .catch(err => reject(err))
});

const getFood = id => new Promise((resolve, reject) => {
    foodModel
        .findOne({
            _id: id
        })
        .exec()
        .then(data => resolve(data))
        .catch(err => reject(err))
});

const getAllIngredients = () => new Promise((resolve, reject) => {
    foodModel
        .find()
        .select("_id ingredients ")
        .exec()
        .then(data => resolve(data))
        .catch(err => reject(err))
});

module.exports = {
    createFood,
    getAllFoods,
    getFood,
    getAllIngredients
}

