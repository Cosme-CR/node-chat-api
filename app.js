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

const zap = require("./module/funcao.js")
//console.log('zap:', zap);


//criando ENDpoint para API
//cada endpoit retorna um json

//mostra a lista de estados do brasil
app.get("/v1/whatsapp/tdsmsgconta/:nick", function(request,response){
    let nick    = request.params.nick
    let msg     = zap.listaTodasMensagen(nick)

    if(msg){
        response.status(200)
        response.json(msg)
    }else{
        response.status(404)
        response.json({"mensagem": "usuario não exite ou nao tem mensagens "})
    }
    
})



//serve pra iniciar a api
app.listen(8080,function(){console.log("api funcionando em http://localhost:8080")})
