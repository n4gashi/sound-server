import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools'
import resolvers from '../resolvers';
import User from './user';
import Song from './song';

const RootQuery = `
  type RootQuery {
    user(id: Int): User
    users: [User]
    song(id: Int): Song
    songs: [Song]
  }
`;

const SchemaDefinition = `
  schema {
    query: RootQuery
  }
`;
const schema = makeExecutableSchema({
  typeDefs: [
    SchemaDefinition,
    RootQuery,
    User,
    Song,
  ],
  resolvers
});
// addMockFunctionsToSchema({ schema, mocks });

export default schema;