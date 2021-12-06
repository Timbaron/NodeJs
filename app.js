const express = require('express');


// express app
const app = express();

// list to request

app.listen(3000);

app.get('/', (req, res) => {
    // res.send('<p>Hello world</p>');
    res.sendFile('./views/index.html', {root: __dirname})
});
app.get('/about', (req, res) => {
    // res.send('<p>About page</p>');
    res.sendFile('./views/about.html', {root: __dirname})
});

// Redirects
app.get('/about-us', (req, res) => {
    // res.send('<p>About page</p>');
    // res.sendFile('./views/about.html', {root: __dirname})
    res.redirect('/about');
});

// 404 page

app.use((req,res)=> {
    res.status(404).sendFile('./views/404.html', {root: __dirname})
})
