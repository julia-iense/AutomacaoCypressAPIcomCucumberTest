const DeleteCadastroUsuarioRequests =
{
    DeleteCadastroUsuario() {
        return cy.request({
            method: "DELETE",
            url: "https://serverest.dev/usuarios/" + Cypress.env("IDusuario"),
            failOnStatusCode: false
        })
    }
}
export default DeleteCadastroUsuarioRequests;