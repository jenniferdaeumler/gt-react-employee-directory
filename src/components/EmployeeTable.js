import React, { Component } from "react";
import API from "../utils/API.js";

class EmployeeTable extends Component {
  state = {
    imageURL: "",
    name: "",
    city: "",
    email: "",
    dob: "",
    phone: ""
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
        console.log(response);
        this.setState({
          imageURL: response.data.picture,
          name: response.data.name,
          city: response.data.location,
        email: response.data.email,
        dob: response.data.dob,
        phone: response.data.phone
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
              <li>{this.state.name}</li>
              {/* <li>{this.state.location.city}</li> */}
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
