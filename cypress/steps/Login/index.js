
const LoginRequests = Cypress.automacao.Requests.LoginRequests      

let LoginPayload = {}
let responseLogin = {}

Given("que eu preencha os campos de email e senha",() =>{

    LoginPayload = {
        "email": "fulano@qa.com",
        "password": "teste"
      }

    cy.log(LoginPayload)
})

When("eu envio uma requisição POST para o endpoint",() =>{
    

    LoginRequests.Login(LoginPayload).then((responseLogin) => {

        cy.log(responseLogin)

        const responseStatus = responseLogin
        cy.log(responseStatus)

        cy.wrap(responseStatus).as('responseStatus')

    })

    
})
