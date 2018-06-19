const Sequelize = require('sequelize');
const db = require('../../common/database');
const defaultModelOptions = require('./').defaultModelOptions;

const User = db.define('user', {
  userName: {
    type: Sequelize.STRING
  },
}, defaultModelOptions);