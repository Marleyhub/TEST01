const express = require ('express')
var app = express()

app.get('/', function(req,res){
    res.sendFile(__dirname + "/index.html")
}
    )



app.listen(3000, function(){console.log("Servidor rodando na porta 3000")})