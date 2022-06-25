import React from 'react';
import "./styles.css"

// import { Container } from './styles';

function Navbar() {
  return (
    <div className="nav">
        <div className="logo">
          <i className="fas fa-user" />
          <h2>Painel de Usuários</h2>
        </div>
        <p>Cadastro de usuários, Incluir, Lista, Alterar e Excluir!</p>
      </div>
  );
}

export default Navbar;