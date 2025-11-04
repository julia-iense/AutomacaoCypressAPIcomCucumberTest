
const CadastroUsuariosRequests = Cypress.automacao.Requests.CadastroUsuariosRequests 
import gerarNomeAleatorio from './../../support/GerarNomesAleatorios'     

let CadastrarUsuariosPayload = {}
let EditarUsuarioPayload = {}

Given("que eu preencha todos os campos para o cadastro de usuários", () => {
    const email = `${gerarNomeAleatorio()}@teste.com`; 
    cy.log(`E-mail gerado: ${email}`);

    cy.fixture('CadastroUsuarios.json').then((dados) => {
        CadastrarUsuariosPayload = { ...dados }; 
        CadastrarUsuariosPayload.email = email; 

        cy.log(CadastrarUsuariosPayload);
        Cypress.env('CadastrarUsuariosPayload',CadastrarUsuariosPayload);
        
    })
})

Given("que o campo obrigatório {string} não seja preenchido", (CampoObrigatorio) => {

    cy.fixture('CadastroUsuarios.json').then((dados) => {
        CadastrarUsuariosPayload = { ...dados }; 
        CadastrarUsuariosPayload[CampoObrigatorio] = ""; 

        cy.log(CadastrarUsuariosPayload);
        Cypress.env('CadastrarUsuariosPayload',CadastrarUsuariosPayload);

    })
        
})

Given("que o campo {string} seja preenchido com o valor inválido", (CampoInvalido) => {
    
    const email = `${gerarNomeAleatorio()}@teste.com`; 
    cy.log(`E-mail gerado: ${email}`);

    cy.fixture('CadastroUsuarios.json').then((dados) => {
        CadastrarUsuariosPayload = { ...dados }; 
        CadastrarUsuariosPayload.email = email; 
        CadastrarUsuariosPayload[CampoInvalido] = "2"; 

        cy.log(CadastrarUsuariosPayload);
        Cypress.env('CadastrarUsuariosPayload',CadastrarUsuariosPayload);

    })
        
})

Given("que eu preencha o campo de email com um email já cadastrado", () => {

    cy.fixture('CadastroUsuarios.json').then((dados) => {
        CadastrarUsuariosPayload = { ...dados }; 

        cy.log(CadastrarUsuariosPayload);
        Cypress.env('CadastrarUsuariosPayload',CadastrarUsuariosPayload);
        
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

        const IDusuario = CadastrarUsuariosResponse.body._id
        Cypress.env('IDusuario',IDusuario);
        cy.log (IDusuario)

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

When("pesquise o usuário não cadastrado",() =>{
    
    CadastroUsuariosRequests.GETBuscarUsuariosIDNaoEncontrado().then((ListarUsuariosCadastradosResponse) => {

        cy.log(ListarUsuariosCadastradosResponse)

        const responseStatus = ListarUsuariosCadastradosResponse
        cy.log(responseStatus)

        cy.wrap(responseStatus).as('responseStatus')

    })  
})

When("o usuário seja deletado",() =>{
    
    CadastroUsuariosRequests.DeleteCadastroUsuario().then((DeleteCadastroUsuarioResponse) => {

        cy.log(DeleteCadastroUsuarioResponse)

        const responseStatus = DeleteCadastroUsuarioResponse
        cy.log(responseStatus)

        cy.wrap(responseStatus).as('responseStatus')

    })  
})

When("pesquise o usuário pelo seu ID de cadastro",() =>{
    
    CadastroUsuariosRequests.BuscarUsuarioId().then((ListarUsuariosCadastradosResponse) => {

        cy.log(ListarUsuariosCadastradosResponse)

        const responseStatus = ListarUsuariosCadastradosResponse
        cy.log(responseStatus)

        cy.wrap(responseStatus).as('responseStatus')

    })  
})

When("seja feita a alteração do usuário",() =>{
    
        cy.fixture('CadastroUsuarios.json').then((EditarUsuarioPayload) => {
        EditarUsuarioPayload = Cypress.env('CadastrarUsuariosPayload') ; 
        EditarUsuarioPayload.administrador = "false"; 
        cy.log(EditarUsuarioPayload);
    

    CadastroUsuariosRequests.EditarUsuarios(EditarUsuarioPayload).then((EditarUsuarioResponse) => {

        cy.log(EditarUsuarioResponse)

        const responseStatus = EditarUsuarioResponse
        cy.log(responseStatus)

        cy.wrap(responseStatus).as('responseStatus')
        })
    })  
})

When("seja feita a alteração do usuário não encontrado",() =>{
    
    CadastroUsuariosRequests.EditarUsuariosNaoEncontrado(CadastrarUsuariosPayload).then((EditarUsuarioResponse) => {

        cy.log(EditarUsuarioResponse)

        const responseStatus = EditarUsuarioResponse
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
  
Then("o status será {string} e a mensagem reportada pelo campo {string} será {string}",(Status, CampoObrigatorioBody,Mensagem) =>{

    const statusCode = parseInt(Status, 10)
    
    cy.get(`@responseStatus`).then((responseStatus) => {
    expect(responseStatus.status).to.be.equal(statusCode)
    expect (responseStatus.body[CampoObrigatorioBody]).to.be.equal(Mensagem)
    })
})

Then("o status será {string}",(Status) =>{

    const statusCode = parseInt(Status, 10)
    
    cy.get(`@responseStatus`).then((responseStatus) => {
    expect(responseStatus.status).to.be.equal(statusCode)

    })
})