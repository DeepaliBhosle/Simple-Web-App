const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Welcome to My Node.js Web App</h1><p>This is a simple Express.js server.</p>');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

