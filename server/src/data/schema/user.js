import Song from './song';

var User = `
  type User {
    id: Int
    fbid: String
    userName: String
    firstName: String
    lastName: String
    pictureUri: String
    songs: [Song]
  }
`;

// we export User and all types it depends on
// in order to make sure we don't forget to include
// a dependency
export default () => [User, Song];
