import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Context, server } from "..";
import { toast } from "react-hot-toast";
import Coupledata from "./Coupledata";
import { Helmet } from "react-helmet";
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
      <Helmet>
        
        <title>Couple</title>
        <meta
          name="description"
          content="for couple in indore we provide rooms flats hostels shops free without brokerage "
        />
        <meta
          name="keywords"
          content=" rooms in indore , free ,room , hostel , pg , shops , shops in indore , room for boys , room for girls , hostel for boys , hostel for girls , pg for boys , pg for girls , shops free  , no brokerage , without brokerage , wellroom wellroom.in , wellroom , achha room , best room , free room , room for student   "
        />
        <meta name="theme-color" content="#E6E6FA" />
        <link rel="canonical" href="https://www.wellroom.in/couple" />
        <meta name="theme-color" content="#E6E6FA" />
        <meta property="og:site_name" content="https://www.wellroom.in" />
        <meta property="og:type" content="article" />

        <meta
          property="og:title"
          content="Home - Wellroom , room  without brokerage"
        />
        <meta
          property="og:description"
          content=" we are providing rooms flats hostels shops free without brokerage , Find all room`s pg hostels and shop or offices free without charge and brokerage "
        />
        <meta property="og:url" content="https://www.wellroom.in" />
        <meta name="twitter:title" content="Home - wellroom free brokerage" />
        <meta
          name="twitter:description"
          content=" we are providing rooms flats hostels shops free without brokerage , Find all room`s pg hostels and shop or offices free without charge and brokerage|"
        />
        <meta name="twitter:site" content="https://www.wellroom.in" />
        <meta name="twitter:label1" content="Written by" />

        <meta name="twitter:data1" content=" wellroom " />

        <meta name="author" content="https://www.wellroom.in" />
      </Helmet>
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
        {loading && (
              <>
                <div className="text-center d-flex justify-content-center mt-5 align-items-center container-fluid">
                  <div className="spinner"></div>
                </div>
              </>
            )}
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
                    roomid = {i.roomid}
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
