const route = require('express').Router()
const userController = require(`../controllers/userController`)

route.get('/register', userController.registerForm)
route.post(`/register`, userController.addRegister)

module.exports = route