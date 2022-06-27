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
  const [scroll, setScroll] = useState(false);
  const [userId, setUserId] = useState(null);
  const [indexId, setIndexId] = useState(null);

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

  useEffect(() => {
    if (searchusers.length == 8 || searchusers.length > 8) {
      console.log("caiu");
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
    await Service.delete("users/" + userId);
    const removeIdUser = searchusers.filter((user) => user.id !== userId);
    setSearchUsers(removeIdUser);
    setUsers(removeIdUser);
  };

  return (
    <div className="content">
      <div className={scroll ? "container-scroll" : "container-hidden"}>
        <div className="search-container">
          <div className="search">
            <input
              placeholder="Pesquisa por usuário...."
              value={search}
              onChange={handleChange}
            />
            <i className="fas fa-search"></i>
          </div>

          <div>
            {searchusers.map((user) => (
              <div className="container-user" key={user.id}>
                <p>{user.nome}</p>
                <div className="container-buttons">
                  {indexId === user.id && (
                    <div className="modal">
                      <p>Deseja Excluir?</p>

                      <div className="buttons-modal">
                        <button className="button-action" onClick={remover}>
                          Sim
                        </button>
                        <button
                          className="button-action"
                          onClick={() => setIndexId(null)}
                        >
                          Não
                        </button>
                      </div>
                    </div>
                  )}

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
    </div>
  );
}

export default SearchUser;
