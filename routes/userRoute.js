const route = require('express').Router()

route.get('/', (req, res) => {
  res.render('register')
})

module.exports = route