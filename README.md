
# Documentação da API user-client




## Visão geral

A API user-client foi desenvolvida para gerenciar usuários e autenticação em uma aplicação web. Esta API foi construída utilizando Node.js e o framework Express. O código é mantido no repositório do GitHub: https://github.com/Syxh0wN/user-client. A versão atual é 1.0.0 e está sob a licença MIT.
## Tecnologias e dependências

A API user-client foi desenvolvida com as seguintes tecnologias e dependências:

Node.js
Express
TypeScript
TypeORM
PostgreSQL (pg)
bcryptjs
jsonwebtoken
uuid
yup
dotenv
class-transformer
reflect-metadata
express-async-errors
## Dependências de desenvolvimento

As seguintes dependências de desenvolvimento são utilizadas:

@types/bcryptjs
@types/express
@types/jsonwebtoken
@types/node
nodemon
ts-node-dev
typescript
## Scripts

Aqui estão os scripts disponíveis no package.json:

dev: Inicia o servidor em modo de desenvolvimento usando o ts-node-dev.
migration:generate: Gera uma nova migração do TypeORM a partir das alterações feitas nas entidades.
migration:run: Executa as migrações pendentes do TypeORM.
## Autenticação e autorização

A API user-client utiliza um sistema de autenticação e autorização baseado em token. Os endpoints estão divididos em duas categorias: Client e User. A autenticação é necessária para acessar alguns endpoints, e alguns deles também exigem permissões de administrador.

### Client
Os seguintes endpoints estão disponíveis para gerenciamento de clientes:

#### POST /client

Cria um novo cliente.

- Autenticação: Requerida
- Permissão de administrador: Requerida
- Validação do esquema: addClientValidation

### GET /client

Retorna uma lista de todos os clientes.

- Autenticação: Requerida
- Permissão de administrador: Requerida

#### DELETE /client/:id

Remove um cliente com base no ID fornecido.

- Autenticação: Requerida
- Permissão de administrador: Requerida

### User

Os seguintes endpoints estão disponíveis para gerenciamento de usuários:

#### POST /user

Cria um novo usuário.

- Autenticação: Não requerida
- Validação do esquema: userRegisterValidation

### GET /user

Retorna uma lista de todos os usuários.

- Autenticação: Requerida
- Permissão de administrador: Requerida

### GET /user/:id

Retorna um usuário com base no ID fornecido.

- Autenticação: Requerida

### PATCH /user/:id

Atualiza um usuário com base no ID fornecido.

- Autenticação: Requerida
- Validação do esquema: userValidationPatch

### DELETE /user/:id

Remove um usuário com base no ID fornecido.

- Autenticação: Requerida
- Permissão de administrador: Requerida
## Autenticação e autorização

A API user-client utiliza um sistema de autenticação e autorização baseado em token. Os endpoints estão divididos em duas categorias: Client e User. A autenticação é necessária para acessar alguns endpoints, e alguns deles também exigem permissões de administrador.

### Client
Os seguintes endpoints estão disponíveis para gerenciamento de clientes:

#### POST /client

Cria um novo cliente.

- Autenticação: Requerida
- Permissão de administrador: Requerida
- Validação do esquema: addClientValidation

### GET /client

Retorna uma lista de todos os clientes.

- Autenticação: Requerida
- Permissão de administrador: Requerida

#### DELETE /client/:id

Remove um cliente com base no ID fornecido.

- Autenticação: Requerida
- Permissão de administrador: Requerida

### User

Os seguintes endpoints estão disponíveis para gerenciamento de usuários:

#### POST /user

Cria um novo usuário.

- Autenticação: Não requerida
- Validação do esquema: userRegisterValidation

### GET /user

Retorna uma lista de todos os usuários.

- Autenticação: Requerida
- Permissão de administrador: Requerida

### GET /user/:id

Retorna um usuário com base no ID fornecido.

- Autenticação: Requerida

### PATCH /user/:id

Atualiza um usuário com base no ID fornecido.

- Autenticação: Requerida
- Validação do esquema: userValidationPatch

### DELETE /user/:id

Remove um usuário com base no ID fornecido.

- Autenticação: Requerida
- Permissão de administrador: Requerida
# Endpoints

## Endpoint de Clientes

- POST /client: cria um novo cliente no banco de dados com as informações fornecidas no corpo da requisição.
- GET /client: retorna uma lista de todos os clientes cadastrados no banco de dados.
- GET /client/:id: retorna informações sobre um cliente específico com o ID fornecido.
- DELETE /client/:id: remove um cliente específico do banco de dados com o ID fornecido.

## Endpoint de Login

- POST /login: verifica as credenciais de um usuário e retorna um token de autenticação.

## Endpoint de Usuários

- POST /user: cria um novo usuário no banco de dados com as informações fornecidas no corpo da requisição.
- GET /user: retorna uma lista de todos os usuários cadastrados no banco de dados.
- GET /user/:id: retorna informações sobre um usuário específico com o ID fornecido.
- PATCH /user/:id: atualiza as informações de um usuário específico com o ID fornecido.
- DELETE /user/:id: remove um usuário específico do banco de dados com o ID fornecido.

### Os endpoints de Cliente e Usuário exigem autenticação e autorização de administrador para serem acessados, enquanto o endpoint de Login não exige autenticação. Além disso, o endpoint de Usuário permite que o próprio usuário atualize suas informações, além de permitir que um administrador atualize as informações de qualquer usuário.


## Contato

### Caso tenha dúvidas ou sugestões, entre em contato com o autor da API:  Syxh0wN Email: leonardobennr@gmail.com