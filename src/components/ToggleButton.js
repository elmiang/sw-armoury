import React from "react";

const ToggleButton = ({ name, toggled, toggle}) => {
  return(
    <div className="ps-1">
      <input className='btn-check' id={name} type='checkbox' defaultChecked={toggled} onClick={toggle}/>
      <label className="btn btn-outline-secondary" htmlFor={name}>{name}</label>
    </div>
  );
}

export default ToggleButton;