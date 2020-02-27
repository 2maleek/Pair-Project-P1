const route = require('express').Router()
const foodController = require (`../controllers/foodController`)

route.get(`/`, foodController.show)

module.exports = route