import React from "react";
import UseSearchUser from "./useSearchUser/useSearchUser";
import "./styles.css";

function SearchUser() {
  const [
    removeUser,
    remover,
    handleChange,
    searchusers,
    setIndexId,
    edit,
    userProfile,
    indexId,
    scroll,
    search,
  ] = UseSearchUser();

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
