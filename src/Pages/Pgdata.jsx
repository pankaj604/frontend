import React, { useEffect, useState } from "react";
import "../style/pgdata.css"
const Pgdata = ({ city, rent, address, mobile, image }) => {
  return (
    <div className="container-pg">
      <div className="text-list">
        PG rooms For girls
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

export default Pgdata;
