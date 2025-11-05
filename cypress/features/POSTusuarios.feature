Feature: Cadastro usuários - Gerencie os usuários, consulte dados para login e cadastre administradores.

    Scenario Outline: POST/usuarios - Cadastrar usuários
    Given que eu preencha todos os campos para o cadastro de usuários
    When eu envio uma requisição POST para o cadastro de usuários
    Then o status será "<Status>" e a mensagem reportada será "<Mensagem>"

    Examples:

    | Status | Mensagem                       |
    | 201    | Cadastro realizado com sucesso |

    Scenario Outline: POST/usuarios - Tentar cadastrar usuários com email já existente
    Given que eu preencha o campo de email com um email já cadastrado
    When eu envio uma requisição POST para o cadastro de usuários
    Then o status será "<Status>" e a mensagem reportada será "<Mensagem>"

    Examples:

    | Status | Mensagem                       |
    | 400    | Este email já está sendo usado |

    Scenario Outline: POST/usuarios - Tentar cadastrar usuários sem os campos obrigatórios
    Given que o campo obrigatório "<CampoObrigatorio>" não seja preenchido
    When eu envio uma requisição POST para o cadastro de usuários
    Then o status será "<Status>" e a mensagem reportada pelo campo "<CampoObrigatorioBody>" será "<Mensagem>"

    Examples:

    | CampoObrigatorio | Status | CampoObrigatorioBody | Mensagem                                 |
    | nome             | 400    | nome                 | nome não pode ficar em branco            |
    | email            | 400    | email                | email não pode ficar em branco           |
    | password         | 400    | password             | password não pode ficar em branco        |
    | administrador    | 400    | administrador        | administrador deve ser 'true' ou 'false' |

    Scenario Outline: POST/usuarios - Tentar cadastrar usuários com o campo preenchido com valor inválido
    Given que o campo "<CampoInvalido>" seja preenchido com o valor inválido
    When eu envio uma requisição POST para o cadastro de usuários
    Then o status será "<Status>" e a mensagem reportada pelo campo "<CampoObrigatorioBody>" será "<Mensagem>"

    Examples:

    | CampoInvalido   | Status | CampoObrigatorioBody | Mensagem                                 |
    | email           | 400    | email                | email deve ser um email válido           |
    | administrador   | 400    | administrador        | administrador deve ser 'true' ou 'false' |