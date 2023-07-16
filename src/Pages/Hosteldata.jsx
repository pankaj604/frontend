import React from "react";
import "../style/boys.css";
const Hosteldata = ({
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
}) => {
  return (
    <>
      <div className=" one m-3  p-0 col-xl-2  text-white">
        <div className="image p-0">
          <img className="img-fluid w-100 h-100 " src={image} alt="room" />
        </div>
        <div className="text p-1">
          <h6 className="d-inline m-0 h6">
            room rent is <p className="m-0 d-inline value">{rent}</p>
            <br />
            area <p className="m-0 d-inline value">{area}</p>
            <br />
            Nearby <p className="m-0 d-inline value">{nearby}</p>
          </h6>
          <br />
          <h6 className="d-inline m-0 h6">
            Available seats{" "}
            <p className="m-0 d-inline value">{availableseats} </p>
            Total <p className="m-0 d-inline value">{totalseats}</p>
            <br />
            Gatetime <p className="m-0 d-inline value">{gatetime}</p>
          </h6>
          <br />
          <h6 className="d-inline m-0 h6">
            Facilities <p className="m-0 d-inline value">{facilites}</p>
          </h6>
          <br />
          <h6 className="d-inline m-0 h6">
            Address - <p className="m-0 d-inline value">{address}</p>
          </h6>
          <br />
          <h6 className="d-inline m-0 h6">
            Owner Mo. <p className="m-0 d-inline value">{mobile}</p>
          </h6>
        </div>
      </div>
    </>
  );
};

export default Hosteldata;
