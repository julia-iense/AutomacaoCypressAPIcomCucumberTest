Feature: Cadastro usuários - Gerencie os usuários, consulte dados para login e cadastre administradores.

    Scenario Outline: PUT/usuarios/{_id} - Editar usuário
    Given que eu preencha todos os campos para o cadastro de usuários
    When eu envio uma requisição POST para o cadastro de usuários
    Then seja feita a alteração do usuário
    And o status será "<Status>" e a mensagem reportada será "<Mensagem>"

    Examples:

    | Status | Mensagem                     |
    | 200    | Registro alterado com sucesso|

    Scenario Outline: PUT/usuarios/{_id} - Caso não seja encontrado usuário com o ID informado é realizado novo cadastro ao invés de alteração.
    Given que eu preencha todos os campos para o cadastro de usuários
    Then seja feita a alteração do usuário não encontrado
    And o status será "<Status>" e a mensagem reportada será "<Mensagem>"

    Examples:

    | Status | Mensagem                      |
    | 201    | Cadastro realizado com sucesso|