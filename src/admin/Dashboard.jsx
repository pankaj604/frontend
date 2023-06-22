import React from "react";

const Dashboard = ({ city, rent, forr, address, mobile, status, image }) => {
  return (
    <>
      <div className="container">
        <div className="text-list">
          <ol>
            <li>city {city}</li>
            <li>rent {rent}</li>
            <li>address {address}</li>
            <li>mobile {mobile}</li>
            <li>for {forr}</li>
            <li>available {status}</li>
          </ol>
        </div>

        <div className="img">
          <img className="image" src={image} alt="room" />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
