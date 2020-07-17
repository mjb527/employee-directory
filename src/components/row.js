// packages
import React from "react";

// styles
import "../App.css";

function Row({name, hire_date, position, department}) {

  return (
        <tr>
          <th>{name}</th>
          <th>{position}</th>
          <th>{department}</th>
          <th>{hire_date}</th>
        </tr>

  )
}

export default Row;
