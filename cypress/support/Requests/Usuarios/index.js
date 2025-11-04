import BuscarUsuariosCadastradosIdRequests from "./GETBuscarUsuarios";
import CadastrarUsuariosRequests from "./POSTCadastrarUsuarios";
import ListarUsuariosCadastradosRequests from "./GETListarUsuariosCadastrados";

const CadastroUsuariosRequests = {
    ...BuscarUsuariosCadastradosIdRequests,
    ...CadastrarUsuariosRequests,
    ...ListarUsuariosCadastradosRequests
}
export default {CadastroUsuariosRequests};