import React from "react";

function EmployeeTable(props) {
  return (
    <ul className="list-group">
      {props.people.map(result => (
        <li className="list-group-item" key={result.id}>
          <img alt="employee" src={result.picture.large} />
          <li className="list-group-item" >{result.name.first} {result.name.last}</li>
          <li className="list-group-item" >Phone: {result.phone}</li>
          <li className="list-group-item" >City: {result.location.city}</li>
          <li className="list-group-item" >Email: {result.email}</li>
          <li className="list-group-item" >Age: {result.dob.age}</li>
          <li className="list-group-item" >Phone: {result.phone}</li>
        </li>
      ))}
    </ul>
  );
}

// function EmployeeTable(props) {
// return (
    
//     <div className="container">
//       <table class="table" key={result.id}>
//         <thead>
//           <tr>
//             <th scope="col">ID Picture</th>
//             <th scope="col">Name</th>
//             <th scope="col">Email</th>
//             <th scope="col">Phone</th>
//           </tr>
//         </thead>
//         <tbody>
//           {/* we need a row with all the information of each employee */}
//           <tr>
//             <td>
//               <img src={result.picture.large} alt={result.firstName}></img>
//             </td>
//             <td>
//             {result.firstName} {result.lastName}
//             </td>
//             <td>{result.email}</td>
//             <td>{result.phone}</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>

// )
// }

export default EmployeeTable;
