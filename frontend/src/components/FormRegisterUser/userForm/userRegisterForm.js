import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Service from "../../../service/service";
import { fields, validations } from "../../../utils/ObjFields";
import StoreContext from "Store/Context";

function UserRegisterForm() {
  const { user, setError, handleChange, fieldsGroup, setUser } =
    useContext(StoreContext);
  const history = useHistory();

  useEffect(() => {
    setError({});
    setUser({
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
  }, []);

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

  return [handleSubmit, handleChange, fieldsGroup];
}

export default UserRegisterForm;
