const EditarUsuarioNaoEncontradoRequests =
{
    EditarUsuariosNaoEncontrado(CadastrarUsuariosPayload) {
        return cy.request({
            method: "PUT",
            url: "https://serverest.dev/usuarios/6xRpKRYNOopXegcb" ,
            body: CadastrarUsuariosPayload,
            failOnStatusCode: false
        })
    }
}
export default EditarUsuarioNaoEncontradoRequests;