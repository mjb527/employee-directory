import React from "react";
import "../App.css";

function Sort() {
  return (
    <div className="sort">
      <select name="sortSelector" onChange="" >
        <option value="name">Name</option>
        <option value="date">Date</option>
      </select>
    </div>
  )
}

export default Sort;
