const LoginServerestRequests =
{
    Login(LoginPayload) {
        return cy.request({
            method: "POST",
            url: "https://serverest.dev/login",
            body: LoginPayload,
            failOnStatusCode: false
        })
    }
}
export default LoginServerestRequests;