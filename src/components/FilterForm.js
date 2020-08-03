import React from "react";
import "./FilterForm.css"

const FilterForm = ({onFilter}) => {
  return (
    <div>
      <form className="filterForm">
        <div className="form-group">
          <input
            type="text"
            name= "search"
            className="filter"
            placeholder="Filter by last name"
            //onCHange update state of serach term 
            onChange = {onFilter}
          />
        </div>
        {/* <button type="submit" className="btn btn-primary">
          Filter
        </button> */}
      </form>
    </div>
  );
};

export default FilterForm;
