// Import Express module
const express = require('express');
const app = express();
const port = 3000;

// Middleware to handle GET requests
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server and listen on port 3000
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
