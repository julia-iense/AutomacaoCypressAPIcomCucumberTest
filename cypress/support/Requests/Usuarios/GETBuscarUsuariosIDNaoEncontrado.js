const GETBuscarUsuariosIDNaoEncontradoRequests =
{
    GETBuscarUsuariosIDNaoEncontrado() {
        return cy.request({
            method: "GET",
            url: "https://serverest.dev/usuarios/BSdjuVyig1ME8aj8",
            failOnStatusCode: false
        })
    }
}
export default GETBuscarUsuariosIDNaoEncontradoRequests;