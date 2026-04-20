# WhatsApp Clone API (Node.js)

API REST desenvolvida em Node.js para simular funcionalidades básicas de um sistema de mensagens, incluindo gerenciamento de usuários, contatos e mensagens.

---

## Tecnologias utilizadas

* Node.js
* Express.js
* JavaScript
* CORS
* Postman (testes de endpoints)

---

## Estrutura do Projeto

```
project
 ┣ module
 ┃ ┣ funcao.js     # Regras de negócio
 ┃ ┗ contatos.js   # Base de dados (mock)
 ┣ app.js          # API (Express)
 ┗ README.md
```

---

## Base URL

```
http://localhost:8080
```

---

## Endpoints da API

### 1. Listar todos os dados

```
GET /v1/whatsapp/tododados
```

Retorna todos os usuários com seus contatos e mensagens.

---

### 2. Buscar dados de um usuário

```id="z1m4ve"
GET /v1/whatsapp/conta/usuario/:num
```

Parâmetro:

* num: número do usuário

Retorna:

* nome
* nickname
* data de criação
* foto de perfil
* número
* background

---

### 3. Listar contatos de um usuário

```
GET /v1/whatsapp/contatos/usuario/:num
```

Retorna:

* nome do usuário
* número
* lista de contatos:

  * nome
  * descrição
  * foto

---

### 4. Listar todas as mensagens de um usuário

```
GET /v1/whatsapp/todas/mensagem/conta/:num
```

Retorna:

* nome do usuário
* contatos com:

  * nome
  * descrição
  * foto
  * mensagens

---

### 5. Listar conversa com um contato

```
GET /v1/whatsapp/mensagem/contato/usuario/:num?ctt=NomeDoContato
```

Query Params:

* ctt: nome do contato

Retorna:

* dados do usuário
* dados do contato
* histórico de mensagens

---

### 6. Buscar mensagens por palavra-chave

```
GET /v1/whatsapp/contato/busca/palavra/:num?palavra=termo
```

Query Params:

* palavra: termo de busca

Retorna:

* contatos onde a palavra foi encontrada
* mensagens filtradas

---

### 7. Documentação da API

```
GET /v1/whatsapp/help
```

Retorna um JSON com todos os endpoints disponíveis.

---

## Como executar o projeto

```bash 
npm install
node app.js
```

A API estará disponível em:

```
http://localhost:8080
```

---

## Testes

Recomendado utilizar:

* Postman

---

## Observações

* Projeto com dados mockados (arquivo JSON)
* Desenvolvido para fins acadêmicos
* Não utiliza banco de dados real

---

## Autor

Cosme Ribeiro
