import React, { useContext, useEffect, useState } from "react";
import Boysdata from "./Boysdata";
import axios from "axios";
import "../style/boys.css";
import { toast } from "react-hot-toast";
import { Context, server } from "..";
import { collapseToast } from "react-toastify";
import { Link } from "react-router-dom";
import KeyboardReturnOutlinedIcon from "@mui/icons-material/KeyboardReturnOutlined";

const Boys = () => {
  const { city, setCity } = useContext(Context);
  const [boys, Rboys] = useState([]);
  const [error, seterror] = useState("");
  const allboys = async () => {
    await axios
      .get(
        `${server}/room/boys/${JSON.parse(
          window.localStorage.getItem("valu")
        )}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        Rboys(res.data.rooms);
      })
      .catch((e) => {
        toast.error(e.response.data.message);
        seterror(e.response.data.message);
      });
  };

  useEffect(() => {
    allboys();
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
        <h5 className=" boy  my-2 py-2  ">
          Available Rooms For Boys In{" "}
          {JSON.parse(window.localStorage.getItem("valu"))}
        </h5>
        <div className="container-fluid">
          <div className=" row ">
            {error && <h1>{error}</h1>}
            {boys.map((i) => {
              return (
                <>
                  <Boysdata
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

export default Boys;
