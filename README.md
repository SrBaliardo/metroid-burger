# 🍔 Metroid Burguer

<br>

## 📜 Descrição
Projeto desenvolvido durante a formação Fullstack pelo DevClub.

É uma aplicação web que simula um sistema de pedidos de hambúrgueres, inspirado no universo de Metroid. O projeto foi criado como parte do curso de formação Fullstack do DevClub, com o objetivo de aplicar conceitos de desenvolvimento web em um contexto lúdico e interativo.

Inicialmente seria somente para controle de pedidos, entretanto, está sendo refatorado e a ideia é transformá-lo em um SAAS. Usuários poderão cadastrar e gerenciar suas lojas na plataforma e então usuários se cadastrarão para utilizar e fazer pedidos em cada loja. Uma alternativa visando custo de gerenciamento e taxas mais baixas do que alguns famosos.

**andamento seguindo em passos de tartaruga**

- **Backend**: API REST para gerenciamento de pedidos da hamburgueria.
- **Frontend**: Interface do usuário para o sistema de pedidos da hamburgueria.

<br>

## 🔗 Links

- <a href="https://github.com/SrBaliardo/metroid-burger.git/tree/main/jhabburger-api">Backend</a>
- <a href="https://github.com/SrBaliardo/metroid-burger.git/tree/main/jhabburger-interface">Frontend</a>

<br>

## 📦 Tecnologias Utilizadas

- Backend: Node.js, Express, Sequelize (ORM)
- Frontend: React, Vite
- Banco de Dados: PostgreSQL, MongoDB

<br>

## 📥 Como Rodar o Projeto

### 1. Clone o repositório:
  ```bash
  git clone https://github.com/SrBaliardo/metroid-burger.git
  ```

### 2. Iniciando o Backend

#### 2.1. Acesse a pasta do backend
  ```bash
  cd metroid-burger/jhabburger-api
  ```
  
  #### 2.2. Instale as dependências
   ```bash
  yarn install
  ```

  #### 2.3. Configure as variáveis de ambiente copiando o arquivo .env-example para .env e ajustando conforme necessário.

  #### 2.4. Execute as migrações do banco de dados:
  ```bash
  yarn sequelize db:migrate
  ```
  
  #### 2.5. Inicie o servidor
   ```bash
  yarn dev
  ```

### 3. Iniciando o Frontend

  #### 3.1. Acesse a pasta do frontend
  ```bash
  cd metroid-burger/jhabburger-interface
  ```
  
  #### 3.2. Instale as dependências
   ```bash
  yarn install
  ```
  
  #### 3.3. Inicie o servidor de desenvolvimento
   ```bash
  yarn dev
   ```

<br>

🤝 Autor
Desenvolvido por <a href="https://github.com/SrBaliardo">SrBaliardo</a>
