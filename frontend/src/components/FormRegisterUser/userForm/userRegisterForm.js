import { useHistory } from "react-router-dom";
import axios from "axios";
import { fields, validations } from "../../../utils/ObjFields";
import UseHook from "../../../helpers/useHook";

function UserRegisterForm() {
  const [user, setError, handleChange, fieldsGroup] = UseHook();

  const history = useHistory();

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
      await axios.post("http://localhost:3004/users/", user);
      history.push("/usuarios");
    } else {
      setError(error);
    }
  };

  return [handleSubmit, handleChange, fieldsGroup];
}

export default UserRegisterForm;
