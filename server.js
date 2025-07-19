const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, backend! This is a test!')
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

app.use(express.json());

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (username === 'emilys' && password === 'emilyspass') {
        res.send('Login successful');
    } else {
        res.send('Login falled!')
    }
});