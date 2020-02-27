const ModelFood = require(`../models`).Food

class FoodController {

    static show (req, res) {
        ModelFood.findAll()
        .then(food => {
            res.render('home', { food })
            // res.send(food)
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = FoodController