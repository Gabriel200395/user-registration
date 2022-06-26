import React from "react";
import "./styles.css";

function FormRegisterUser() {
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
              <input placeholder="Gabriel Souza" className="input-medium" />
            </div>
            <div className="container-input">
              <label>Celular</label>
              <input placeholder="20/03/1995" className="input-medium" />
            </div>
          </div>

          <h2>Endereço</h2>

          <div className="group-input">
            <div className="container-input">
              <label>Cep</label>
              <input placeholder="00-000-00" className="input-medium" />
            </div>
            <div className="container-input">
              <label>Logradouro</label>
              <input placeholder="20/03/1995" className="input-medium" />
            </div>
            <div className="container-input">
              <label>Complemente</label>
              <input placeholder="000.000.000-88" className="input-medium" />
            </div>
          </div>
          <div className="group-input">
            <div className="container-input">
              <label>Numero</label>
              <input placeholder="00-000-00" className="input-medium" />
            </div>
            <div className="container-input">
              <label>Bairro</label>
              <input placeholder="20/03/1995" className="input-medium" />
            </div>
            <div className="container-input">
              <label>Cidade</label>
              <input placeholder="000.000.000-88" className="input-medium" />
            </div>
          </div>

          <div className="group-input">
            <div className="container-input">
              <label>Estado</label>
              <input placeholder="00-000-00" className="input-medium" />
            </div>
          </div>

          <div className="container-form-buttons">
            <button className="button-come-back">Voltar</button>
            <button className="button-save">Salvar</button>
          </div>

          <div className="container-form-buttons">
            <button className="button-come-back">Voltar</button>
            <button className="button-save">Salvar</button>
          </div>

          <div className="container-form-buttons">
            <button className="button-come-back">Voltar</button>
            <button className="button-save">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormRegisterUser;
