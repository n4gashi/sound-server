// Some fake data
const books = [
  {
    id: 1,
    userName: "Harry Potter and the Sorcerer's stone",
    author: 'J.K. Rowling',
  },
  {
    id: 2,
    userName: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

// The resolvers
const resolvers = {
  Query: { allUsers: () => books },
};

module.exports = resolvers
