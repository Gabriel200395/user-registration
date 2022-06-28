import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Service from "../../../service/service";
import { fields, maskInputs } from "../../../utils/ObjFields";

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
    }

    const validations = {
      cep(value) {
        if (value.replace(/[-]/g, "").length !== 8) {
          return {
            error: "cep invalido",
          };
        }
      },
      cpf(value) {
        if (value.replace(/[.-]/g, "").length !== 11) {
          return {
            error: "cpf invalido",
          };
        }
      },
      celular(value) {
        if (value.replace(/[\(\s-\)]/g, "").length !== 11) {
          return {
            error: "error celular",
          };
        }
      },
      telefone(value) {
        if (
          value.replace(/[-]/g, "").length !== 8 &&
          value.replace(/[-]/g, "").length !== 9
        ) {
          return {
            error: "error celular",
          };
        }
      },
      dataNas(value) {
        if (
          value.replace(/[\/]/g, "").length !== 6 &&
          value.replace(/[\/]/g, "").length !== 8
        ) {
          return {
            error: "error dataNas",
          };
        }
      },
    };

    for(let i in fields){
      if(validations[fields[i]]){
        if(validations[fields[i]](user[fields[i]])?.error){
         error[fields[i]] = validations[fields[i]](user[fields[i]]).error 
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
