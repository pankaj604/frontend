import React, { useEffect, useState } from "react";

const Boysdata = ({
  city,
  rent,
  address,
  mobile,
  image,
  size,
  facilities,
  date,
  image2,
}) => {
  //
  const [daysLeft, setDaysLeft] = useState(null);

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

  function generateUniqueId() {
    return `carousel-${Math.random().toString(36).substring(7)}`;
  }
  const newid = generateUniqueId();
  useEffect(() => {
    update();
    const carousel1 = document.getElementById(newid);

    new window.bootstrap.Carousel(carousel1);
  }, []);

  return (
    <>
      <div className=" one my-2 p-0 col-xl-2  text-white">
        <div
          id={newid}
          className="carousel slide "
          data-bs-ride="carousel"
          data-interval="10000"
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
        <div className="text p-1">
          <h6 className="d-inline m-0 h6">
            Room Rent is ={" "}
            <p className="m-0 d-inline rent-value">
              {" "}
              <b className="left-days">{rent}</b>
            </p>
          </h6>
          <br />

          <h6 className="d-inline m-0 h6">
            Owner Mo. = <p className="m-0 d-inline value">{mobile}</p>
          </h6>
          <br />
          <h6 className="d-inline m-0 h6">
            Room Size = <p className="m-0 d-inline value">{size}</p>
          </h6>
          <br />
          <h6 className="d-inline m-0 h6">
            Facilities = <p className="m-0 d-inline value">{facilities}</p>
          </h6>
          <br />
          <h6 className="d-inline m-0 h6">
            {date && <>Available on </>}
            <p className="m-0 d-inline value">
              <b> {date}</b>{" "}
              <b className="left-days"> left -days = {daysLeft} </b>
            </p>
          </h6>
          <br />
          <h6 className="d-inline m-0 h6">
            Address = <p className="m-0 d-inline value">{address}</p>
          </h6>
          <br />
        </div>
      </div>
    </>
  );
};

export default Boysdata;
