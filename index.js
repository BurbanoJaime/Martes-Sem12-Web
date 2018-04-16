//Instalo las librerias que voy a usar

const express = require('express'),
    consolidate = require('consolidate'),
    hbs = require('handlebars');

//Creo las variables de express
var app = express();

//Comunicación de express con handlebars
app.engine('hbs', consolidate.handlebars);

//Cambio la configuración del motor de templates por defecto a los handlebars
app.set('view engine', 'hbs');

//Cambio la carpeta donde tengo los templates que quiero
app.set('views', './views');

//Para colocar archivos estaticos como el CSS
//-------->el segundo 'css' es la carpeta donde tengo mis estilos
/*-------->app.use('/css',express.static('css'));*/




app.get('/', function (req, res) {
    //El 'index' es el template que usare que esta en la carpeta views
    res.render('index', {
        titulo: 'Hola',
        logohbs: 'https://handlebarsjs.com/images/handlebars_logo.png',
        personas: ['Isita', 'isa', 'isota'],
    });
});


app.listen(3000, function () {
    console.log("Funciona");
});