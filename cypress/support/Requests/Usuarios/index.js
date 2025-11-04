import BuscarUsuariosCadastradosIdRequests from "./BuscarUsuariosID";
import CadastrarUsuariosRequests from "./CadastrarUsuario";
import ListarUsuariosCadastradosRequests from "./ListarUsuariosCadastrados";

const CadastroUsuariosRequests = {
    ...BuscarUsuariosCadastradosIdRequests,
    ...CadastrarUsuariosRequests,
    ...ListarUsuariosCadastradosRequests
}
export default {CadastroUsuariosRequests};