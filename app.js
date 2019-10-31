// Requires

var express = require('express');
const path = require('path')


// Inicializar variables
var app = express();

// Allowed extensions list can be extended depending on your own needs
const allowedExt = [
    '.js',
    '.ico',
    '.css',
    '.png',
    '.jpg',
    '.woff2',
    '.woff',
    '.ttf',
    '.svg',
  ];


//CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
});


 // HABILITAR PUBLIC PARA ANGULAR
 app.get('*', (req, res) => {
    if (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
      res.sendFile(path.resolve(`dist/tiendaquesos/${req.url}`));
    } else {
      res.sendFile(path.resolve('dist/tiendaquesos/index.html'));
    }
  });

// Escuchar peticiones
app.listen(3001, () => {
    console.log(`Express server puerto 3001: \x1b[32m%s\x1b[0m`, 'online');
});