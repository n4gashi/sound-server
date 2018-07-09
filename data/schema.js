var {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} = require('graphql-tools')
var resolvers = require('./resolvers')

const typeDefs = `
type User {
  id: Int
  fbid: String
  userName: String
  firstName: String
  lastName: String
  pictureUri: String
  songs: [Song]
}

type Song {
  id: Int
  title: String,
  authorName: String,
  authorId: Int,
  uploader: User
}

type Query {
  user(firstName: String, lastName: String): User
  allUsers: [User]
  getFortuneCookie: String # we'll use this later
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

// addMockFunctionsToSchema({ schema, mocks });

module.exports = schema;