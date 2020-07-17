// packages
import React from "react";

// componenets
import Row from './row';

// other
import Employees from "../employees";
import "../App.css";


function Table() {

  const rows = Employees;

  return (
    <div className="table">
      <table>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Department</th>
          <th>Hire Date</th>
        </tr>

        { rows.map(row => <Row name={row.name} hire_date={row.hire_date} position={row.position} department={row.department} />) }

      </table>
    </div>
  )
}

export default Table;
