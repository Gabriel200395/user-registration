import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Service from "../../../service/service";
import { fields, maskInputs, validations } from "../../../utils/ObjFields";

function UserRegisterForm() {
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
  const history = useHistory();

  useEffect(() => {
    async function cepUser() {
      if (user.cep.replace("-", "").length === 8) {
        const cepData = await axios.get(
          `https://viacep.com.br/ws/${user.cep}/json`
        );
        const response = await cepData.data;
        setUser({
          ...user,
          complemente: response?.complemente,
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    let error = {};

    for (let u in fields) {
      if (user[fields[u]] === "" || user[fields[u]] === undefined) {
        error[fields[u]] = fields[u];
      }
      if (validations[fields[u]]) {
        if (validations[fields[u]](user[fields[u]])?.error) {
          error[fields[u]] = validations[fields[u]](user[fields[u]]).error;
        }
      }
    }

    if (Object.keys(error).length == 0) {
      await Service.post("users/", user);
      history.push("/usuarios");
    } else {
      setError(error);
    }
  };

  return [handleSubmit, handleChange, error, user];
}

export default UserRegisterForm;
