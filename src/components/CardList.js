import React from "react";
import ElementCard from "./ElementCard";

const CardList = (props) => {
  const elements = props.elements.map((element, i) => {
    return <ElementCard 
      key={i}
      name={element.name}
      model={element.model}
      cost_in_credits={element.cost_in_credits}
    />
  });

  return(
    <div className="m-5">
      <h1 className="text-light">{props.heading}</h1>
      <div className="grid">
        {elements}
      </div>
    </div>
  )
}

export default CardList;