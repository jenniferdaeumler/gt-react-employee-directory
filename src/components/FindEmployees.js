import React, { Component } from "react";
import API from "../utils/API.js";
import EmployeesTable from "./EmployeeTable";

class FindEmployees extends Component {
  state = {
    people: [],
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

  render() {
    return (
      <div>
        <EmployeesTable people={this.state.people} 
        />
     
      </div>
    );
  }
}

export default FindEmployees;
