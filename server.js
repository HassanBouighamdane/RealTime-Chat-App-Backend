const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const mongoose = require('mongoose');
const { ok } = require('assert');
// import {User} from './src/models/user';

// Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017', {
//   useUnifiedTopology: true,
// });

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = process.env.PORT || 3000;

// Serve static files from the "public" folder
app.use(express.static('public'));

require("./src/routes/routes.js")(app);

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});