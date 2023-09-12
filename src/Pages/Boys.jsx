import React, { useContext, useEffect, useState } from "react";
import Boysdata from "./Boysdata";
import axios from "axios";
import "../style/boys.css";
import { toast } from "react-hot-toast";
import { Context, server } from "..";
import { collapseToast } from "react-toastify";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import KeyboardReturnOutlinedIcon from "@mui/icons-material/KeyboardReturnOutlined";

const Boys = () => {
  
  const [loading, setloading] = useState(true);
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
        setloading(false);
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

      <Helmet>
        
        <title>Boys</title>
        <meta
          name="description"
          content="for boys in indore we provide rooms flats hostels shops free without brokerage "
        />
        <meta
          name="keywords"
          content=" rooms in indore , free ,room , hostel , pg , shops , shops in indore , room for boys , room for girls , hostel for boys , hostel for girls , pg for boys , pg for girls , shops free  , no brokerage , without brokerage , wellroom wellroom.in , wellroom , achha room , best room , free room , room for student   "
        />
        <meta name="theme-color" content="#E6E6FA" />
        <link rel="canonical" href="https://www.wellroom.in/boys" />
      </Helmet>

      <div className="back">
        <h5 className=" boy  my-2 py-2  ">
          Available Rooms For Boys In{" "}
          {JSON.parse(window.localStorage.getItem("valu"))}
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

            {boys &&
              boys.map((i) => {
                return (
                  <>
                    <Boysdata
                      city={i.city}
                      rent={i.rent}
                      address={i.address}
                      mobile={i.mobile}
                      image={i.image}
                      image2={i.image2}
                      size={i.size}
                      facilities={i.facilities}
                      date={i.date}
                      days={i.days}
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
