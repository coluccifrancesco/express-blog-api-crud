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



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);  
})