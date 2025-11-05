Feature: Cadastro usuários - Gerencie os usuários, consulte dados para login e cadastre administradores.

    Scenario Outline: DELETE/usuarios/{_id} - Excluir usuário
    Given que eu preencha todos os campos para o cadastro de usuários
    When eu envio uma requisição POST para o cadastro de usuários
    Then o usuário seja deletado
    And o status será "<Status>" e a mensagem reportada será "<Mensagem>"

    Examples:

    | Status | Mensagem                     |
    | 200    | Registro excluído com sucesso|


    