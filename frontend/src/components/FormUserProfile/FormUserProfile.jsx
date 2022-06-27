import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Service from "../../service/service";
import "./styles.css";

function FormUserProfile() {
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

  const { id } = useParams();

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

  return (
    <div className="page-form">
      <div className="container-form">
        <form>
          <h2>Seus Dados</h2>

          <div className="group-input">
            <div className="container-input">
              <label>Nome</label>
              <input
                name="nome"
                placeholder="Gabriel Souza"
                className="input-large"
                value={user.nome}
              />
            </div>
            <div className="container-input">
              <label>Data Nascimento</label>
              <input
                name="dataNas"
                placeholder="20/03/1995"
                className="input-medium"
                value={user.dataNas}
              />
            </div>
            <div className="container-input">
              <label>CPF</label>
              <input
                name="cpf"
                placeholder="000.000.000-88"
                className="input-medium"
                value={user.cpf}
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
              />
            </div>
            <div className="container-input">
              <label>Celular</label>
              <input
                name="celular"
                placeholder="(61) 99458-9078"
                className="input-medium"
                value={user.celular}
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
              />
            </div>
            <div className="container-input">
              <label>Logradouro</label>
              <input
                name="logradouro"
                placeholder="QR 209 Conjunto 2"
                className="input-medium"
                value={user.logradouro}
              />
            </div>
            <div className="container-input">
              <label>Complemente</label>
              <input
                name="complemente"
                placeholder="000.000.000-88"
                className="input-medium"
                value={user.complemente}
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
              />
            </div>
            <div className="container-input">
              <label>Bairro</label>
              <input
                name="bairro"
                placeholder="Samambaia Norte (Samambaia)"
                className="input-large"
                value={user.bairro}
              />
            </div>
            <div className="container-input">
              <label>Cidade</label>
              <input
                name="cidade"
                placeholder="Brasília"
                className="input-medium"
                value={user.cidade}
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
              />
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
