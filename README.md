#  WhatsApp Clone API (Node.js)

API desenvolvida em Node.js para integração com um projeto Front-End de um clone do WhatsApp.
Responsável por fornecer todos os dados necessários de usuários, contatos e mensagens.

---

##  Tecnologias utilizadas

* Node.js
* Express.js
* JavaScript
* Postman (documentação e testes de endpoints)

---

##  Estrutura de Endpoints

###  Usuários

####  Listar todos os usuários

```
GET /v1/whatsapp/users
```

Retorna todos os dados de todos os usuários cadastrados.

---

####  Listar perfil de um usuário

```
GET /v1/whatsapp/user/profile?id={id}
```

Retorna dados do perfil do usuário:

* nome
* nick
* foto
* número
* status
* cor de fundo
* data de criação da conta
* data de encerramento (se houver)

---

###  Contatos

####  Listar contatos de um usuário

```
GET /v1/whatsapp/user/contacts?id={id}
```

Retorna:

* nome
* foto
* descrição/status

---

###  Mensagens

####  Listar todas as mensagens de um usuário

```
GET /v1/whatsapp/user/messages?id={id}
```

Retorna todas as mensagens da conta do usuário.

---

####  Listar conversa entre usuário e contato

```
GET /v1/whatsapp/conversation?userId={id}&contactId={id}
```

Retorna:

* nome do contato
* número
* histórico de mensagens

 Este endpoint utiliza **Query Params**, conforme requisito do projeto.

---

####  Buscar mensagens por palavra-chave

```
GET /v1/whatsapp/messages/search?userId={id}&contactId={id}&q={palavra}
```

Retorna mensagens filtradas com base na palavra-chave informada.

---

##  Documentação no Postman

Todos os endpoints foram documentados e testados no Postman.

Você pode importar a collection para visualizar e testar as rotas da API.

---

##  Observações

* API desenvolvida para fins acadêmicos
* Os dados podem ser mockados (JSON) 


