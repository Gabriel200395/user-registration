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

  const fieldsGroup = [
    [
      {
        titulo: "Seus Dados",
        label: "Nome",
        value: user.nome,
        name: "nome",
        placeholder: "Gabriel Souza",
        className: `input-large`,
      },
      {
        label: "Data Nascimento",
        value: user.dataNas,
        name: "dataNas",
        placeholder: "20/03/1994",
        className: `input-medium`,
      },
      {
        label: "CPF",
        value: user.cpf,
        name: "cpf",
        placeholder: "000.000.000-00",
        className: `input-medium`,
      },
    ],

    [
      {
        label: "Telefone",
        value: user.telefone,
        name: "telefone",
        placeholder: "0000-0000",
        className: `input-large`,
      },
      {
        label: "Celular",
        value: user.celular,
        name: "celular",
        placeholder: "(00) 00000-0000",
        className: `input-medium`,
      },
    ],

    [
      {
        titulo: "Endereço",
        label: "Cep",
        value: user.cep,
        name: "cep",
        placeholder: "00000-000",
        className: `input-medium`,
      },
      {
        label: "Logradouro",
        value: user.logradouro,
        name: "celular",
        placeholder: "_",
        className: `input-medium`,
      },
      {
        label: "Complemente",
        value: user.complemente,
        name: "complemente",
        placeholder: "_",
        className: `input-medium`,
      },
    ],

    [
      {
        label: "Numero",
        value: user.numero,
        name: "numero",
        placeholder: "00",
        className: `input-medium`,
      },
      {
        label: "Bairro",
        value: user.bairro,
        name: "bairro",
        placeholder: "_",
        className: `input-large`,
      },
      {
        label: "Cidade",
        value: user.cidade,
        name: "cidade",
        placeholder: "_",
        className: `input-medium`,
      },
    ],

    [
      {
        label: "Estado",
        value: user.estado,
        name: "estado",
        placeholder: "_",
        className: `input-medium`,
      },
    ],
  ];

  return (
    <div className="page-form">
      <div className="container-form">
        <form>
          {
            <>
              {fieldsGroup.map((field, index) => (
                <div key={index}>
                  {field.map((i, index) =>  <h2 key={index}>{i.titulo}</h2>)}
                  <div className="group-input" key={index}>
                    {field.map((i, index) => (
                      <div className="container-input" key={index}>
                        <label>{i.label}</label>
                        <input
                          className={i.className}
                          defaultValue={i.value}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </>
          }

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
