import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Service from "../../service/service";
import "./styles.css";

function SearchUser() {
  const history = useHistory();
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [searchusers, setSearchUsers] = useState([]);

  useEffect(() => {
    async function req() {
      try {
        const usersData = await Service("users");
        const response = await usersData.data;
        setSearchUsers(response);
        setUsers(response);
      } catch (error) {
        console.log(error);
      }
    }

    req();
  }, []);

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

  const removeUser = async (id) => {
    await Service.delete("users/" + id);
    const removeIdUser = searchusers.filter((user) => user.id !== id);
    setSearchUsers(removeIdUser);
    setUsers(removeIdUser);
  };

  return (

    <div className="content">
      <div className="container">
      <div className="search-container">
      <div className="search">
        <input
          placeholder="Pesquisa por usuário...."
          value={search}
          onChange={handleChange}
        />
        <i className="fas fa-search"></i>
      </div>

      {searchusers.map((user) => (
        <div className="container-user" key={user.id}>
          <p>{user.nome}</p>
          <div className="container-buttons">
            <button onClick={() => removeUser(user.id)}>
              <i className="fa fa-trash" aria-hidden="true"></i>
            </button>
            <button onClick={() => edit(user.id)}>
              <i className="fas fa-edit"></i>
            </button>
            <button onClick={() => userProfile(user.id)}>
              <i className="fas fa-user" />
            </button>
          </div>
        </div>
      ))}
    </div>     
      </div>
    </div>
    
  );
}

export default SearchUser;
