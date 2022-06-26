import React from "react";
import "./styles.css"

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
