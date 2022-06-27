import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidenav from "../../components/Sidenav/Sidenav";
import SearchUser from "../../components//SearchUser/SearchUser";


const PagesHome = () => {
  return (
    <div className="pag-home">
      <Navbar />
      <Sidenav />
      <SearchUser />
    </div>
  );
};

export default PagesHome;
