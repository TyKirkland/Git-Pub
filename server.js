const express = require('express');

const app = express();

const drinks = require("./models/drinks");

const foods = require("./models/food");

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!');
})

//INDEX ROUTE
app.get('/drinks', (req, res) => {
    res.render("drinks_index", {drinks});
})

//SHOW ROUTE
app.get('/drinks/:id', (req, res) => {
    let drink = drinks[req.params.id];
    res.render("drinks_show", {drink});
})

//INDEX ROUTE
app.get('/foods', (req, res) => {
    res.render("food_index", {foods});
})

//SHOW ROUTE
app.get('/foods/:id', (req, res) => {
    let food = foods[req.params.id];
    res.render("food_show", {food});
})

//keep this at the bottom
app.listen(3000, () => {
    console.log('Listening on port 3000!');
})