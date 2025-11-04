Cypress.automacao = {};


/*************Requests*************/

import LoginRequests from "./Requests/Login/index";
import CadastroUsuariosRequests from "./Requests/Usuarios/index";

Cypress.automacao.Requests = {
    ...LoginRequests,
    ...CadastroUsuariosRequests

};