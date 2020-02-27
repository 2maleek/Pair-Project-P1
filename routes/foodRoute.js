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
route.get(`/:id`, foodController.show)
route.post(`/order/:id`, foodController.add)
route.get(`/cart/:id`, foodController.showCart)

module.exports = route