const express = require('express')
const app =  express()
const PORT = 3000
const route = require('./routes')

app.set('view engine', 'ejs')
app.use(express.urlencoded( { extended: true } ) )

app.use('/', route)

app.listen(PORT, () => {
  console.log('on PORT ' + PORT)
})