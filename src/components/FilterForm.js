import React from "react";


const FilterForm = ({onFilter}) => {
  return (
    <div>
      <form >
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
