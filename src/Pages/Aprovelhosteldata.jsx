import React, { useContext, useState } from "react";
import { Context, server } from "..";
import axios from "axios";
import { toast } from "react-hot-toast";

const Aprovelhosteldata = ({
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
}) => {
  const [button, setbutton] = useState(false);
  const { refresh, setRefresh } = useContext(Context);
  const [seat, setSeat] = useState("");
  let light = false;
  if (`${status}` === "ON") {
    light = true;
  } else {
    light = false;
  }
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
        `${server}/hostel/approveHostel/${id}`,
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
      const resultt = window.confirm("are you sure to delet");
      if (resultt) {
        setbutton(false);
        const { data } = await axios.delete(
          `${server}/hostel/approveHostel/${id}`,
          {
            withCredentials: true,
          }
        );

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
            Owner Mo. <p className="m-0 d-inline value">{mobile}</p>
          </h6>
          <br />
          <h6 className="d-inline m-0 h6">
            Area <p className="m-0 d-inline value">{area}</p>
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
        </div>
        <div className="operation d-flex flex-row  ">
          <div className=" d-flex bg-dark flex-row m-2">
            <input
              className="chackbox mt-2"
              onChange={() => updateHandler(id)}
              type="checkbox"
              checked={isApproved}
            />
            <h5 className="m-1 choise">Approved</h5>
          </div>

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

export default Aprovelhosteldata;
