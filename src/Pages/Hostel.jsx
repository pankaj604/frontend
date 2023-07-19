import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Context, server } from "..";
import { toast } from "react-hot-toast";
import Hosteldata from "./Hosteldata";
import "../style/boys.css";
const Hostel = () => {


  const [hostels, setHostles] = useState([]);
  const [error, seterror] = useState("");
  const hostel = async () => {
    await axios
      .get(`${server}/hostel/hostels/${JSON.parse(
        window.localStorage.getItem("valu")
      )}`, {
        withCredentials: true,
      })
      .then((res) => {
        setHostles(res.data.hostels);
      })
      .catch((e) => {
        toast.error(e.response.data.message);
        seterror(e.response.data.message);
      });
  };
  useEffect(() => {
    hostel();
  }, []);

  return (
    <>
      <div className="back">
        <h5 className="boy m-0">Available Rooms At Hostles In {JSON.parse(
          window.localStorage.getItem("valu")
        )} </h5>
        <div className="container-fluid">
          <div className=" row ">
            {error && <h1>{error}</h1>}
            {hostels.map((i) => {
              return (
                <>
                  <Hosteldata
                    city={i.city}
                    rent={i.rent}
                    address={i.address}
                    mobile={i.mobile}
                    area={i.area}
                    nearby={i.nearby}
                    availableseats={i.availableseats}
                    totalseats={i.totalseats}
                    gatetime={i.gatetime}
                    facilites={i.facilites}
                    image={i.image}
                    status={i.status ? "ON" : "OFF"}
                    key={i._id}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hostel;
