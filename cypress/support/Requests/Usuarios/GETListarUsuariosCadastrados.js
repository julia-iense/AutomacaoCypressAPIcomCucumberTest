const ListarUsuariosCadastradosRequests =
{
    ListarUsuariosCadastrados() {
        return cy.request({
            method: "GET",
            url: "https://serverest.dev/usuarios?" + Cypress.env("urlFiltro") + "=" + Cypress.env("valorFiltro"),
            failOnStatusCode: false
        })
    }
}
export default ListarUsuariosCadastradosRequests;