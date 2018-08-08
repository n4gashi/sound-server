import User from './user';

var Song = `
  type Song {
    id: Int
    title: String
    authorName: String
    author: User
  }
`;

// we export Song and all types it depends on
// in order to make sure we don't forget to include
// a dependency
export default () => [Song, User];
