// Import
import express from "express";

// Create instance of epxress
const app = express();
let PORT = 3000;

// Middleware

// Route
app.get('/', (req, res) => {
    res.send('Congrats! The bitch is working!')
})

// Catch All Route
app.get('*', (req, res) => {
    res.status(404).send('404 Page Not Found');
});

// Listen
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})