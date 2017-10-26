const passport = require('passport')
const jwt = require('jsonwebtoken')
const keys = require('../config/keys')
const User = require('../models/User')
const Validator = require('validator')
const isEmpty = require('lodash/isEmpty')

validateInput = data => {
  let errors = {}

  if (Validator.isEmpty(data.password)) errors.password = 'EMC needs your Password'
  if (Validator.isEmpty(data.password_confirmation)) errors.password_confirmation = 'EMC wants to confirm your password'
  if (!Validator.equals(data.password, data.password_confirmation)) errors.password_confirmation = 'EMC thinks your password do not match'
  if (!Validator.isEmail(data.email)) errors.email = 'EMC do not like your email'
  if (Validator.isEmpty(data.email)) errors.email = 'EMC wants your email'

  return { errors, isValid: isEmpty(errors) }
}

module.exports = app => {

  app.post('/register', (req, res, next) => {
    const { errors, isValid } = validateInput(req.body)

    if (!isValid) {
      res.status(422).json({errors})
    } else {
      let newUser = new User({
        email: req.body.email,
        password: req.body.password
      })
      User.addUser(newUser, (err, user) => {
        if (err) {
          console.log(err);
          res.json({ success: false, msg: 'Failed to register user', err })
          console.log('Failed to register User...')
        } else {
          res.json({ success: true, msg: 'User registered' })
          console.log('Successfully register user!')
        }
      })
    }
  })

  app.post('/authenticate', (req, res, next) => {
    const email = req.body.email
    const password = req.body.password

    User.getUserByEmail(email, (err, user) => {
      if (err) throw err
      if (!user) {
        console.log('User not found.')
        return res.json({success: false, msg: 'User not found'})
      }

      User.comparePassword(password, user.password, (err, isMatch) => {
        if (err) throw err
        if (isMatch) {
          const token = jwt.sign({user}, keys.mongoSecret, {
            expiresIn: 604800 // seconds in 1 week
          })
          res.json ({
            success: true,
            token: 'bearer ' + token,
            user: {
              id: user._id,
              email: user.email
            }
          })
        } else {
          return res.json({ success: false, msg: 'Credentials does not match!' })
        }
      })
    })
  })

  app.get('/logout', (req, res) => {
    req.logout()
    // res.redirect('/')
  })

  app.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.json({ user: req.user })
  })

  app.post('/checkemail', (req, res, next) => {
    let status = {
      email: {available: true, msg: 'Email is available!'}
    }

    const email = req.body.email

    User.getUserByEmail(email, (err, user) => {
      if (err) throw err
      if (user && user.email === email) {
        status.email.available = false
        status.email.msg = 'Email is Taken!'
        res.json({ status })
      }
    })
  })
}
