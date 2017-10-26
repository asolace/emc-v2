const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const bodyParser = require('body-parser')
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

require('./routes/userRoutes')(app)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  const path = require('path')
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 3003

app.listen(PORT, () => {
  console.log(`
    © Asolace Development

    Server started on port ${PORT}...

    EMC Server initiated!
    `);
})
