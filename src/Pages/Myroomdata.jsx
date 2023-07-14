import axios from "axios";
import React, { useContext, useState } from "react";
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
  size,
  facilities,
}) => {
  const { setRefresh, refresh } = useContext(Context);
  const [button, sebutton] = useState(false);
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
      const resu = window.confirm("are you sure to delet");
      if (resu) {
        sebutton(false);
        const { data } = await axios.delete(`${server}/room/delet/${id}`, {
          withCredentials: true,
        });

        toast.success(data.message);
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
      <div div className="one m-3  p-0 col-xl-2 bg-dark text-white">
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
        </div>
        <div className="operation d-flex flex-row  ">
          <div className="input d-flex  flex-row m-2">
            <input
              className="chackbox m-2"
              disabled={button}
              onChange={() => updateHandler(id)}
              type="checkbox"
              checked={light}
            />
            <h5 className="choise m-2">ON/OFF</h5>
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

export default Myroomdata;
