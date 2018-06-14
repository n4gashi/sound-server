const api = require('express').Router();
const v1 = require('./v1');
const graphql = require('./graphql');

api.use('/v1', v1);
api.use('/graphql', graphql);

module.exports = api;
