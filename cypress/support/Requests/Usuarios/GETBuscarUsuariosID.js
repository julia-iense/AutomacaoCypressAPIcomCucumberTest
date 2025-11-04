const BuscarUsuarioIdRequests =
{
    BuscarUsuarioId() {
        return cy.request({
            method: "GET",
            url: "https://serverest.dev/usuarios/" + Cypress.env("IDusuario"),
            failOnStatusCode: false
        })
    }
}
export default BuscarUsuarioIdRequests;