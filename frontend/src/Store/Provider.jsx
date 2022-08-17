import React, { useEffect, useState } from "react";
import Context from "./Context";
import useStorage from "utils/useStorage";
import { maskInputs } from "../utils/ObjFields";
import axios from "axios";

const StoreProvider = ({ children }) => {
  const [token, setToken] = useStorage("token");

  return (
    <Context.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default StoreProvider;
