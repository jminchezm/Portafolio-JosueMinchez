const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

//Utilización de hbs para el renderizado de la página web
app.set('view engine', 'hbs');

//Uso de parciales "codigo que se repite en mas de un lugar o paginas web"
hbs.registerPartials(__dirname + '/views/partials');

//Middelware para la carpeta public
app.use(express.static('public')); 

app.get('/', (req, res) => {
    res.render('inicio');
})

app.get('/sobreMi', (req, res) => {
    res.render('sobremi');
})

app.get('/formacionAcademica', (req, res) => {
    res.render('formacionAcademica');
})

app.get('/habilidades', (req, res) => {
    res.render('habilidades');
})

app.get('/proyectos', (req, res) => {
    res.render('proyectos');
})

app.get('/proyectos/proyecto1', (req, res) => {
    res.render('proyecto1');
})

app.get('/proyectos/proyecto2', (req, res) => {
    res.render('proyecto2');
})

app.get('/proyectos/proyecto3', (req, res) => {
    res.render('proyecto3');
})

app.get('/proyectos/proyecto4', (req, res) => {
    res.render('proyecto4');
})

app.get('/proyectos/proyecto5', (req, res) => {
    res.render('proyecto5');
})

app.get('/contacto', (req, res) => {
    res.render('contacto');
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
    console.log(`Ejemplo app escuchando a htpp://localhost:${port}`);
})