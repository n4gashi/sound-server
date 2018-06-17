require('dotenv').config()
const express = require('express')
const next = require('next')
const appPassport = require('./appPassport')
const api = require('./routes/api')
const FBCallback = require('./controllers/auth')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    // Middleware configuration
    server.use(require('morgan')('combined'));

    // Initialize Passport and restore authentication state, if any, from the
    // session.
    server.use(appPassport.initialize());
    server.use(appPassport.session());
    
    server.use('/api', api);

    server.get('/auth/facebook', appPassport.authenticate('facebook'));
    server.get('/auth/facebook/return', FBCallback('/', 'login'));

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })