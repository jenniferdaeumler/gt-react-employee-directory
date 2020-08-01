import React from "react";

function EmployeeTable(props) {
  return (
    <ul className="list-group">
      {props.people.map(result => (
        <li className="list-group-item" key={result.id}>
          <img alt="employee" src={result.picture.large} />
          <li>{result.name.first} {result.name.last}</li>
          <li>Phone: {result.phone}</li>
          <li>City: {result.location.city}</li>
          <li>Email: {result.email}</li>
          <li>Age: {result.dob.age}</li>
          <li>Phone: {result.phone}</li>
        </li>
      ))}
    </ul>
  );
}

export default EmployeeTable;
