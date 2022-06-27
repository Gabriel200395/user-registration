import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";
import Service from "../../service/service";
import "./styles.css";

function FormUserEdit() {
  const [user, setUser] = useState({
    nome: "",
    dataNas: "",
    cpf: "",
    celular: "",
    telefone: "",
    cep: "",
    complemente: "",
    logradouro: "",
    bairro: "",
    estado: "",
    numero: "",
    cidade: "",
  });

  const history = useHistory();
  const { id } = useParams();

  const maskInputs = {
    cpf(value) {
      return value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1-$2")
        .replace(/(-\d{2})(\d)/, "$1");
    },
    celular(value) {
      return value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .replace(/(-\d{4})(\d)/, "$1");
    },
    cep(value) {
      return value
        .replace(/\D/g, "")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .replace(/(-\d{3})(\d)/, "$1");
    },
    telefone(value) {
      return value
        .replace(/\D/g, "")
        .replace(/(\d{4})(\d)/, "$1-$2")
        .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")
        .replace(/(-\d{4})(\d)/, "$1");
    },
    dataNas(value) {
      return value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "$1/$2")
        .replace(/(\d{2})(\d)/, "$1/$2")
        .replace(/(\d{4})(\d)/, "$1");
    },
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: maskInputs[e.target.name]
        ? maskInputs[e.target.name](e.target.value)
        : e.target.value,
    });
  };

  useEffect(() => {
    async function reqUser() {
      try {
        const userData = await Service.get("users/" + id);
        const response = await userData.data;
        setUser({ ...user, ...response });
      } catch (error) {
        console.log(error);
      }
    }
    reqUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await Service.put(`users/${id}`, user);
      history.push("/usuarios");
    } catch (error) {
      console.log("error em fazer put...");
    }
  };

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
                className="input-large"
                value={user.nome}
                onChange={handleChange}
              />
            </div>
            <div className="container-input">
              <label>Data Nascimento</label>
              <input
                name="dataNas"
                placeholder="20/03/1995"
                className="input-medium"
                value={user.dataNas}
                onChange={handleChange}
              />
            </div>
            <div className="container-input">
              <label>CPF</label>
              <input
                name="cpf"
                placeholder="000.000.000-88"
                className="input-medium"
                value={user.cpf}
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
                className="input-medium"
                value={user.telefone}
                onChange={handleChange}
              />
            </div>
            <div className="container-input">
              <label>Celular</label>
              <input
                name="celular"
                placeholder="(61) 99458-9078"
                className="input-medium"
                value={user.celular}
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
                className="input-medium"
                value={user.cep}
                onChange={handleChange}
              />
            </div>
            <div className="container-input">
              <label>Logradouro</label>
              <input
                name="logradouro"
                placeholder="QR 209 Conjunto 2"
                className="input-medium"
                value={user.logradouro}
                onChange={handleChange}
              />
            </div>
            <div className="container-input">
              <label>Complemente</label>
              <input
                name="complemente"
                placeholder="000.000.000-88"
                className="input-medium"
                value={user.complemente}
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
                className="input-medium"
                value={user.numero}
                onChange={handleChange}
              />
            </div>
            <div className="container-input">
              <label>Bairro</label>
              <input
                name="bairro"
                placeholder="Samambaia Norte (Samambaia)"
                className="input-large"
                value={user.bairro}
                onChange={handleChange}
              />
            </div>
            <div className="container-input">
              <label>Cidade</label>
              <input
                name="cidade"
                placeholder="Brasília"
                className="input-medium"
                value={user.cidade}
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
                className="input-medium"
                value={user.estado}
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

export default FormUserEdit;
