import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidenav from "../../components/Sidenav/Sidenav";
import Content from "../../components/Content/Content";
import SearchUser from "../../components//SearchUser/SearchUser";


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
