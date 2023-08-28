import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Context, server } from "..";
import { toast } from "react-hot-toast";
import Coupledata from "./Coupledata";
import KeyboardReturnOutlinedIcon from "@mui/icons-material/KeyboardReturnOutlined";
import { Link } from "react-router-dom";

const Couple = () => {
  const [couple, setcouple] = useState([]);
  const [loading , setloading] = useState(true);
  const both = async () => {
    await axios
      .get(
        `${server}/room/everyone/${JSON.parse(
          window.localStorage.getItem("valu")
        )}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setcouple(res.data.rooms);
        setloading(false)
      })
      .catch((e) => {
        toast.error(e.response.data.message);
      });
  };
  useEffect(() => {
    both();
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
      <div className=" back ">
        <h5 className="boy m-0">
          Available Rooms For Couple in{" "}
          {JSON.parse(window.localStorage.getItem("valu"))}
        </h5>
        {loading && <h1 className="text-center bg-dark text-light">Please Wait .. </h1>}
        <div className="container-fluid">
          <div className="row">
            {" "}
            {couple && couple.map((i) => {
              return (
                <>
                  <Coupledata
                    city={i.city}
                    rent={i.rent}
                    address={i.address}
                    mobile={i.mobile}
                    image={i.image}
                    image2={i.image2}
                    size={i.size}
                    facilities={i.facilities}
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

export default Couple;
