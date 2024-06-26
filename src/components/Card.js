import React, { useState } from 'react';

export default function Card({ id, name, info, image, price , removeTour}) {
  const [isReadMore, setIsReadMore] = useState(false);
  const description = isReadMore ? info : `${info.substring(0, 200)}...`;
  
  function readmoreHandler (){
    setIsReadMore(!isReadMore);
  }
  

  return (
    < div className="card">
      <img src={image} alt={name} className='image' />
      <div className="tour-info">
      <div className="tour-details">
        <h4 className="tour-name">{name}</h4>
        <h4 className="tour-price">{price}</h4>
      </div>
      <div className="tour-description">
        {description}
       <span className="read-more" onClick={readmoreHandler}>{isReadMore ? `...Show Less` : `...Read More`} </span>
      </div>
      </div>
      <button className="btn-red" onClick={() => removeTour(id)}>Not Interested</button>
    </div>
    
  );
}



