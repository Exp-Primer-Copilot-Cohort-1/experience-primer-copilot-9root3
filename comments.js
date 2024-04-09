// Create web server and listen for incoming requests
const express = require('express');
const app = express();

// Middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Import the comments controller
const comments = require('./controllers/comments.js')

// Create a new comment
app.post('/comments', comments.create);

// Get all comments
app.get('/comments', comments.list);

// Get a single comment
app.get('/comments/:id', comments.read);

// Update a comment
app.put('/comments/:id', comments.update);

// Delete a comment
app.delete('/comments/:id', comments.delete);

// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});