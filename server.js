const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, backend! This is a test!')
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (username === 'emilys' && password === 'emilyspass') {
        res.json({ success: true, username: username });
    } else {
        res.json({ success: false, message: 'Login failed!' })
    }
});
