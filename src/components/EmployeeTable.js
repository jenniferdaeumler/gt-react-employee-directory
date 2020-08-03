import React from "react";

// function EmployeeTable(props) {
//   return (
//     <ul className="list-group">
//       {props.people.map(result => (
//         <li className="list-group-item" key={result.id}>
//           <img alt="employee" src={result.picture.large} />
//           <li className="list-group-item" >{result.name.first} {result.name.last}</li>
//           <li className="list-group-item" >Phone: {result.phone}</li>
//           <li className="list-group-item" >City: {result.location.city}</li>
//           <li className="list-group-item" >Email: {result.email}</li>
//           <li className="list-group-item" >Age: {result.dob.age}</li>
//           <li className="list-group-item" >Phone: {result.phone}</li>
//         </li>
//       ))}
//     </ul>
//   );
// }

function EmployeesTable(props) {
  console.log(props.people);
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col" >ID Picture</th>
            <th scope="col" onClick= {()=>{props.sortEmployees()}}>Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>{props.people.map(renderTableData)}</tbody>
      </table>
    </div>
  );
}

function renderTableData(person) {
  return (
    <tr key={person.login.uuid}>
      <td>
        <img src={person.picture.thumbnail} alt="Employee Thumbnail" />
      </td>
      <td>
        {person.name.first} {person.name.last}
      </td>
      <td>{person.email}</td>
      <td>{person.phone}</td>
    </tr>
  );
}

export default EmployeesTable;
