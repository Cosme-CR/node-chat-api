

// pega a lista do outro arquivo
const objLista = require("./contatos.js")





//função pra retornar todos os dados do arquivo contatos.js
function getListaTdsDados(){

    return objLista.contatos["whats-users"];

}

//:whats-usersconsole.log(getListaTdsDados())
//console.log(objLista.contatos)




//função que faz a busca pelo nick name e retorna os dados no json
function getDadosContaUsuario(nick){

    let retorno = {}
    let statu = false

    for(let dado of objLista.contatos["whats-users"]){
        if(nick.toUpperCase() == dado.nickname.toUpperCase()){
            retorno.nome            = dado.account
            retorno.nickname        = dado.nickname
            retorno.criacaoConta    = dado["created-since"]
            retorno.foto            = dado["profile-image"]
            retorno.numero          = dado.number
            retorno.background      = dado.background
            
            statu = true
        }
        
    }

    if(statu){
        return retorno
    }else{
        return false
    }

}

//console.log(getDadosContaUsuario("Sand"))


//função pra retornar todos os dados de contato de um usuario passando o nick do usuario 
function getDadosDeContatosDoUsuario(nick){  
    //objeto de retorno
    let retorno = {}
    //vetor que vai receber a lista de contato
    let contato = []
    let statu   = true

    for(let usuario of objLista.contatos["whats-users"]){
        if(usuario.nickname.toUpperCase() == nick.toUpperCase()){
            retorno.nome        = usuario.account
            retorno.numero      = usuario.number
            //retorno = contatos    = usuario.contacts
            //percorrer os contatos 
            for(let ctt of usuario.contacts){
                contato.push({
                    nome        : ctt.name, 
                    descricao   : ctt.description,
                    foto        : ctt.image
                })
            }
            retorno.contatos    = contato

            statu = true
        }
    }

    if(statu){
        return retorno
    }else{return false}

}

//console.log(getDadosDeContatosDoUsuario("Sand"))

function listaTodasMensagen(nick){

    let retorno = {}
    let statu   = false

    let contat=[]
    
    for(let usuario of objLista.contatos["whats-users"]){
        if(nick.toUpperCase() == usuario.nickname.toUpperCase()){
            retorno.nome = usuario.account

            for(let ctt of usuario.contacts){
               
                contat.push({
                    nome:       ctt.name,
                    descricao:  ctt.description,
                    foto:       ctt.image,
 
                    mensagem:   ctt.messages

                })
            }
            retorno.contatos = contat
            //retorno.contatos = usuario.contacts
            statu = true
        }
    }

    if(statu){
        return retorno
    }else{return false}

}
//console.log(listaTodasMensagen("Sand"))

function listaMsgCttUsuario(nick,ctt){
    let retorno = {}
    let statu    = false
    for(let usuario of objLista.contatos["whats-users"]){
        if(nick.toUpperCase() == usuario.nickname.toUpperCase()){
            for(let contat of usuario.contacts){
                if(ctt.toUpperCase() == contat.name.toUpperCase()){
                    retorno.usuario     = nick
                    retorno.numero      = usuario.number 
                    

                    retorno.nome        = contat.name
                    retorno.descricao   = contat.description
                    retorno.mensagens   = contat.messages

                    statu = true
                }
            }
        }
    }

    if(statu){
        return retorno
    }else{return false}
}


console.log(listaMsgCttUsuario("Ricky","Ana Maria"))

module.exports={

 
   listaTodasMensagen, 
}
