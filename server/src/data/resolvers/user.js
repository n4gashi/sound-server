const users = [
  {
    id: 1,
    userName: 'User 1',
  },
  {
    id: 2,
    userName: 'User 2',
  },
];

const songs = [
  { id: 1, title: 'Song 1', authorId: 1 },
  { id: 2, title: 'Song 2', authorId: 1 },
  { id: 3, title: 'Song 3', authorId: 1 },
  { id: 4, title: 'Song 4', authorId: 2 },
];

export default {
  Query: {
    user: (_, args) => users.find(u => u.id === args.id),
    allUsers: () => users,
  },
  User: {
    songs(user) {
      return songs.filter(s => s.authorId === user.id)
    }
  },
}
