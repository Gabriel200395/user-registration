import React from "react";

import "./styles.css"

// import { Container } from './styles';

function Content({children}) {
  return (
    <div className="content">
      <div className="container">
         {children}
      </div>
    </div>
  );
}

export default Content;
