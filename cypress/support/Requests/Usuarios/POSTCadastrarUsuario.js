const CadastrarUsuariosRequests =
{
    CadastrarUsuarios(CadastrarUsuariosPayload) {
        return cy.request({
            method: "POST",
            url: "https://serverest.dev/usuarios",
            body: CadastrarUsuariosPayload,
            failOnStatusCode: false
        })
    }
}
export default CadastrarUsuariosRequests;