import React from "react";

const Coupledata = ({ city, rent, address, mobile, image }) => {
  return (
    <div className="container-pg">
      <div className="text-list">
      <ol>
          <li>city is {city}</li>
          <li> rom rent is {rent}</li>
          <li>address is <address>{address}</address></li>
          <li>contact here {mobile}</li>
          
        </ol>
        <div className="img-pg">
          <img className="image" src={image} alt="room" />
        </div>
      </div>
    </div>
  );
};

export default Coupledata;
