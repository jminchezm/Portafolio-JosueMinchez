const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

//Utilización de hbs para el renderizado de la página web
app.set('view engine', 'hbs');

//Middelware para la carpeta public
app.use(express.static('public')); 

app.get('/', (req, res) => {
    res.render('index');
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
    console.log(`Ejemplo app escuchando a htpp://localhost:${port}`);
})