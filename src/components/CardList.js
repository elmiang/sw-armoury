import React from "react";
import ElementCard from "./ElementCard";

const CardList = ({ elements, heading}) => {
  const mappedElements = elements.map((element, i) => {
    return <ElementCard 
      key={i}
      name={element.name}
      model={element.model}
      cost_in_credits={element.cost_in_credits}
      {...element}
    />
  });

  return(
    <div className="m-5">
      <h1 className="text-light">{heading}</h1>
      <div className="d-flex-column grid justify-content-center">
        {mappedElements}
      </div>
    </div>
  )
}

export default CardList;