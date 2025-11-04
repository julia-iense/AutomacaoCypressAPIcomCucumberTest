Feature: Cadastro usuários

    Scenario Outline: Cadastrar usuários
    Given que eu preencha todos os campos para o cadastro de usuários
    When eu envio uma requisição POST para o cadastro de usuários
    Then o status será "<Status>" e a mensagem reportada será "<Mensagem>"

    Examples:

    | Status | Mensagem                       |
    | 201    | Cadastro realizado com sucesso |


    Scenario Outline: Lista de usuários cadastrados
    Given que eu pesquise o usuário pelo seguinte filtro "<Filtro>" e com o valor "<Valor>"
    When eu enviar a requisição GET para filtrar por dados do usuário
    Then o status será "<Status>"

    Examples:

    | Filtro    | Valor                     | Status |
    | _id       | 1niOhbHVQOr9w75j          | 200    |
    | nome      | Novo                      | 200    |
    | email     | pyvutzwlkj387@example.com | 200    |

    