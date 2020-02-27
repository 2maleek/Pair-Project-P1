const route = require('express').Router()

route.get('/', (req, res) => {
    res.send('HOMxxE')
})

module.exports = route