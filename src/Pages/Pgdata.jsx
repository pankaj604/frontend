import React, { useEffect, useState } from "react";
import "../style/pgdata.css"
const Pgdata = ({ city, rent, address, mobile, image,size,facilities }) => {
  return (
    <>
      <div className="one p-0 col-xl-2  text-white">
        <div className="image p-0">
          <img className="img-fluid w-100 h-100 " src={image} alt="room" />
        </div>
        <div className="text p-1">
          <h6 className="d-inline m-0 h6">
            room rent is <p className="m-0 d-inline rent-value">{rent}</p>
          </h6>
          <br />
       
          <h6 className="d-inline m-0 h6">
            Owner Mo. <p className="m-0 d-inline value">{mobile}</p>
          </h6>
          <br />
          <h6 className="d-inline m-0 h6">
            Room Size <p className="m-0 d-inline value">{size}</p>
          </h6>
          <br />
          <h6 className="d-inline m-0 h6">
            Facilities <p className="m-0 d-inline value">{facilities}</p>
          </h6>
          <br />
          <h6 className="d-inline m-0 h6">
            Address -  <p className="m-0 d-inline value">{address}</p>
          </h6>
          <br />
        </div>
      </div>
    </>
  );
};

export default Pgdata;
