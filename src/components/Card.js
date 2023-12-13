import React, { useState } from "react";


function Card({id, image, info, price, name, removeTour }) {
  
  const [readmore, setRedmore] = useState(false);
  
  const description = readmore ? info : `${info.substring(0, 200)}....`;
  
  function readmoreHnadler() {
    setRedmore(!readmore);
  }

  return (

    <div className="card">

      <img src={image} alt="" className="image" />

      <div className="tour-info">

            <div className="tour-details">
                <h4 className="tour-price">&#8377; {price}</h4>
                <h4 className="tour-name">{name}</h4>
            </div> 

            <div className="description">
                {description}
                <span className="read-more" onClick={readmoreHnadler}>
                    {readmore ?  "Read More" : "Show Less"}
                </span>
            </div>

      </div>

      <button className="btn-red" onClick={() => removeTour(id)}>
        Not Interested
      </button>

    </div>
  );
  
}

export default Card;
