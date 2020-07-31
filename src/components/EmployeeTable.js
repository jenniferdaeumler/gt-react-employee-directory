import React from "react";


function EmployeeTable(props) {
  return (
    <ul className="list-group employee-table">
      {props.results.map(result => (
        <li key={result} className="list-group-item">
          <img alt="Employee" src={result} className="img-fluid" />
        </li>
      ))}
    </ul>
  );
}

export default EmployeeTable;