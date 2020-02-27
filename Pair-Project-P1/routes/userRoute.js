const route = require('express').Router()

route.get('/register', (req, res) => {
  res.render('register')
})

module.exports = route