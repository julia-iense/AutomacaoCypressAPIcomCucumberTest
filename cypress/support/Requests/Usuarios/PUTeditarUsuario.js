const EditarUsuarioRequests =
{
    EditarUsuarios(EditarUsuarioPayload) {
        return cy.request({
            method: "PUT",
            url: "https://serverest.dev/usuarios/" + Cypress.env("IDusuario"),
            body: EditarUsuarioPayload,
            failOnStatusCode: false
        })
    }
}
export default EditarUsuarioRequests;