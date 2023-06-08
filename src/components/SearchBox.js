import React from "react";

const SearchBox = ({ searchChange }) => {
  return(
    <div>
      <input type="search" className="form-control bg-secondary text-white" placeholder="Browse Armoury" onChange={searchChange}/>
    </div>
  );
}

export default SearchBox;