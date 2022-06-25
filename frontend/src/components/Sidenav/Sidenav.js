import React from "react";
import "./styles.css";

function Sidenav() {
  return (
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
  );
}

export default Sidenav;
