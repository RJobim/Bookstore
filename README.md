# Bookstore - Sistema de Gerenciamento de Livraria

## Sobre o Projeto
Este é um sistema de gerenciamento de livraria desenvolvido em JavaScript que permite o controle de livros, autores, usuários e pedidos. O sistema utiliza programação orientada a objetos e implementa funcionalidades essenciais para uma livraria virtual.

## Funcionalidades Principais

### Gerenciamento de Produtos
- Cadastro e controle de livros e pôsteres
- Controle de estoque
- Sistema de preços
- Descrições e informações detalhadas dos produtos

### Gerenciamento de Autores
- Cadastro de autores
- Informações como nacionalidade e biografia
- Vinculação de autores com livros

### Sistema de Usuários
- Cadastro de usuários
- Autenticação básica
- Gerenciamento de dados pessoais

### Sistema de Pedidos
- Criação de pedidos
- Carrinho de compras
- Verificação automática de estoque
- Cálculo de valores totais

## Estrutura do Projeto
- `App.js`: Classe principal que gerencia todas as operações
- `Database.js`: Simulação de banco de dados em memória
- `entities/`: Pasta com as classes do sistema
  - `Author.js`: Gerenciamento de autores
  - `Book.js`: Gerenciamento de livros
  - `Order.js`: Gerenciamento de pedidos
  - `Poster.js`: Gerenciamento de pôsteres
  - `Product.js`: Classe base para produtos
  - `User.js`: Gerenciamento de usuários

## Tecnologias Utilizadas
- JavaScript
- Programação Orientada a Objetos
- Módulos ES6
- Gerenciamento de dependências com Node.js

## Como Usar
1. Clone o repositório
2. Execute o arquivo index.js para testar as funcionalidades
