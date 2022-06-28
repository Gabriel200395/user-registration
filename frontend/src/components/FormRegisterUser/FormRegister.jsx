import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import useForm from "./userForm/userRegisterForm.js";

function FormRegisterUser() {
  const [handleSubmit, handleChange, error, user] = useForm();

  const fieldsGroup = [
    [

      {
        titulo: "Seus Dados", 
        label: "Nome",
        value: user.nome,
        name: "nome",
        placeholder: "Gabriel Souza",
        className: `input-large ${error.nome && "error-input"}`,
      },
      {
        label: "Data Nascimento",
        value: user.dataNas,
        name: "dataNas",
        placeholder: "20/03/1994",
        className: `input-medium ${error.dataNas && "error-input"}`,
      },
      {
        label: "CPF",
        value: user.cpf,
        name: "cpf",
        placeholder: "000.000.000-00",
        className: `input-medium ${error.cpf && "error-input"}`,
      },
    ],

    [
      {
        label: "Telefone",
        value: user.telefone,
        name: "telefone",
        placeholder: "0000-0000",
        className: `input-large ${error.telefone && "error-input"}`,
      },
      {
        label: "Celular",
        value: user.celular,
        name: "celular",
        placeholder: "(00) 00000-0000",
        className: `input-medium ${error.celular && "error-input"}`,
      },
    ],

    [
      {
        titulo: "Endereço",
        label: "Cep",
        value: user.cep,
        name: "cep",
        placeholder: "00000-000",
        className: `input-medium ${error.cep && "error-input"}`,
      },
      {
        label: "Logradouro",
        value: user.logradouro,
        name: "celular",
        placeholder: "_",
        className: `input-medium ${error.logradouro && "error-input"}`,
      },
      {
        label: "Complemente",
        value: user.complemente,
        name: "complemente",
        placeholder: "_",
        className: `input-medium ${error.complemente && "error-input"}`,
      },
    ],

    [
      {
        label: "Numero",
        value: user.numero,
        name: "numero",
        placeholder: "00",
        className: `input-medium ${error.numero && "error-input"}`,
      },
      {
        label: "Bairro",
        value: user.bairro,
        name: "bairro",
        placeholder: "_",
        className: `input-large ${error.bairro && "error-input"}`,
      },
      {
        label: "Cidade",
        value: user.cidade,
        name: "cidade",
        placeholder: "_",
        className: `input-medium ${error.cidade && "error-input"}`,
      },
    ],

    [
      {
        label: "Estado",
        value: user.estado,
        name: "estado",
        placeholder: "_",
        className: `input-medium ${error.estado && "error-input"}`,
      },
    ],
  ];

  return (
    <div className="page-form">
      <div className="container-form">
        <form onSubmit={handleSubmit}>
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
                          name={i.name}
                          placeholder={i.placeholder}
                          className={i.className}
                          value={i.value || ""}
                          onChange={handleChange}
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
            <button className="button-save">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormRegisterUser;
