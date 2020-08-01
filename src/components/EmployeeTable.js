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


// function EmployeeTable(props) {
//     return (
//         <table class="table">
//         {props.people.map(result => (
//   <thead>
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">First</th>
//       <th scope="col">Last</th>
//       <th scope="col">Handle</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">1</th>
//       <td>Mark</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//     </tr>
//     <tr>
//       <th scope="row">2</th>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td>@fat</td>
//     </tr>
//     <tr>
//       <th scope="row">3</th>
//       <td>Larry</td>
//       <td>the Bird</td>
//       <td>@twitter</td>
//     </tr>
//   </tbody>
// </table>
//         ))}
//     );
// }


export default EmployeeTable;
