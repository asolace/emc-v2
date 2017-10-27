const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const User = require('../models/User')
const keys = require('./keys')

module.exports = function(passport) {
  let opts = {}
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
  opts.secretOrKey = keys.mongoSecret

  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    User.getUserById(jwt_payload.user._id, (err, user) => {
      if (err) return done(err, false)
      if (user) done(null, user)
      else done(null, false)
    })
  }))
}
