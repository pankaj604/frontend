import axios from "axios";
import React, { useContext } from "react";
import { Context, server } from "..";
import { toast } from "react-hot-toast";
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
}) => {
  const { setRefresh, refresh } = useContext(Context);
  let light = false;
  if (`${status}` === "ON") {
    light = true;
  } else {
    light = false;
  }
  const updateHandler = async (id) => {
    try {
      const { data } = await axios.put(
        `${server}/room/update/${id}`,
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
      const { data } = await axios.delete(`${server}/room/delet/${id}`, {
        withCredentials: true,
      });

      toast.success(data.message);
      setRefresh((prev) => !prev);
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
          <li>for {forr}</li>
          <li>available {status}</li>
        </ol>
        <div className="input">
        <input
          onChange={() => updateHandler(id)}
          type="checkbox"
          checked={light}
        />
      </div>

      <div className="button">
        <button onClick={() => deleteHandler(id)} className="btn">
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

export default Myroomdata;
