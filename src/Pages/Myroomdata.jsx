import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Context, server } from "..";
import { toast } from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../style/Myroomdata.css";
const Myroomdata = ({
  city,
  rent,
  address,
  mobile,
  forr,
  status,
  id,
  image,
  size,
  facilities,
  isApproved,
  food,
  date,
  days,
}) => {
  const [selectedDate, setSelectedDate] = useState("");
  const { setRefresh, refresh } = useContext(Context);
  const [daysLeft, setDaysLeft] = useState(null);
  const [button, sebutton] = useState(false);
  let light = false;
  if (`${status}` === "ON") {
    light = true;
  } else {
    light = false;
  }

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
    if (inputDate >= currentDate && inputDate <= maxDate) {
      setSelectedDate(event.target.value);
      setDaysLeft(daysRemaining);
      console.log(daysRemaining);
    } else {
      window.alert("'Date must be within the next 15 days'");
    }
  };
  // daily update
  // const calculateDaysLeft = (inputDate) => {
  //   const currentDate = new Date();
  //   const targetDate = new Date(inputDate);

  //   const timeDifference = targetDate.getTime() - currentDate.getTime();
  //   const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  //   setDaysLeft(daysRemaining);
  // };

  // useEffect(() => {

  //   console.log("button dabi ")
  //   // }, 1000 * 60 * 60 * 24); // Update daily
  // }, []);

  //

  const dateupdate = async (id, selectedDate) => {
    try {
      const { data } = await axios.post(
        `${server}/room/updatedate`,
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

  const updateHandler = async (id) => {
    try {
      const { data } = await axios.put(
        `${server}/room/update/${id}`,
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

  //

  //

  const deleteHandler = async (id) => {
    try {
      const resu = window.confirm("are you sure to delet");
      if (resu) {
        sebutton(false);
        const { data } = await axios.delete(`${server}/room/delet/${id}`, {
          withCredentials: true,
        });

        toast.success(data.massage);
        sebutton(true);
        setRefresh((prev) => !prev);
      }
    } catch (error) {
      sebutton(false);
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <div div className="one p-0 col-xl-2  text-white">
        <div className="image p-0">
          <img className="img-fluid w-100 h-100 " src={image} alt="room" />
        </div>
        <div className="text p-1">
          <h6 className="d-inline m-0 h6">
            room rent is <p className="m-0 d-inline value">{rent}</p>
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
            For <p className="m-0 d-inline value">{forr}</p>
          </h6>
          <br />
          <h6 className="d-inline m-0 h6">
            Facilities <p className="m-0 d-inline value">{facilities}</p>
          </h6>
          <br />
          <h6 className="d-inline m-0 h6">
            Address <p className="m-0 d-inline value">{address}</p>
          </h6>
          <br />
          <h6 className="d-inline m-0 h6">
            Available date ={" "}
            <p className="m-0 d-inline value">
              {date} daysRemaining = {days}
            </p>
          </h6>
          <br />
          <h6 className="d-inline m-0 h6">
            <input
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
            />
            <button
              onClick={() => dateupdate(id, selectedDate)}
              className="btn border-dark "
            >
              {" "}
              update date
            </button>
          </h6>
          <br />
          {food && (
            <>
              <h6 className="d-inline m-0 h6">
                food <p className="m-0 d-inline value">{food}</p>
              </h6>
              <br />
            </>
          )}
        </div>
        <div className="operation  d-flex flex-row  ">
          {isApproved ? (
            <div className="input d-flex justify-content-center align-items-center  flex-row m-2">
              <input
                className="chackbox "
                disabled={button}
                onChange={() => updateHandler(id)}
                type="checkbox"
                checked={light}
              />
              <h5 className="m-1 choise">Available</h5>
            </div>
          ) : (
            <div className="btn btn-warning ">
              <h6 className="choice">Waiting for Approval</h6>
            </div>
          )}
          <div className="button align-self-end m-2">
            <button
              disabled={button}
              onClick={() => deleteHandler(id)}
              className="btn text-light  btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Myroomdata;
