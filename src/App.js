import React from "react";
import FindPeople from "./components/FindPeople"
import Header from "./components/Header"
// import EmployeeTable from "./components/EmployeeTable";
// import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    // <Router>
      <div>
    <Header/>
    <FindPeople/>
      </div>
    // </Router>
  );
}

export default App;
