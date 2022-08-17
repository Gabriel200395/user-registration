import { useEffect, useContext } from "react";
import StoreContext from "Store/Context";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { fields, validations } from "../../../utils/ObjFields";
import UseHook from "../../../helpers/useHook";
import validationsFields from "../../../utils/validationsFields";

function UserEditForm() {
  const history = useHistory();
  const { id } = useParams();

  const [user, setError, handleChange, fieldsGroup, setUser] = UseHook();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validationsFields(user);

    if (Object.keys(error).length == 0) {
      await axios.put(`http://localhost:3004/users/${id}`, user);
      history.push("/usuarios");
    } else {
      setError(error);
    }
  };

  useEffect(() => {
    async function reqUser() {
      try {
        const userData = await axios.get("http://localhost:3004/users/" + id);
        const response = await userData.data;
        setUser({ ...user, ...response });
      } catch (error) {
        console.log(error);
      }
    }
    reqUser();
  }, [id]);

  return [handleSubmit, handleChange, fieldsGroup];
}

export default UserEditForm;
