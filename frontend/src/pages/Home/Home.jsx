import React, { useContext } from "react";
import StoreContext from "components/Store/Context";
import "./Home.css";

const PagesHome = () => {
  const { setToken } = useContext(StoreContext);
  return (
    <div className="pag-home">
      <div className="nav">nav</div>
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
      <div className="footer">foooter</div>
    </div>
  );
};

export default PagesHome;
