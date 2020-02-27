const route = require('express').Router()
const foodController = require (`../controllers/foodController`)
const login = require(`../routes/loginRoute`)


route.get(`/`, login, foodController.show)
route.post(`/order`, foodController.add)

module.exports = route