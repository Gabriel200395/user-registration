import { useEffect, useState, useReducer } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const FETCH_USERS = "FETCH_USERS";
const SCROLL = "SCROLL";
const FILTER_USER = "FILTER_USER";
const DELETE_USER_ID = "DELETE_USER_ID";
const DELETE_USER = "DELETE_USER";
const NOT_REMOVE = "NOT_REMOVE";

function UseSearchUser() {
  const initialState = {
    search: "",
    users: [],
    searchusers: [],
    scroll: null,
    userId: null,
    indexId: null,
  };

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case FETCH_USERS:
        return {
          ...state,
          users: action.payload,
          searchusers: action.payload,
        };
      case SCROLL:
        return {
          ...state,
          scroll: true,
        };
      case FILTER_USER:
        return {
          ...state,
          searchusers: action.filter,
          search: action.value,
        };
      case DELETE_USER_ID:
        return {
          ...state,
          userId: action.id,
          indexId: action.id,
        };
      case DELETE_USER:
        return {
          ...state,
          users: action.filter,
          searchusers: action.filter,
        };
      case NOT_REMOVE:
        return {
          ...state,
          indexId: null,
        };

      default:
        return state;
    }
  }, initialState);

  const history = useHistory();

  const { users, searchusers, search, userId, indexId, scroll } = state;

  useEffect(() => {
    async function req() {
      try {
        const usersData = await axios.get("http://localhost:3004/users");
        const response = await usersData.data;
        dispatch({ type: FETCH_USERS, payload: response });
      } catch (error) {
        console.log(error);
      }
    }

    req();
  }, []);

  useEffect(() => {
    if (searchusers.length == 8 || searchusers.length > 8) {
      dispatch({ type: SCROLL });
    }
  }, [searchusers]);

  const handleChange = (e) => {
    const searchUser = users.filter((user) =>
      user.nome
        .toUpperCase()
        .toLowerCase()
        .includes(e.target.value.toUpperCase().toLowerCase())
    );

    dispatch({ type: FILTER_USER, filter: searchUser, value: e.target.value });
  };

  const edit = (id) => history.push("/editar-usuario/" + id);
  const userProfile = (id) => history.push("/perfil-do-usuario/" + id);

  const deleteUser = (id) => {
    dispatch({ type: DELETE_USER_ID, id: id });
  };

  const deleteUserId = async () => {
    console.log(userId);
    await axios.delete("http://localhost:3004/users/" + userId);
    const removeIdUser = searchusers.filter((user) => user.id !== userId);
    dispatch({ type: DELETE_USER, filter: removeIdUser });
  }; 

  const deleteNot = () => dispatch({type: NOT_REMOVE})

  return [
    deleteUser,
    deleteNot,
    deleteUserId,
    handleChange,
    searchusers,
    edit,
    userProfile,
    indexId,
    scroll,
    search,
  ];
}

export default UseSearchUser;
