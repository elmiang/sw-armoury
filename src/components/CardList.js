import React from "react";
import CardVehicle from "./CardVehicle";

const CardList = (props) => {
  const elements = props.elements.map((element, i) => {
    return <CardVehicle 
      key={i}
      name={element.name}
      model={element.model}
      cost_in_credits={element.cost_in_credits}
    />
  });

  return(
    <div>
      <h1>{props.heading}</h1>
      {elements}
    </div>
  )
}

export default CardList;