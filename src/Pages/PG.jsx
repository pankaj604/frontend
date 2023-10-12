import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Context, server } from "..";
import axios from "axios";
import Girlsdata from "./Girlsdata";
import Pgdata from "./Pgdata";
import { Helmet } from "react-helmet";
import KeyboardReturnOutlinedIcon from "@mui/icons-material/KeyboardReturnOutlined";
import { Link, useParams } from "react-router-dom";

const PG = () => {
  const { id } = useParams();
  const [error, seterror] = useState("");
  const [loading , setloading] = useState(true);
  const [pg, setPG] = useState([]);
  const pgroom = async () => {
    await axios
      .post(
        `${server}/room/pg/`,
        {
          id,
          city: JSON.parse(window.localStorage.getItem("valu")),
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setPG(res.data.rooms);
        setloading(false)
      })
      .catch((e) => {
        toast.error(e.response.data.massage);
        seterror(e.response.data.message);
      });
  };
  useEffect(() => {
    pgroom();
  }, []);

  return (
    <>  
     <Helmet>
        
        <title>pg for girls and boys </title>
        <meta
          name="description"
          content="we are providing rooms flats hostels shops free without brokerage "
        />
        <meta
          name="keywords"
          content="  for pg rooms in indore , free ,room , hostel , pg , shops , shops in indore , room for boys , room for girls , hostel for boys , hostel for girls , pg for boys , pg for girls , shops free  , no brokerage , without brokerage , wellroom wellroom.in , wellroom , achha room , best room , free room , room for student   "
        />
        <meta name="theme-color" content="#E6E6FA" />
        <link rel="canonical" href="https://www.wellroom.in/pg" />
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

      <div className="back">
        <h5 className="boy m-0">
          Available {id} In
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
             {pg.length < 1  &&  <h5 className="text-center ">All Rooms are Sold out please come back after some time for new rooms, Take Care</h5>}
            {pg && pg.map((i) => {
              return (
                <>
                  <Pgdata
                    city={i.city}
                    rent={i.rent}
                    address={i.address}
                    mobile={i.mobile}
                    image={i.image}
                    image2={i.image2}
                    size={i.size}
                    facilities={i.facilities}
                    food={i.food}
                    date={i.date}
                    roomid={i.roomid}
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

export default PG;
