const auth = require('express').Router()
const passport = require('../../../appPassport')
const FBCallback = require('../../../controllers/auth');

auth.get('/tuturu', () => console.log('MAYUSHII DESU'))
auth.get('/facebook', passport.authenticate('facebook'))
auth.get(
  '/facebook/return',
  FBCallback(),
  (req, res) => {
    res.status(200).json({ message: 'Facebook callback OK' })
  }
)

module.exports = auth;