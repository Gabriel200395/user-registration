import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import "./styles.css";

import StoreContext from "../../Store/Context";

function Sidenav() {
  const { setToken} = useContext(StoreContext);

  const history = useHistory();

  const handleClick = () => {
    history.push("/login");
    setToken(null);
  };

  return (
    <div className="sidenav">
      <h2>Admin</h2>

      <ul>
        <li className="list" onClick={handleClick}>
          <i className="fas fa-home" />
          <p>Inicio</p>
        </li>
        <li className="list">
          <Link to="/cadastrar-usuario">
            <i className="fas fa-folder-plus" />
            Cadastrar usuário
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidenav;
