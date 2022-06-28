import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import useForm from "./userForm/userEditForm";

function FormUserEdit() {
  const [handleSubmit, handleChange, fieldsGroup] = useForm();
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

export default FormUserEdit;
