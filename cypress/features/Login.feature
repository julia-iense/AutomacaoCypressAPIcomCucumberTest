Feature: O cenário abrange a funcionalidade de login de usuários no sistema com  utilização de requisições HTTP - POST.

    @TestCaseId=1
    Scenario Outline: Efetuar Login
    Given que eu preencha os campos de email e senha
    When eu envio uma requisição POST para o endpoint
    Then o status será "<Status>" e a mensagem reportada será "<Mensagem>"

    Examples:

    | Status | Mensagem                    |
    | 200    | Login realizado com sucesso |
    