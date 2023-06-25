import axios from "axios";
import React, { useContext } from "react";
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
        `${server}/shop/update/${id}`,
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
      const { data } = await axios.delete(`${server}/shop/delet/${id}`, {
        withCredentials: true,
      });

      toast.success(data.message);
      setRefresh((prev) => !prev);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div>
      <div className="container-pg">
        <div className="text-list">
          <h1>available shops</h1>
          <ol>
            <li>{city}</li>
            <li>{rent}</li>
            <li>{address}</li>
            <li>{mobile}</li>
            <li>{area}</li>
            <li>{nearby}</li>
            <li>{size}</li>
            <li>available{status}</li>
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
          <div className="img-pg">
            <img className="image" src={image} alt="room" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myshopdata;
