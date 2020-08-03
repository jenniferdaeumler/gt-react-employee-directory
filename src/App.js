import React from "react";
import FindEmployees from "./components/FindEmployees";
import Header from "./components/Header";
import SortForm from "./components/SortForm";
import FilterForm from "./components/FilterForm"
// import EmployeeTable from "./components/EmployeeTable";
// import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    // <Router>
    <div>
      <Header />
      <SortForm/>
      <FilterForm/>
      <FindEmployees/>
      {/* {state.people.map((results) => (
        <FindPeople
          firstName={results.name.first}
          lastName={results.name.last}
          email={results.email}
          phone={results.phone}
          src={results.picture.large}
        />
      ))} */}
    </div>
    // </Router>
  );
}

export default App;
