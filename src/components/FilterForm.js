import React from "react";
import "./FilterForm.css"

const FilterForm = ({onFilter}) => {
  return (
    <div>
      <form className="filterForm">
        <div className="form-group">
          <input
            type="text"
            className="filter"
            placeholder="Filter by..."
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
