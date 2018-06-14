const api = require('express').Router();

api.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected to api!' });
});

module.exports = api;