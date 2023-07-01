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
      const { data } = await axios.put(
        `${server}/hostel/updateseat/${id}`,
        { seat },
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
      setbutton(false);
      const { data } = await axios.delete(`${server}/hostel/delete/${id}`, {
        withCredentials: true,
      });

      toast.success(data.message);
      setRefresh((prev) => !prev);
      setbutton(true);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="container">
      <div className="text-list">
        <ol>
          <li>city {city}</li>
          <li>rent {rent}</li>
          <li>address {address}</li>
          <li>mobile {mobile}</li>
          <li>available {status}</li>
          <li>gatetime {gatetime}</li>
          <li>facilities {facilites}</li>
          <li> {area}</li>
          <li>available {nearby}</li>
          <li>avaialble{availableseats}</li>
          <li>total{totalseats}</li>
        </ol>
        <div className="input">
          <input
            onChange={() => updateHandler(id)}
            type="checkbox"
            checked={light}
          />
        </div>
        <div className="input">
          <input
            placeholder="edite available seats"
            type="number"
            onChange={(e) => setSeat(e.target.value)}
          />
          <button onClick={updateseats}>update seats</button>
        </div>

        <div className="button">
          <button disabled={button} onClick={() => deleteHandler(id)} className="btn">
            Delete
          </button>
        </div>
      </div>

      <div className="img">
        <img className="image" src={image} alt="room" />
      </div>
    </div>
  );
};

export default Myhosteldata;
