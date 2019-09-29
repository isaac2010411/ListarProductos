const express = require('express')
const app = express()
const path = require ("path");
const cors = require("cors")
const { mongoose } = require("./database");

app.use(cors())
app.use(express.json())
app.use(express.static(path.join( __dirname +"/src","dist","index.html")));

app.use("/api/data", require("./src/routes/routes"));


app.listen(4001, function(){
    console.log("Escuchando en el puerto 4001");
});
