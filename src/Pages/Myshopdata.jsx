import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Context, server } from "..";
import { toast } from "react-hot-toast";

const Myshopdata = ({
  city,
  rent,
  address,
  mobile,
  image,
  area,
  nearby,
  size,
  status,
  id,
  isApproved,
  date,
  image2
 
}) => {
  const [button, setbutton] = useState(false);
  const { setRefresh, refresh } = useContext(Context);
  const [daysLeft, setDaysLeft] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  let light = false;
  if (`${status}` === "ON") {
    light = true;
  } else {
    light = false;
  }
  //
  function generateUniqueId() {
    return `carousel-${Math.random().toString(36).substring(7)}`;
  }
   //
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
  const newid = generateUniqueId();

  useEffect(() => {
    update();
    const carousel1 = document.getElementById(newid);

    new window.bootstrap.Carousel(carousel1);
  }, []);
  //
  //
  const handleDateChange = (event) => {
    const inputDate = new Date(event.target.value);
   
    const currentDate = new Date();
    const maxDate = new Date();
    maxDate.setDate(currentDate.getDate() + 15); // Limit to 15 days from now
    //

    const timeDifference = inputDate.getTime() - currentDate.getTime();
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    //
    //
    if (daysRemaining >= 1) {
      setDaysLeft(daysRemaining);
    } else {
      setDaysLeft("Available Now");
    }
    //
    //

    if (inputDate >= currentDate && inputDate <= maxDate) {
      setSelectedDate(event.target.value);
     
    } else {
      window.alert("'Date must be within the next 15 days'");
    }
  };
  //
  const dateupdate = async (id, selectedDate) => {
    try {
      const { data } = await axios.post(
        `${server}/shop/updatedate`,
        {
          id,
          selectedDate,
          daysLeft,
        },
        {
          withCredentials: true,
        }
      );

      toast.success(data.massage);

      setRefresh((prev) => !prev);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error.response.data.message);
    }
  };
  //

  const updateHandler = async (id) => {
    try {
      const { data } = await axios.put(
        `${server}/shop/update/${id}`,
        {},
        {
          withCredentials: true,
        }
      );

      toast.success(data.massage);
      setRefresh((prev) => !prev);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const deleteHandler = async (id) => {
    try {
      const resul = window.confirm("are you sure to delet");
      if (resul) {
        setbutton(false);
        const { data } = await axios.delete(`${server}/shop/delet/${id}`, {
          withCredentials: true,
        });

        toast.success(data.message);
        setRefresh((prev) => !prev);
        setbutton(true);
      } else {
        return;
      }
    } catch (error) {
      setbutton(false);
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <div div className="one   p-0 col-xl-2  text-white">
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
                className="d-block w-100 chack "
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
            Shop/Office rent is <p className="m-0 d-inline value">{rent}</p>
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
            City <p className="m-0 d-inline value">{city}</p>
          </h6>
          <br />
          <h6 className="d-inline m-0 h6">
            Area <p className="m-0 d-inline value">{area}</p>
          </h6>
          <br />
          <h6 className="d-inline m-0 h6">
            Facilities <p className="m-0 d-inline value">{nearby}</p>
          </h6>
          <br />
          <h6 className="d-inline m-0 h6">
            {date && <>Available on </>}
            <p className="m-0 d-inline value">
              <b> {date}</b> ||{" "}
              <b className="left-days"> left -days= {daysLeft} </b>
            </p>
          </h6>
          <br />
          <h1></h1>
          <h6 className="d-inline m-0 h6">
            <input
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
            />
            <button
              onClick={() => dateupdate(id, selectedDate)}
              className="btn btn-primary border-dark "
            >
              {" "}
              update date
            </button>
          </h6>
          <br />
          <h6 className="d-inline m-0 h6">
            Address <p className="m-0 d-inline value">{address}</p>
          </h6>
          <br />
        </div>

        <div className="operation d-flex justify-content-around flex-row ">
          <div className="input d-flex justify-content-center  flex-row m-2">
          {isApproved ? (
            <div className="input d-flex justify-content-center align-items-center  flex-row m-2">
              <input
                className="chackbox "
                disabled={button}
                onChange={() => updateHandler(id)}
                type="checkbox"
                checked={light}
              />
              <h6 className="m-1 choise">Available</h6>
            </div>
          ) : (
            <div className="btn btn-warning ">
              <h6>Waiting for Approval</h6>
            </div>
          )}
          </div>
          <div className="button align-self-end m-2">
            <button
              disabled={button}
              onClick={() => deleteHandler(id)}
              className="btn text-dark bg-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Myshopdata;
