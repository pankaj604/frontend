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
        
        <title>pg</title>
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
