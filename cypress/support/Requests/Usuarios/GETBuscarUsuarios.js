const BuscarUsuariosCadastradosIdRequests =
{
    BuscarUsuariosCadastradosId() {
        return cy.request({
            method: "GET",
            url: "https://serverest.dev/usuarios",
            failOnStatusCode: false
        })
    }
}
export default BuscarUsuariosCadastradosIdRequests;