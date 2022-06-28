import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Service from "../../service/service";
import "./styles.css";
import useForm from "./userForm/userRegisterForm.js"

function FormRegisterUser() {

  const [handleSubmit, handleChange, error, user] = useForm()
  
  return (
    <div className="page-form">
      <div className="container-form">
        <form onSubmit={handleSubmit}>
          <h2>Seus Dados</h2>

          <div className="group-input">
            <div className="container-input">
              <label>Nome</label>
              <input
                name="nome"
                placeholder="Gabriel Souza"
                className={`input-large ${error.nome && "error-input"}`}
                value={user.nome || ""}
                onChange={handleChange}
              />
            </div>
            <div className="container-input">
              <label>Data Nascimento</label>
              <input
                name="dataNas"
                placeholder="20/03/1995"
                className={`input-medium ${error.dataNas    && "error-input"}`}
                value={user.dataNas || ""}
                onChange={handleChange}
              />
            </div>
            <div className="container-input">
              <label>CPF</label>
              <input
                name="cpf"
                placeholder="000.000.000-88"
                className={`input-medium ${error.cpf && "error-input"}`}
                value={user.cpf || ""}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="group-input">
            <div className="container-input">
              <label>Telefone</label>
              <input
                name="telefone"
                placeholder="3457-8907"
                className={`input-medium ${error.telefone && "error-input"}`}
                value={user.telefone || ""}
                onChange={handleChange}
              />
            </div>
            <div className="container-input">
              <label>Celular</label>
              <input
                name="celular"
                placeholder="(61) 99458-9078"
                className={`input-medium ${error.celular && "error-input"}`}
                value={user.celular || ""}
                onChange={handleChange}
              />
            </div>
          </div>

          <h2>Endereço</h2>

          <div className="group-input">
            <div className="container-input">
              <label>Cep</label>
              <input
                name="cep"
                placeholder="72341-402"
                className={`input-medium ${error.cep && "error-input"}`}
                value={user.cep || ""}
                onChange={handleChange}
              />
            </div>
            <div className="container-input">
              <label>Logradouro</label>
              <input
                name="logradouro"
                placeholder="QR 209 Conjunto 2"
                className={`input-medium ${error.logradouro && "error-input"}`}
                value={user.logradouro || ""}
                onChange={handleChange}
              />
            </div>
            <div className="container-input">
              <label>Complemente</label>
              <input
                name="complemente"
                placeholder="000.000.000-88"
                className={`input-medium ${error.complemente && "error-input"}`}
                value={user.complemente || ""}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="group-input">
            <div className="container-input">
              <label>Numero</label>
              <input
                name="numero"
                placeholder="06"
                className={`input-medium ${error.numero && "error-input"}`}
                value={user.numero || ""}
                onChange={handleChange}
              />
            </div>
            <div className="container-input">
              <label>Bairro</label>
              <input
                name="bairro"
                placeholder="Samambaia Norte (Samambaia)"
                className={`input-large ${error.bairro && "error-input"}`}
                value={user.bairro || ""}
                onChange={handleChange}
              />
            </div>
            <div className="container-input">
              <label>Cidade</label>
              <input
                name="cidade"
                placeholder="Brasília"
                className={`input-medium ${error.cidade && "error-input"}`}
                value={user.cidade || ""}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="group-input">
            <div className="container-input">
              <label>Estado</label>
              <input
                name="estado"
                placeholder="DF"
                className={`input-medium ${error.estado && "error-input"}`}
                value={user.estado || ""}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="container-form-buttons">
            <Link to="/usuarios" className="button-come-back">
              Voltar
            </Link>
            <button className="button-save">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormRegisterUser;
