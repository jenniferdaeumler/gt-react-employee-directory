import React from "react";
import  "./SortForm.css";

const SortForm = () => {
  return (
    <div>
      <select className="form-control">
        <option>Sort Employees</option>
        <option >By Last Name</option>
        {/* <option>Email</option>
        <option>Phone</option> */}
      </select>
    </div>
  );
};

export default SortForm;
