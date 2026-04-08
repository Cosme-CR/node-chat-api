const express = require("express")
const cors    = require("cors")

// criar um objeto pra manioular o express
const app = express()

const corsOptions ={
    origin:["*"],  //origem da requisisao podenendo ser um ip ou um * que significa todos
    methods:"GET", // metodos que serao liberados na api
    allowedHeaders:["Content-Type", "Authorization"],//sao permissoes de cabecalho do cors
}
//configura as permisooes da api pelo cors
app.use(cors(corsOptions))

// response retornos da API
//request  sao chegada de dados da api

const estadCidade = require("./module/funcoes.js")


//criando ENDpoint para API
//cada endpoit retorna um json

//mostra a lista de estados do brasil
app.get("/v1/senai/dados/estados", function(request,response){
    let estado = estadCidade.getListaDeEstado()
    
    //mostra q ta ok
    response.status(200)
    response.json(estado)
    
})












//serve pra iniciar a api
app.listen(8080,function(){console.log("api funcionando")})