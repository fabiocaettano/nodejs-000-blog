const express = require('express');
const path = require('path');
const bodyparser = require("body-parser");

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({ extended: true }))

app.set('view engine', 'ejs');

// load static assets
app.use('/css', express.static(path.join(__dirname, 'public/css')))
app.use('/assets', express.static(path.join(__dirname, 'public/assets')))

app.get('/', (req, res) =>{
    res.render('home', { title : "Blog Fabio Caetano DEV"});
})

app.listen(port, ()=>{ console.log(`Listening port ${port}`)});