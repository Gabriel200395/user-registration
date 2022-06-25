import React, { useContext } from "react";
import StoreContext from "components/Store/Context";
import "./Home.css";

const PagesHome = () => {
  const { setToken } = useContext(StoreContext);
  return (
    <div className="pag-home">
      <div className="nav">nav</div>
      <div className="sidenav">
        <ul>
           <li>home</li> 
           <li>cadastrar usuario</li> 
           <li>usuarios</li> 

        </ul>
      
      </div>
      <div className="content">content</div>
      <div className="footer">foooter</div>
    </div>
  );
};

export default PagesHome;
