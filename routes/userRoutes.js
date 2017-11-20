const passport = require('passport')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const keys = require('../config/keys')
const Validator = require('validator')
const isEmpty = require('lodash/isEmpty')
const User = require('../models/User')

validateInput = data => {
  let errors = {}

  let fullNameLength = data.full_name.split(' ').length

  if (Validator.isEmpty(data.password)) errors.password = 'EMC needs your Password'
  if (Validator.isEmpty(data.full_name)) errors.full_name = 'EMC needs your Full Name'
  if (Validator.isEmpty(data.phone)) errors.phone = 'EMC needs your Full Name'
  if (fullNameLength < 2) errors.full_name = 'EMC needs your Full Name'
  if (!Validator.isEmail(data.email)) errors.email = 'EMC do not like your email'
  if (Validator.isEmpty(data.email)) errors.email = 'EMC wants your email'

  return { errors, isValid: isEmpty(errors) }
}

formatName = name => {
  return name
    .split(' ')
    .map(name => name.charAt(0).toUpperCase() + name.slice(1))
    .join(' ')
}

module.exports = app => {
  app.post('/user/register', (req, res, next) => {
    const { errors, isValid } = validateInput(req.body)
    if (!isValid) {
      res.status(422).json({errors})
    } else {
      let newUser = new User({
        fullName: formatName(req.body.full_name),
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password
      })

      User.addUser(newUser, (err, user) => {
        if (err) {
          res.json({ success: false, msg: 'Failed to register user', err })
        } else {
          res.json({ success: true, msg: 'User registered' })
        }
      })

    }
  })

  app.post('/user/checkemail', (req, res, next) => {
    let status = {
      email: {available: true, msg: 'Email is available!'}
    }
    const email = req.body.email

    User.getUserByEmail(email, (err, user) => {
      if (err) throw err
      if (user && user.email === email) {
        status.email.available = false
        status.email.msg = 'Email is Taken!'
      }
      res.json({ status })
    })
  })

  app.post('/user/authenticate', (req, res, next) => {
    const email = req.body.email
    const password = req.body.password

    User.getUserByEmail(email, (err, user) => {
      if (err) throw err
      if (!user) {
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
              email: user.email,
              fullName: user.fullName,
              phone: user.phone,
              isMember: user.isMember,
              isAdmin: user.admin
            }
          })
        } else {
          return res.json({ success: false, msg: 'Credentials does not match!' })
        }
      })
    })
  })

  app.get('/user/logout', (req, res) => {
    req.logout()
    res.json({ success: false })
  })

  app.get('/user/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.json({
      full_name: req.user.fullName,
      email: req.user.email,
      phone: req.user.phone,
      email: req.user.email,
    })
  })

  app.get('/user/directory', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    User.find({}, (err, users) => {
      let mappedUsers = []

      users.forEach((user, i) => {
        mappedUsers.push({
          _id: user._id,
          fullName: user.fullName,
          email: user.email,
          phone: user.phone,
          isMember: user.isMember
        })
      })

      res.json({ mappedUsers })
    })
  })

  app.post('/user/update', passport.authenticate('jwt', { session: false }), (req, res) => {
    console.log(req.body)
  })

}
