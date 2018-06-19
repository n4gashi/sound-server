const auth = require('express').Router();
const passport = require('./appPassport')

function facebookCallback(successRedirect, failureRedirect) {
  return passport.authenticate('facebook', {
    successRedirect: successRedirect || '/profile',
    failureRedirect: failureRedirect || '/login',
  })
}

auth.get('/facebook', passport.authenticate('facebook'))
auth.get('/facebook/return', facebookCallback())

module.exports = auth;