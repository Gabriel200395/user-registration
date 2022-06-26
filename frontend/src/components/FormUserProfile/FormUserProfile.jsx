import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function FormUserProfile() {
  
  return (
    <div className="page-form">
      <div className="container-form">
        <form>
          <h2>Seus Dados</h2>

          <div className="group-input">
            <div className="container-input">
              <label>Nome</label>
              <input placeholder="Gabriel Souza" className="input-large" />
            </div>
            <div className="container-input">
              <label>Data Nascimento</label>
              <input placeholder="20/03/1995" className="input-medium" />
            </div>
            <div className="container-input">
              <label>CPF</label>
              <input placeholder="000.000.000-88" className="input-medium" />
            </div>
          </div>

          <div className="group-input">
            <div className="container-input">
              <label>Telefone</label>
              <input placeholder="3457-8907" className="input-medium" />
            </div>
            <div className="container-input">
              <label>Celular</label>
              <input placeholder="(61) 99458-9078" className="input-medium" />
            </div>
          </div>

          <h2>Endereço</h2>

          <div className="group-input">
            <div className="container-input">
              <label>Cep</label>
              <input placeholder="72341-402" className="input-medium" />
            </div>
            <div className="container-input">
              <label>Logradouro</label>
              <input placeholder="QR 209 Conjunto 2" className="input-medium" />
            </div>
            <div className="container-input">
              <label>Complemente</label>
              <input placeholder="000.000.000-88" className="input-medium" />
            </div>
          </div>
          <div className="group-input">
            <div className="container-input">
              <label>Numero</label>
              <input placeholder="06" className="input-medium" />
            </div>
            <div className="container-input">
              <label>Bairro</label>
              <input
                placeholder="Samambaia Norte (Samambaia)"
                className="input-medium"
              />
            </div>
            <div className="container-input">
              <label>Cidade</label>
              <input placeholder="Brasília" className="input-medium" />
            </div>
          </div>

          <div className="group-input">
            <div className="container-input">
              <label>Estado</label>
              <input placeholder="DF" className="input-medium" />
            </div>
          </div>

          <div className="container-form-buttons">
            <Link to="/usuarios" className="button-come-back">
              Voltar
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormUserProfile;
