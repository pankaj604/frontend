import React, { useEffect, useState } from "react";
import "../style/boys.css";
import { Link } from "react-router-dom";

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
  date,
  image2,
  hostelid
}) => {
  const [daysLeft, setDaysLeft] = useState(null);

  function generateUniqueId() {
    return `carousel-${Math.random().toString(36).substring(7)}`;
  }
  const newid = generateUniqueId();
  const update = () => {
    const inputDate = new Date(date);

    const currentDate = new Date();

    const timeDifference = inputDate - currentDate.getTime();
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    if (daysRemaining >= 1) {
      setDaysLeft(daysRemaining);
    } else {
      setDaysLeft("Available Now");
    }
    
  };

  useEffect(() => {
    const carousel1 = document.getElementById(newid);

    new window.bootstrap.Carousel(carousel1);
    update();
  }, []);
  return (
    <>
      <div className=" one  p-0 col-xl-2  text-white">
      <div
          id={newid}
          className="carousel slide"
          data-bs-ride="carousel"
          data-interval="1000"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target={newid}
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target={newid}
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={image}
                className="d-block w-100 chack"
                alt="Order Narmadeshvar shivling , Narmadeshvar shivling , Original"
              />
            </div>
            <div className="carousel-item">
              <img
                src={image2}
                className="d-block w-100 chack"
                alt="Order Narmadeshvar shivling , Narmadeshvar shivling , Original natural shivling"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target={newid}
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target={newid}
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* <div className="image p-0">
          <img className="img-fluid w-100 h-100 " src={image} alt="room" />
        </div> */}
        <div className="text p-1">
          <h6 className="d-inline m-0 h6">
            Seat rent = <p className="m-0 d-inline rent-value">{rent} , </p>
            id. = <p className="roomid d-inline p-1 ">{hostelid}</p>
            <br />
            <p className="m-0 d-inline  hostel-name">
              Hostel Name = <p className="m-0 d-inline ">{area}</p>
            </p>
            <br />
            Nearby = <p className="m-0 d-inline value">{nearby}</p>
          </h6>
          <br />
          <h6 className="d-inline m-0 h6">
            Available seats ={" "}
            <p className="m-0 d-inline value">{availableseats} </p> && Total ={" "}
            <p className="m-0 d-inline value">{totalseats}</p>
            <br />
            Gatetime = <p className="m-0 d-inline value">{gatetime}</p>
          </h6>
          <br />
          <h6 className="d-inline m-0 h6">
            Facilities = <p className="m-0 d-inline value">{facilites}</p>
          </h6>
          <br />
          <h6 className="d-inline m-0 h6">
            Address = <p className="m-0 d-inline value">{address}</p>
          </h6>
          <br />
          <h6 className="d-inline m-0 h6">
            {date && <>Available on </>}
            <p className="m-0 d-inline value">
              <b> {date}</b> {" "}
              <b className="left-days"> left -days= {daysLeft} </b>
            </p>
          </h6>
          <br />
          <h6 className="d-inline m-0 h6">
            Owner Mo = <p className="m-0 d-inline value">{mobile}</p>
          </h6>
        </div>
      </div>
    </>
  );
};

export default Hosteldata;
