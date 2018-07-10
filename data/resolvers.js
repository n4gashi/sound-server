// Some fake data
const users = [
  {
    id: 1,
    userName: "Harry Potter and the Sorcerer's stone",
  },
  {
    id: 2,
    userName: 'Jurassic Park',
  },
];

const songs = [
  { id: 1, title: 'Song 1', authorId: 1 },
  { id: 2, title: 'Song 2', authorId: 1 },
  { id: 3, title: 'Song 3', authorId: 1 },
  { id: 4, title: 'Song 4', authorId: 2 },
];

// The resolvers
const resolvers = {
  Query: {
    user: (_, args) => {
      console.log(users.find(u => u.id === args.id));
      return users.find(u => u.id === args.id)
    },
    allUsers: () => users,
    allSongs: () => songs,
  },
  User: {
    songs(user) {
      console.log(songs.filter(s => s.authorId === user.id))
      return songs.filter(s => s.authorId === user.id)
    }
  },
  Song: {
    author(song) {
      return users.find(u => u.id === song.authorId)
    }
  }
};

module.exports = resolvers
