import React, { Component } from "react";
import API from "../utils/API.js";
import EmployeesTable from "./EmployeeTable";
import FilterForm from "./FilterForm"

class FindEmployees extends Component {
  state = {
    people: [],
    filteredPeople: [],
    search: "",
    // imageURL: "",
    // name: "",
    // city: "",
    // email: "",
    // dob: "",
    // phone: "",
  };

  componentDidMount() {
    this.getEmployee();
  }

  getEmployee = () => {
    API.getEmployee()
      .then((response) => {
        // console.log(response.data.results[0]);
        this.setState({
          filteredPeople: response.data.results,
          people: response.data.results,
          // imageURL: response.data.results[0].picture.large,
          // name: response.data.results[0].name.first,
          // location: response.data.results[0].location.city,
          // email: response.data.results[0].email,
          // dob: response.data.results[0].dob.date,
          // phone: response.data.results[0].phone,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

 onFilter = (e) => {
// console.log(e.target.value);
const filteredNameArray = this.state.people.filter(person=>{
  return person.name.last.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
})
// console.log(filteredName);
this.setState({filteredPeople: filteredNameArray}) 
 }

  render() {
    return (
      <div>
          <FilterForm onFilter={this.onFilter} />
        <EmployeesTable people={this.state.filteredPeople} />
      </div>
    );
  }
}

export default FindEmployees;

//two functions that sort or filter updated filteredPeople 