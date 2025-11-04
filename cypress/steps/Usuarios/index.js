
const CadastroUsuariosRequests = Cypress.automacao.Requests.CadastroUsuariosRequests 
import gerarNomeAleatorio from './../../support/GerarNomesAleatorios'     

let CadastrarUsuariosPayload = {}

Given("que eu preencha todos os campos para o cadastro de usuários", () => {
    const email = `${gerarNomeAleatorio()}@teste.com`; 
    cy.log(`E-mail gerado: ${email}`);

    cy.fixture('CadastroUsuarios.json').then((dados) => {
        CadastrarUsuariosPayload = { ...dados }; 
        CadastrarUsuariosPayload.email = email; 

        cy.log(CadastrarUsuariosPayload);
    })
})

Given("que eu pesquise o usuário pelo seguinte filtro {string} e com o valor {string}", (Filtro,Valor) => {

    const urlFiltro = Filtro
    Cypress.env('urlFiltro',urlFiltro);
    cy.log (urlFiltro)

    const valorFiltro = Valor
    Cypress.env('valorFiltro',valorFiltro);
    cy.log(valorFiltro)
})

When("eu envio uma requisição POST para o cadastro de usuários",() =>{
    
    CadastroUsuariosRequests.CadastrarUsuarios(CadastrarUsuariosPayload).then((CadastrarUsuariosResponse) => {

        cy.log(CadastrarUsuariosResponse)

        const responseStatus = CadastrarUsuariosResponse
        cy.log(responseStatus)

        cy.wrap(responseStatus).as('responseStatus')

    })  
})

When("eu enviar a requisição GET para filtrar por dados do usuário",() =>{
    
    CadastroUsuariosRequests.ListarUsuariosCadastrados().then((ListarUsuariosCadastradosResponse) => {

        cy.log(ListarUsuariosCadastradosResponse)

        const responseStatus = ListarUsuariosCadastradosResponse
        cy.log(responseStatus)

        cy.wrap(responseStatus).as('responseStatus')

    })  
})



Then("o status será {string} e a mensagem reportada será {string}",(Status,Mensagem) =>{

    const statusCode = parseInt(Status, 10)
    
    cy.get(`@responseStatus`).then((responseStatus) => {
    expect(responseStatus.status).to.be.equal(statusCode)
    expect (responseStatus.body.message).to.be.equal(Mensagem)
    })
})

Then("o status será {string}",(Status) =>{

    const statusCode = parseInt(Status, 10)
    
    cy.get(`@responseStatus`).then((responseStatus) => {
    expect(responseStatus.status).to.be.equal(statusCode)

    })
})