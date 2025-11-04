import BuscarUsuarioIdRequests from "./GETBuscarUsuariosID";
import CadastrarUsuariosRequests from "./POSTCadastrarUsuario";
import ListarUsuariosCadastradosRequests from "./GETListarUsuariosCadastrados";
import DeleteCadastroUsuarioRequests from "./DELETECadastrarUsuario";
import EditarUsuarioRequests from "./PUTeditarUsuario";
import EditarUsuarioNaoEncontradoRequests from "./PUTeditarUsuarioNaoEncontrado";
import GETBuscarUsuariosIDNaoEncontradoRequests from "./GETBuscarUsuariosIDNaoEncontrado";

const CadastroUsuariosRequests = {
    ...BuscarUsuarioIdRequests,
    ...CadastrarUsuariosRequests,
    ...ListarUsuariosCadastradosRequests,
    ...DeleteCadastroUsuarioRequests,
    ...EditarUsuarioRequests,
    ...EditarUsuarioNaoEncontradoRequests,
    ...GETBuscarUsuariosIDNaoEncontradoRequests
}
export default {CadastroUsuariosRequests};