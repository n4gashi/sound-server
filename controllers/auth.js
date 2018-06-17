const passport = require('../appPassport');

function FBCallback(successRedirect, failureRedirect) {
  return passport.authenticate('facebook', {
    successRedirect: successRedirect || '/profile',
    failureRedirect: failureRedirect || '/login',
  })
}

module.exports = FBCallback;