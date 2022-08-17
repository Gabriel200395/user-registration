import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import UseHook from "../../../helpers/useHook";

function UseProfile() { 
  
  const [user, setError, handleChange, fieldsGroup, setUser] = UseHook();  

  const { id } = useParams();

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

  return [fieldsGroup];
}

export default UseProfile;
