import { useEffect, useState } from "react";
import {useHistory} from "react-router-dom"
import axios from "axios";

function UseSearchUser() {
  const history = useHistory();
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [searchusers, setSearchUsers] = useState([]);
  const [scroll, setScroll] = useState(false);
  const [userId, setUserId] = useState(null);
  const [indexId, setIndexId] = useState(null);

  useEffect(() => {
    async function req() {
      try {
        const usersData = await axios.get("http://localhost:3004/users");
        const response = await usersData.data;
        setSearchUsers(response);
        setUsers(response);
      } catch (error) {
        console.log(error);
      }
    }

    req();
  }, []);

  useEffect(() => {
    if (searchusers.length == 8 || searchusers.length > 8) {
      setScroll(true);
    }
  }, [searchusers]);

  const handleChange = (e) => {
    const searchUser = users.filter((user) =>
      user.nome
        .toUpperCase()
        .toLowerCase()
        .includes(e.target.value.toUpperCase().toLowerCase())
    );

    setSearchUsers(searchUser);
    setSearch(e.target.value);
  };

  const edit = (id) => history.push("/editar-usuario/" + id);
  const userProfile = (id) => history.push("/perfil-do-usuario/" + id);

  const removeUser = (id) => {
    setIndexId(id);
    setUserId(id);
  };

  const remover = async () => {
    await axios.delete("users/" + userId);
    const removeIdUser = searchusers.filter((user) => user.id !== userId);
    setSearchUsers(removeIdUser);
    setUsers(removeIdUser);
  };

  return [
    removeUser,
    remover,
    handleChange,
    searchusers,
    setIndexId,
    edit,
    userProfile,
    indexId,
    scroll,
    search
  ];
}

export default UseSearchUser;
