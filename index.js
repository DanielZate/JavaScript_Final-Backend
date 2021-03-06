import express  from "express";
import rutas from "./rutas/rutas.js";
import mongoose from "mongoose"; 
import bodyParser from "body-parser";
import cors from "cors";

//crear objeto express 
const app = express()

//configuracion de conexion a mongo
mongoose.connect('mongodb://localhost/VideoJuegos',
                    {
                        useNewUrlParser: true,
                        useUnifiedTopology: true
                    }
)

//configuracion de bodyparser
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

/*app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });*/
app.use(cors())


//utilizar el archivo de rutas
rutas(app)

//crear y ejecutar servidor
app.listen (5000, function(){
    console.log("Servidor inicializado en puerto 5000")
})