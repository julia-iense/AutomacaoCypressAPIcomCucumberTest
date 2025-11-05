# Introduction 
O projeto exemplo de automação de API com cypress+cucumber.
A aplicação utilizada nesse projeto é para estudo e pode ter mais cenários, https://serverest.dev/.

## Tecnologias Utilizadas
**Cypress**: Framework de testes end-to-end, com suporte para testes de API e UI.
**Cucumber**: Framework para escrever testes de comportamento de maneira legível usando Gherkin.
**Gherkin**: Linguagem de especificação legível por humanos para descrever os testes em termos de comportamento.
**JavaScript**: Linguagem de programação utilizada para escrever os testes.

## Pré-Requisitos
Antes de começar, você precisa ter os seguintes programas instalados:

Node.js 
npm  (ou Yarn , se preferir)

### Instalação das dependencias
Após realizar o clone do projeto, é necessário instalar as seguintes dependencias:

- npm install
- npm init -y
- npm install cypress
- npm install --save-dev @cucumber/cucumber
- npm i -D cypress-mochawesome-reporter


Comando utilizado para rodar o projeto
npm cypress open 
npm cypress run  

## Estrutura de Pastas do projeto

**features** - pasta que contêm todos os cenarios de testes em formato gherkin;

**fixtures** - pasta destinada aos arquivos json utilizados na escrita dos scripts do cypress;

**steps** - pasta destinada aos scripts dos cenários separado em subpastas para questões de organização;

**support** - pasta que contêm diversas pastas de configuração;

### Subpastas dentro da support:

Request/Login - pasta destinada a autenticação do projeto.
Request/Requests - Rotas de chamada da API.

## Relatório de execução 
Este projeto utiliza o reports, ao rodar o projeto com o comando "npm cypress run" será gerado um arquivo HTML com o relatorio de toda a execução. Na Wiki do repositorio dessa aplicação, adicionei um relatorio com os pontos que eu considero mais relevantes. 

Wiki deste repositório. 

https://github.com/julia-iense/AutomacaoCypressAPIcomCucumberTest/wiki/Relat%C3%B3rio-de-execu%C3%A7%C3%A3o-desta-automa%C3%A7%C3%A3o-de-testes
