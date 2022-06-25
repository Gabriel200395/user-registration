import React from "react";

import "./styles.css"

// import { Container } from './styles';

function Content() {
  return (
    <div className="content">
      <div className="container">
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
            <button>
              <i class="fas fa-edit"></i>
            </button>
            <button>
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
    </div>
  );
}

export default Content;
