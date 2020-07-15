// packages
import React from "react";

// styles
import "../controls.css";

// components
import Search from "./search";
import Sort from "./sort";

function Controls() {
  return (
    <div className="controls">
      <Search className="col" />
      <Sort className="col" />
    </div>
  )
}

export default Controls;
