


var express = require('express') //llamamos a Express
var app = express()               

var port = process.env.PORT || 8080  // establecemos nuestro puerto



app.get('/',function(req,res) {
    res.json({ mensaje: '¡Hola Mundo!' })  
});



// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)