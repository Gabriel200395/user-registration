import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import StoreContext from "../../Store/Context";

import "./style.css";

function initialState() {
  return { user: "", password: "" };
}

function login({ user, password }) {
  if (user === "admin" && password === "admin") {
    return { token: "1234" };
  }
  return { error: "Usuário ou senha inválido" };
}

const UserLogin = () => {
  const [values, setValues] = useState(initialState);
  const [fieldPassword, setFieldPassword] = useState(false);
  const [error, setError] = useState(null);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  function onSubmit(event) {
    event.preventDefault();

    const { token, error } = login(values);

    if (token) {
      setToken(token);
      return history.push("/usuarios");
    }

    setError(error);
    setValues(initialState);
  }

  return (
    <div className="container-form">
      <div className="user-login">
        <h1 className="user-login__title">Acessar o Sistema</h1>
        <form onSubmit={onSubmit}>
          <div className="user-login__form-control">
            <label htmlFor="user">Usuário</label>
            <input
              id="user"
              type="text"
              name="user"
              onChange={onChange}
              value={values.user}
            />
          </div>
          <div className="input-password">
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type={fieldPassword ? "text" : "password"}
              name="password"
              onChange={onChange}
              value={values.password}
            />
            <i
              className={fieldPassword ? "fas fa-eye-slash" : "fas fa-eye"}
              onClick={() => setFieldPassword((field) => !field)}
            />
          </div>
          {error && <div className="user-login__error">{error}</div>}

          <button>entrar</button>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
