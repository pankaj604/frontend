import React, { useEffect, useState } from "react";

const Coupledata = ({
  city,
  rent,
  address,
  mobile,
  image,
  size,
  facilities,
  date,
  image2,
  roomid
}) => {
  const [daysLeft, setDaysLeft] = useState(null);
  const [newDate , setdate] = useState(date)
  //

  function reverseDateString(inputDateString) {
    const dateComponents = inputDateString.split('-'); // Assuming the date format is YYYY-MM-DD
    if (dateComponents.length !== 3) {
      // Check if the date string has the correct format
      return null;
    }
  
    const [year, month, day] = dateComponents;
    const reversedDateString = `${day}-${month}-${year}`;
    return reversedDateString;
  }
  
  // Example usage:
  // const inputDateString = '2023-10-11';
  const reversedDateString = reverseDateString(newDate+"");

  //
  
  const update = () => {
    const inputDate = new Date(newDate);

    const currentDate = new Date();

    const timeDifference = inputDate - currentDate.getTime();
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    if (daysRemaining >= 1) {
      setDaysLeft(daysRemaining);
    } else {
      setDaysLeft("Available Now");
      setdate(null);
    }
  
  };
  function generateUniqueId() {
    return `carousel-${Math.random().toString(36).substring(7)}`;
  }
  const newid = generateUniqueId();

  useEffect(() => {
    const carousel1 = document.getElementById(newid);

    new window.bootstrap.Carousel(carousel1);
    update();
  }, []);
  return (
    <>
      <div className="one   p-0 col-xl-2 text-white">
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
            Rent  ={" "}
            <p className="m-0 d-inline rent-value">
              <b>₹{rent} , </b>
            </p>
            id = <p className="roomid d-inline p-1 ">{roomid}</p>  
          </h6>
          <br />

          <h6 className="d-inline m-0 h6">
            Owner Mo. = <p className="m-0 d-inline value">{mobile}</p>
          </h6>
          <br />
          <h6 className="d-inline m-0 h6">
            Room Size =  <p className="m-0 d-inline value">{size}</p>
          </h6>
          <br />
          <h6 className="d-inline m-0 h6">
            Facilities = <p className="m-0 d-inline value">{facilities}</p>
          </h6>
          <br />
          <h6 className="d-inline m-0 h6">
          {newDate && <>Available on </>}
            <p className="m-0 d-inline value">
              <b> {reversedDateString}</b> {" "}
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

export default Coupledata;
