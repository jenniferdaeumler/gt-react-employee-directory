import React, { Component } from "react";
import API from "../utils/API.js";

class EmployeeTable extends Component {
  state = {
    // people: []
    imageURL: "",
    name: "",
    city: "",
    email: "",
    dob: "",
    phone: "",
  };

  style = {
    image: {
      maxWidth: "25%",
      height: "300px",
    },
  };

  componentDidMount() {
    this.getEmployee();
  }

  getEmployee = () => {
    API.getEmployee()
      .then((response) => {
        console.log(response.data.results[0]);
        this.setState({
          // people: response.data.results
          imageURL: response.data.results[0].picture.thumbnail,
          name: response.data.results[0].name.first,
          location: response.data.results[0].location.city,
          email: response.data.results[0].email,
          dob: response.data.results[0].dob.date,
          phone: response.data.results[0].phone,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col text-center">
            {this.state.imageURL && (
              <img
                src={this.state.imageURL}
                alt="employee"
                style={this.style.image}
              ></img>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col text-left">
            <ul>
            {/* <li>{this.state.people}</li> */}
              <li>{this.state.name}</li>
              <li>{this.state.location}</li>
              <li>{this.state.email}</li>
              <li>{this.state.dob}</li>
              <li>{this.state.phone}</li> 
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeeTable;
