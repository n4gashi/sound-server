var graphql = require('express').Router();
var expressGraphQL = require('express-graphql');
var { buildSchema } = require('graphql');

// GraphQL schema
var schema = buildSchema(`
  type Query {
    message: String
  }
`);

graphql.use('/', expressGraphQL({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

module.exports = graphql;