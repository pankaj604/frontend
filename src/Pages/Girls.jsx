import React, { useContext, useEffect, useState } from "react";
import Girlsdata from "./Girlsdata";
import axios from "axios";
import { Context, server } from "..";
import { toast } from "react-hot-toast";
import "../style/Girls.css";
import { Link } from "react-router-dom";
import KeyboardReturnOutlinedIcon from "@mui/icons-material/KeyboardReturnOutlined";

const Girls = () => {
  const [girls, Rgirls] = useState([]);
  const [error, seterror] = useState("");
  const allboys = async () => {
    await axios
      .get(
        `${server}/room/girls/${JSON.parse(
          window.localStorage.getItem("valu")
        )}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        Rgirls(res.data.rooms);
      })
      .catch((e) => {
        toast.error(e.response.data.message);
        seterror(e.response.data.message);
      });
  };
  useEffect(() => {
    allboys();
  }, []);
  console.log(girls);
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
          Available Rooms For Girls in{" "}
          {JSON.parse(window.localStorage.getItem("valu"))}
        </h5>
        <div className="container-fluid">
          <div className=" row ">
            {error && <h1>{error}</h1>}
            {girls.map((i) => {
              return (
                <>
                  <Girlsdata
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
    </>
  );
};

export default Girls;
