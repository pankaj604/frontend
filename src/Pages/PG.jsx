import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Context, server } from "..";
import axios from "axios";
import Girlsdata from "./Girlsdata";
import Pgdata from "./Pgdata";
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
            {loading && <h1 className="text-center bg-dark text-light">Please Wait .. </h1>}
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
