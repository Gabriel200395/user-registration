import React, { useContext } from "react";
import StoreContext from "components/Store/Context";
import "./Home.css";
import Navbar from "components/Navbar/Navbar";
import Sidenav from "components/Sidenav/Sidenav";
import Content from "components/Content/Content";

const PagesHome = () => {
  const { setToken } = useContext(StoreContext);
  return (
    <div className="pag-home">
      <Navbar />
      <Sidenav />
      <Content />
    </div>
  );
};

export default PagesHome;
