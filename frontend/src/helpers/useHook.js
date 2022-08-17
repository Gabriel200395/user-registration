import React, {useState, useEffect} from 'react'; 
import {maskInputs} from "../utils/ObjFields" 
import axios from "axios"

function UseHook() {
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

  const [error, setError] = useState({});
   
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

  useEffect(() => {
    async function cepUser() {
      if (user.cep.replace("-", "").length === 8) {
        const cepData = await axios.get(
          `https://viacep.com.br/ws/${user.cep}/json`
        );
        const response = await cepData.data;
        setUser({
          ...user,
          bairro: response?.bairro,
          logradouro: response?.logradouro,
          estado: response?.uf,
          cidade: response?.localidade,
          cep: user.cep,
        });
      }

      if (user.cep === "") {
        setUser({
          ...user,
          complemente: "",
          bairro: "",
          logradouro: "",
          estado: "",
          cidade: "",
          cep: "",
        });
      }
    }

    cepUser();
  }, [user.cep]);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: maskInputs[e.target.name]
        ? maskInputs[e.target.name](e.target.value)
        : e.target.value,
    });
  };

  return [user, setError, handleChange, fieldsGroup, setUser ];
}

export default UseHook;