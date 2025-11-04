import BuscarUsuarioIdRequests from "./GETBuscarUsuariosID";
import CadastrarUsuariosRequests from "./POSTCadastrarUsuario";
import ListarUsuariosCadastradosRequests from "./GETListarUsuariosCadastrados";
import DeleteCadastroUsuarioRequests from "./DELETECadastrarUsuario";
import EditarUsuarioRequests from "./PUTeditarUsuario";

const CadastroUsuariosRequests = {
    ...BuscarUsuarioIdRequests,
    ...CadastrarUsuariosRequests,
    ...ListarUsuariosCadastradosRequests,
    ...DeleteCadastroUsuarioRequests,
    ...EditarUsuarioRequests
}
export default {CadastroUsuariosRequests};