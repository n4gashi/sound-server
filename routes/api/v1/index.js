const api = require('express').Router()
const auth = require('./auth')

api.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected to api!' });
});

api.use('/auth', auth)

module.exports = api;