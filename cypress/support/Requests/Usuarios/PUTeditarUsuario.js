const EditarUsuarioRequests =
{
    EditarUsuarios(EditarUsuarioPayload) {
        return cy.request({
            method: "POST",
            url: "https://serverest.dev/usuarios" + Cypress.env("IDusuario"),
            body: EditarUsuarioPayload,
            failOnStatusCode: false
        })
    }
}
export default EditarUsuarioRequests;