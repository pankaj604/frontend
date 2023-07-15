import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Context, server } from "..";
import { toast } from "react-hot-toast";
import Coupledata from "./Coupledata";

const Couple = () => {

  const [couple, setcouple] = useState([]);
  const both = async () => {
    await axios
      .get(`${server}/room/everyone/${JSON.parse(
        window.localStorage.getItem("valu")
      )}`, {
        withCredentials: true,
      })
      .then((res) => {
        setcouple(res.data.rooms);
      })
      .catch((e) => {
        toast.error(e.response.data.message);
      });
  };
  useEffect(() => {
    both();
  }, []);

  return (
    <div className="back">
      <h5 className="boy m-0">Available Rooms For Couple in {JSON.parse(
          window.localStorage.getItem("valu")
        )}</h5>
      <div className="container-fluid">
        <div className="row">
          {" "}
          {couple.map((i) => {
            return (
              <>
                <Coupledata
                  city={i.city}
                  rent={i.rent}
                  address={i.address}
                  mobile={i.mobile}
                  image={i.image}
                  size={i.size}
                  facilities={i.facilities}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Couple;
