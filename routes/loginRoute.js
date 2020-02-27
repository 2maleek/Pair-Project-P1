const route = require('express').Router()
const loginController = require (`../controllers/loginController`)

route.get(`/`, loginController.show)
route.post(`/`, loginController.doLogin)

module.exports = route