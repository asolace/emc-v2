const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const bodyParser = require('body-parser')
const users = require('./routes/userRoutes')
const config = require('./config/database')
mongoose.Promise = global.Promise;
require('./config/passport')(passport)

mongoose.connect(config.database, err => {
  if (err) console.log('Failed to connect to Mongodb... ', err)
  else console.log('Succesfully connected to', config.database)
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(passport.initialize())
app.use(passport.session())

app.get('/', (req, res) => {
  res.send('Invalid Endpoint')
})

app.use('/users', users)

const PORT = process.env.PORT || 3003

app.listen(PORT, () => {
  console.log(`
    © Asolace Development

    Server started on port ${PORT}...

    EMC Server initiated!
    `);
})
