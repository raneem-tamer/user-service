const express = require('express');
const app = express();
const port = 3001;

// Mock data for users
const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' }
];

// Middleware to handle errors and JSON response format
app.use(express.json());

// Get all users
app.get('/users', (req, res) => {
    res.json(users);
});

// Get a single user by ID
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).send({ error: 'User not found' });
    }
    res.json(user);
});

// Default route for undefined paths
app.get('*', (req, res) => {
    res.send('Welcome to the User Service API!');
});

// Start the server
app.listen(port, () => {
    console.log(`User service running on http://localhost:${port}`);
});
