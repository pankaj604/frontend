import React, { useContext, useState } from "react";
import { Context, server } from "..";
import axios from "axios";
import { toast } from "react-hot-toast";

const Myhosteldata = ({
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
  id,
  status,
  isApproved,
  hostelfor,
  date,
  days,
}) => {
  const [button, setbutton] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [daysLeft, setDaysLeft] = useState(null);
  const { refresh, setRefresh } = useContext(Context);
  const [seat, setSeat] = useState("");
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

  //

  const dateupdate = async (id, selectedDate) => {
    try {
      const { data } = await axios.post(
        `${server}/hostel/updatedate`,
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



  const updateseats = async () => {
    try {
      const result = window.confirm("sure to update");
      if (result) {
        const { data } = await axios.put(
          `${server}/hostel/updateseat/${id}`,
          { seat },
          {
            withCredentials: true,
          }
        );

        toast.success(data.message);
        setRefresh((prev) => !prev);
      } else {
        return;
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const updateHandler = async (id) => {
    try {
      const { data } = await axios.put(
        `${server}/hostel/update/${id}`,
        {},
        {
          withCredentials: true,
        }
      );

      toast.success(data.message);
      setRefresh((prev) => !prev);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const deleteHandler = async (id) => {
    try {
      const resultt = window.confirm("are you sure to delet");
      if (resultt) {
        setbutton(false);
        const { data } = await axios.delete(`${server}/hostel/delete/${id}`, {
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
      <div div className="one m-3  p-0 col-xl-2 text-white">
        <div className="image p-0">
          <img className="img-fluid w-100 h-100 " src={image} alt="room" />
        </div>
        <div className="text p-1">
          <h6 className="d-inline m-0 h6">
            room rent is <p className="m-0 d-inline value">{rent} </p>
            City <p className="m-0 d-inline value">{city}</p>
          </h6>
          <br />

          <h6 className="d-inline m-0 h6">
            Owner Mo. <p className="m-0 d-inline value">{mobile} </p>
          </h6>
          <h6 className="d-inline m-0 h6">
            Hostelfor = <p className="m-0 d-inline value">{hostelfor}</p>
          </h6>
          <br />
          <h6 className="d-inline m-0 h6">
            Hostel Name <p className="m-0 d-inline value">{area}</p>
          </h6>
          <br />
          <h6 className="d-inline m-0 h6">
            Nearby <p className="m-0 d-inline value">{nearby}</p>
          </h6>
          <br />
          <h6 className="d-inline m-0 h6">
            Available Seat{" "}
            <p className="m-0 d-inline value">{availableseats} </p>
            Totalseat <p className="m-0 d-inline value">{totalseats}</p>
          </h6>
          <br />

          <h6 className="d-inline m-0 h6">
            Gatetime <p className="m-0 d-inline value">{gatetime}</p>
          </h6>
          <br />
          <h6 className="d-inline m-0 h6">
            Facilities <p className="m-0 d-inline value">{facilites}</p>
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
        </div>
        <div className="operation d-flex flex-row  ">
          {isApproved ? (
            <div className=" d-flex  flex-row m-2">
              <input
                className="chackbox mt-2"
                onChange={() => updateHandler(id)}
                type="checkbox"
                checked={light}
              />
            </div>
          ) : (
            <div className="btn btn-warning ">
              <h6>Waiting for Approval</h6>
            </div>
          )}

          {isApproved && (
            <div className="seat d-flex flex-row">
              <input
                className="chackbox text text-center m-2 in-seat"
                placeholder="Seats"
                type="number"
                onChange={(e) => setSeat(e.target.value)}
              />
              <button className="seat-btn p-2 mt-2 mb-2" onClick={updateseats}>
                Set
              </button>
            </div>
          )}

          <div className="button align-self-end m-2">
            <button
              disabled={button}
              onClick={() => deleteHandler(id)}
              className="btn"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Myhosteldata;
