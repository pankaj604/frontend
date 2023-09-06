import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Context, server } from "..";
import { toast } from "react-hot-toast";
import Hosteldata from "./Hosteldata";
import "../style/boys.css";
import { Link, useParams } from "react-router-dom";
import KeyboardReturnOutlinedIcon from "@mui/icons-material/KeyboardReturnOutlined";

const Hostel = () => {
  const { id } = useParams();
  const [loading , setloading] = useState(true);
  const [hostels, setHostles] = useState([]);
  const [error, seterror] = useState("");
  const hostel = async () => {
    await axios
      .post(
        `${server}/hostel/hostels/`,{
          id,
          city : JSON.parse(
            window.localStorage.getItem("valu")
          )
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setHostles(res.data.hostels);
        setloading(false)
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
     <div className="nav-main-cont d-flex flex-row justify-content-center mt-1  text text-center">
        <div className="m-0 p-1">
          <Link className="go-back text-decoration-none" to={"/header"}>
            Go Back To Home <KeyboardReturnOutlinedIcon />
          </Link>
        </div>
      </div>
      <div className="back">
        <h5 className="boy my-2">
          Available Rooms At Hostles In{" "}
          {JSON.parse(window.localStorage.getItem("valu"))}{" "} for {id}
        </h5>
        <div className="container-fluid">
          <div className=" row ">
            {error && <h1>{error}</h1>}
            {loading && (
              <>
                <div className="text-center d-flex justify-content-center mt-5 align-items-center container-fluid">
                  <div className="spinner"></div>
                </div>
              </>
            )}
            { hostels && hostels.map((i) => {
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
                    image2={i.image2}
                    status={i.status ? "ON" : "OFF"}
                    key={i._id}
                    date={i.date}
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
