import React from "react";

const Hosteldata = ({
  city,
  rent,
  address,
  mobile,
  area,
  nearby,
  availableseats,
  totalseats,
  gatetime,
  facilites,
  image,

  status,
}) => {
  return (
    <div className="container-pg">
      <div className="text-list">
        rooms For girls
        <ol>
        <ol>
          <li>city {city}</li>
          <li>rent {rent}</li>
          <li>address {address}</li>
          <li>mobile {mobile}</li>
          <li>available {status}</li>
          <li>gatetime  {gatetime}</li>
          <li>facilities {facilites}</li>
          <li> area {area}</li>
          <li>nearby {nearby}</li>
          <li>available seats {availableseats}</li>
          <li>total seats {totalseats}</li>
        </ol>
        </ol>
        <div className="img-pg">
          <img className="image" src={image} alt="room" />
        </div>
      </div>
    </div>
  );
};

export default Hosteldata;
