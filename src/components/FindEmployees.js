import React, { Component } from "react";
import API from "../utils/API.js";
import EmployeesTable from "./EmployeeTable";
import FilterForm from "./FilterForm";
import SortForm from "./SortForm.js";

class FindEmployees extends Component {
  state = {
    people: [],
    filteredPeople: [],
    sortedPeople: [],
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
    const filteredNameArray = this.state.people.filter((person) => {
      return (
        person.name.last.toLowerCase().indexOf(e.target.value.toLowerCase()) !==
        -1
      );
    });
    // console.log(filteredName);
    this.setState({ filteredPeople: filteredNameArray });
  };

  // sortByLastName = (e) => {
  //   console.log(e.target.value);
  //   const sortedLastNameArray = this.state.people.sort((a,b) => {
  
        
  //         if(a.name.last < b.name.last) { return -1; }
  //         if(a.name.last > b.name.last) { return 1; }
  //         return 0;

  //   });
  //   console.log(sortedLastNameArray);
  //   this.setState({ sortedPeople: sortedLastNameArray });
  // };


sortEmployees = () => {
  console.log("hello world")
function compareDesc(a,b){
  if(a.name.last < b.name.last) { return -1; }
  if(b.name.last < a.name.last) { return 1; }
  return 0;
}
const sortedEmployees = this.state.people.sort(compareDesc);
this.setState({ sortedPeople: sortedEmployees });
}



  render() {
    return (
      <div>
        <SortForm  />
        <FilterForm onFilter={this.onFilter} />
        <EmployeesTable people={this.state.filteredPeople} sortEmployees={this.sortEmployees}/>
      </div>
    );
  }
}

export default FindEmployees;

//two functions that sort or filter updated filteredPeople
