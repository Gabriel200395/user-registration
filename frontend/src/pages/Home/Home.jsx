import React, { useContext } from "react";
import StoreContext from "components/Store/Context";
import "./Home.css";

const PagesHome = () => {
  const { setToken } = useContext(StoreContext);
  return (
    <div className="pag-home">
      <div className="nav">
        <div className="logo">
          <i className="fas fa-user" />
          <h2>Painel de Usuários</h2>
        </div>
        <p>Cadastro de usuários, Incluir, Lista, Alterar e Excluir!</p>
      </div>
      <div className="sidenav">
        <h2>Admin</h2>

        <ul>
          <li className="list">
            <i className="fas fa-home" />
            <p>Inicio</p>
          </li>
          <li className="list">
            <i className="fas fa-folder-plus" />
            <p>Cadastrar usuário</p>
          </li>
          <li className="list">
            <i className="fas fa-user" />
            <p>Usuários</p>
          </li>
        </ul>
      </div>
      <div className="content">content</div>
      <div className="footer">
        <p>
          Desenvolvido com <i class="fas fa-heart"/> por Gabriel Souza.
        </p>
      </div>
    </div>
  );
};

export default PagesHome;
