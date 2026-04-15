

// pega a lista do outro arquivo
const objLista = require("./contatos.js")





//função pra retornar todos os dados do arquivo contatos.js
function getListaTdsDados(){

    return objLista.contatos["whats-users"];

}

//:whats-usersconsole.log(getListaTdsDados())
//console.log(objLista.contatos)




//função que faz a busca pelo nick name e retorna os dados no json
function getDadosContaUsuario(num){

    let retorno = {}
    let statu = false

    for(let dado of objLista.contatos["whats-users"]){
        if(Number(num) == Number(usuario.number)){
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
function getDadosDeContatosDoUsuario(num){  
    //objeto de retorno
    let retorno = {}
    //vetor que vai receber a lista de contato
    let contato = []
    let statu   = false

    for(let usuario of objLista.contatos["whats-users"]){
        if(Number(num) == Number(usuario.number)){
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


//mostra tdas as mgs trocdas de um usuario 
function listaTodasMensagen(num){

    let retorno = {}
    let statu   = false

    let contat=[]
    
    for(let usuario of objLista.contatos["whats-users"]){
        if(Number(num) == Number(usuario.number)){
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


//mostra todas mensagens entre um usuario e de um contato  precisa do nick do usuario e do nome do contato
function listaMsgCttUsuario(num,ctt){
    let retorno = {}
    let statu    = false
    for(let usuario of objLista.contatos["whats-users"]){
        if(Number(num) == Number(usuario.number)){
            for(let contat of usuario.contacts){
                if(ctt.toUpperCase() == contat.name.toUpperCase()){
                    retorno.usuario     = usuario.nickname
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
//console.log(listaMsgCttUsuario("Ricky","Ana Maria"))
//



//função pra buscar uma palavra dentro da msg
function buscaMsg(num, palavra){
    let retorno     = {}
    let contato     = []
    let statu       = false

    for(let usuario of objLista.contatos["whats-users"]){
        if(Number(num) == Number(usuario.number)){
            for(let ctt of usuario.contacts){
                //retorno = ctt.messages

                for(let msg of ctt.messages){
                    
                    
                    if(msg.content.toUpperCase().includes(palavra.toUpperCase())){

                        contato.push({
                            nome:           ctt.name,
                            foto:           ctt.image,
                            mensagem:{
                                hora:       msg.time,
                                conteudo:   msg.content,
                                autor:      msg.sender

                        }})

                        statu=true
                        
                    }
                }
            }
        }
    }
    retorno.contatos = contato
    if(statu){
        return retorno
    }else{return false}

}
//console.log(buscaMsg("11955577796","como"))


module.exports={

    //função pra retornar todos os dados do arquivo contatos.js
    getListaTdsDados,

    //função que faz a busca pelo nick name e retorna os dados no json
    getDadosContaUsuario,

    //função pra retornar todos os dados de contato de um usuario passando o nick do usuario 
    getDadosDeContatosDoUsuario,

    //mostra tdas as mgs trocdas de um usuario 
    listaTodasMensagen,

    
    //mostra todas mensagens entre um usuario e de um contato  precisa do nick do usuario e do nome do contato
    listaMsgCttUsuario,

    //busca msg de acordo com a palavra recebida
    buscaMsg,

}
