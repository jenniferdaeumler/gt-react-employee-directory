import React from "react";

const Header = () => {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Employee Directory</h1>
          <p className="lead">
          Search by last name to filter.
          </p>
        <p className="lead">Click on name or click on email to sort by alphabetical order. </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
