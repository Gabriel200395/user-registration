import React from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";

function SearchUser() {
  const history = useHistory();

  const edit = () => history.push("/editar-usuario"); 
  const userProfile = () => history.push("/perfil-do-usuario"); 
  

  return (
    <div className="search-container">
      <div className="search">
        <input placeholder="Pesquisa por usuário...." />
        <i class="fas fa-search"></i>
      </div>

      <div className="container-user">
        <p>Gabriel Souza de Figueredo </p>
        <div className="container-buttons">
          <button>
            <i class="fa fa-trash" aria-hidden="true"></i>
          </button>
          <button onClick={edit}>
            <i class="fas fa-edit"></i>
          </button>
          <button onClick={userProfile}>
            <i className="fas fa-user" />
          </button>
        </div>
      </div>
      <div className="container-user">
        <p>Erica Santos </p>
        <div className="container-buttons">
          <button>
            <i class="fa fa-trash" aria-hidden="true"></i>
          </button>
          <button>
            <i class="fas fa-edit"></i>
          </button>
          <button>
            <i className="fas fa-user" />
          </button>
        </div>
      </div>
      <div className="container-user">
        <p>João Felipe </p>
        <div className="container-buttons">
          <button>
            <i class="fa fa-trash" aria-hidden="true"></i>
          </button>
          <button>
            <i class="fas fa-edit"></i>
          </button>
          <button>
            <i className="fas fa-user" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchUser;
