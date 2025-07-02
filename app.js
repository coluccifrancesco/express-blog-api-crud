require('dotenv').config();
const PORT = process.env.PORT;
const express = require('express');
const chalk = require('chalk');
const app = express();
const postsRouter = require('./routes/posts');

console.log(PORT);

app.get(('/'), (req, res) => {
    res.send('Hello World')
})

app.use('/posts', postsRouter);
app.use(express.static('public'))

// Impostiamo il body-parser per far sì che la 
// nostra app riesca a decifrare il request body.
app.use(express.json());


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);  
})