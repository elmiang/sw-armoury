import React from "react";

const SearchBox = ({ searchChange }) => {
  return(
    <div className="w-50">
      <input type="search" className="form-control bg-secondary text-white" placeholder="Search Armoury" onChange={searchChange}/>
    </div>
  );
}

export default SearchBox;