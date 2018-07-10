# sound-server

## Architecture
```
 - components <--- React components
 - data <--- GraphQL type defs, resolvers, schemas...
 - db <--- database abstraction files
 - pages <--- NextJS pages
 - server <--- Mostly application logic
```

## Useful documentation before starting
- [db-migrate](https://db-migrate.readthedocs.io/) (migrations system)

## Getting started
```bash
yarn install
# Make sure db is updated
npm run migrate up
```

## Develop
### Start server
```bash
npm run dev
```