import React from "react";
import Navbar from "components/Navbar/Navbar";
import Sidenav from "components/Sidenav/Sidenav";
import Content from "components/Content/Content";

const RegisterUser = () => {
 
  return (
    <div className="pag-home">
      <Navbar />
      <Sidenav  />
      <Content>
        <p>cadastro</p>
      </Content>
    </div>
  );
};

export default RegisterUser;
