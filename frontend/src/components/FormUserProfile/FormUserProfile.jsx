import React from "react";
import { Link} from "react-router-dom";
import "./styles.css";
import UseProfile from "./useProfile/useProfile.js";
function FormUserProfile() {
   
  const [fieldsGroup] = UseProfile()


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
