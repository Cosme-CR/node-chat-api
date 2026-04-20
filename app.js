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


 //função pra retornar todos os dados 
app.get("/v1/whatsapp/todos/dados", function(request,response){
    let td  = zap.getListaTdsDados()
    response.status(200)
    response.json(td)
    //http://localhost:8080/v1/whatsapp/todosDados
})


//função que faz a busca pelo nick name e retorna os dados no json
//getDadosContaUsuario,
app.get("/v1/whatsapp/conta/usuario/:num", function(request,response){
    let num     = request.params.num
    let conta   = zap.getDadosContaUsuario(num)

    if(conta){
        response.status(200)
        response.json(conta)
    }else{
        response.status(404)
        response.json({"mensagem": "usuario não exite "})
    }
    //http://localhost:8080/v1/whatsapp/Conta/Usuario/11955577796
 
})

//função pra retornar todos os dados de contato de um usuario passando o nick do usuario 
//getDadosDeContatosDoUsuario,
app.get("/v1/whatsapp/contatos/usuario/:num", function(request,response){
    let num         = request.params.num
    let contatos    = zap.getDadosDeContatosDoUsuario(num)

    if(contatos){
        response.status(200)
        response.json(contatos)
    }else{
        response.status(404)
        response.json({"mensagem": "usuario não exite "})
    }

    //FUNCIONA
    //http://localhost:8080/v1/whatsapp/contatos/Usuario/11955577796
    
})

//mostra tdas as mgs trocdas de um usuario 
app.get("/v1/whatsapp/todas/mensagem/conta/:num", function(request,response){
    let num     = request.params.num
    let msg     = zap.listaTodasMensagen(num)

    if(msg){
        response.status(200)
        response.json(msg)
    }else{
        response.status(404)
        response.json({"mensagem": "usuario não exite ou nao tem mensagens "})
    }
    //4FUNCIONA
    //http://localhost:8080/v1/whatsapp/todas/Mensagem/Conta/11955577796
    
})

 //mostra todas mensagens entre um usuario e de um contato  precisa do nick do usuario e do nome do contato
// listaMsgCttUsuario,
app.get("/v1/whatsapp/mensagem/contato/usuario/:num", function(request,response){
    let num     = request.params.num
    let ctt     = request.query.ctt; // ?var2=valor2
    let lista   = zap.listaMsgCttUsuario(num,ctt)
    
    
    if(lista){
        response.status(200)
        response.json(lista)
    }else{
        response.status(404)
        response.json({"mensagem": "nao encontrado"})
    }
    //http://localhost:8080/v1/whatsapp/mensagem/contato/usuario/11955577796?ctt=Peter%20Wilsen
    
})


app.get("/v1/whatsapp/contato/busca/palavra/:num", function(request,response){
    let num         = request.params.num
    let palavra     = request.query.palavra; // ?var2=valor2
    let lista       = zap.buscaMsg(num,palavra)
    
    
    if(lista){
        response.status(200)
        response.json(lista)
    }else{
        response.status(404)
        response.json({"mensagem": "nao encontrado"})
    }

    //6 FUNCIONA
    //http://localhost:8080/v1/whatsapp/contato/busca/palavra/11955577796?palavra=como
 
    
})


app.get("/v1/whatsapp/help", function(request,response){
    let docAPI ={
        "API-description": "API para manipular dados tipo WhatsApp (contas, contatos e mensagens)",
        "date": "2026-04-13",
        "developer": "cosme",
        "version": "1.0",
        "endpoints": [
          {
            "id": 1,
            "rota": "/v1/whatsapp/todosDados",
            "metodo": "GET",
            "obs": "Retorna todos os dados"
          },
          {
            "id": 2,
            "rota": "/v1/whatsapp/conta/usuario/:num",
            "metodo": "GET",
            "obs": "Retorna os dados da conta do usuário pelo número"
          },
          {
            "id": 3,
            "rota": "/v1/whatsapp/contatos/usuario/:num",
            "metodo": "GET",
            "obs": "Retorna os contatos do usuário pelo número"
          },
          {
            "id": 4,
            "rota": "/v1/whatsapp/mensagens/conta/:num",
            "metodo": "GET",
            "obs": "Retorna todas as mensagens da conta do usuário"
          },
          {
            "id": 5,
            "rota": "/v1/whatsapp/mensagens/contato/:num",
            "metodo": "GET",
            "query": {
              "ctt": "string (número ou identificador do contato)"
            },
            "obs": "Retorna as mensagens entre o usuário e o contato"
          },
          {
            "id": 6,
            "rota": "/v1/whatsapp/mensagens/busca/:num",
            "metodo": "GET",
            "query": {
              "palavra": "string (termo de busca)"
            },
            "obs": "Busca mensagens do usuário que contenham a palavra"
          }
        ]
    }
    response.status(200)
    response.json(docAPI)

})


//serve pra iniciar a api
app.listen(8080,function(){console.log("api funcionando em http://localhost:8080")})
