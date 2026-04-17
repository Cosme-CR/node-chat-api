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

```id="gk2l9w"
project
 ┣ module
 ┃ ┣ funcao.js     # Regras de negócio
 ┃ ┗ contatos.js   # Base de dados (mock)
 ┣ app.js          # API (Express)
 ┗ README.md
```

---

## Base URL

```id="z4r6xy"
http://localhost:8080
```

---

## Endpoints da API

### 1. Listar todos os dados

```id="7tnqhj"
GET /v1/whatsapp/todosDados
```

Retorna todos os usuários com seus contatos e mensagens.

---

### 2. Buscar dados de um usuário

```id="z1m4ve"
GET /v1/whatsapp/Conta/Usuario/:num
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

```id="y5d3kq"
GET /v1/whatsapp/contatos/Usuario/:num
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

```id="3k9vxp"
GET /v1/whatsapp/todas/Mensagem/Conta/:num
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

```id="x8r2lm"
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

```id="p4c8df"
GET /v1/whatsapp/contato/busca/palavra/:num?palavra=termo
```

Query Params:

* palavra: termo de busca

Retorna:

* contatos onde a palavra foi encontrada
* mensagens filtradas

---

### 7. Documentação da API

```id="m1q9rs"
GET /v1/whatsapp/help
```

Retorna um JSON com todos os endpoints disponíveis.

---

## Como executar o projeto

```bash id="t6n2wb"
npm install
node app.js
```

A API estará disponível em:

```id="f9u3xz"
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
