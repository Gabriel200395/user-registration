import React, { useContext } from "react";
import StoreContext from "components/Store/Context";
import "./Home.css";
import Navbar from "components/Navbar/Navbar";
import Sidenav from "components/Sidenav/Sidenav";
import Content from "components/Content/Content";
import SearchUser from "components/SearchUser/SearchUser";

const PagesHome = () => {
  return (
    <div className="pag-home">
      <Navbar />
      <Sidenav />
      <Content>
        <SearchUser />
      </Content>
    </div>
  );
};

export default PagesHome;
