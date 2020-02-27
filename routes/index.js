const route = require('express').Router()
const user = require(`../routes/userRoute`)
const food = require(`../routes/foodRoute`)
const transaction = require(`../routes/transactionRoute`)

route.get('/', (req, res) => {
    res.send('HOMEPAGE')
})

route.use(`/foods`, food)
route.use(`/transaction`, transaction)
route.use(`/user`, user)

module.exports = route