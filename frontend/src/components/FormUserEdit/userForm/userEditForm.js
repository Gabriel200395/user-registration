import { useEffect, useContext } from "react";
import StoreContext from "Store/Context";
import { useHistory, useParams } from "react-router-dom";
import Service from "../../../service/service";
import { fields, validations } from "../../../utils/ObjFields";

function UserEditForm() {
  const history = useHistory();
  const { id } = useParams();

  const { user, setError, handleChange, fieldsGroup, setUser } =
    useContext(StoreContext);

  useEffect(() => {
    setError({});
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
      await Service.put(`users/${id}`, user);
      history.push("/usuarios");
    } else {
      setError(error);
    }
  };

  useEffect(() => {
    async function reqUser() {
      try {
        const userData = await Service.get("users/" + id);
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
