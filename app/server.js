



var express = require('express') //llamamos a Express
var app = express()       
var bodyParser = require('body-parser')        

var port = process.env.PORT || 8080  // establecemos nuestro puerto

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())            

// nuestra ruta irá en http://localhost:8080/api
// es bueno que haya un prefijo, sobre todo por el tema de versiones de la API
var router = require('./routes/index.js') // './routes/index.js' = './routes' ya que al no existir fichero llamado routes va a la carpeta y por defecto al index.js .j no es tampoco obligatorio.
app.use('/api', router)

//arrancamos el servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)