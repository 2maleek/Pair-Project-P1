const route = require('express').Router()
const foodController = require (`../controllers/foodController`)
const login = require(`../routes/loginRoute`)

route.use((req, res, next) => {
    if(req.session.user){
        next()
    } else {
        res.redirect(`/login`)
    }
})
route.get(`/`, foodController.show)
route.post(`/order`, foodController.add)

module.exports = route