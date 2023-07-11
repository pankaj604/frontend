import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Context, server } from "..";
import axios from "axios";
import Girlsdata from "./Girlsdata";
import Pgdata from "./Pgdata";

const PG = () => {


  const [pg, setPG] = useState([]);
  const pgroom = async () => {
    await axios
      .get(`${server}/room/pg/${JSON.parse(
        window.localStorage.getItem("valu")
      )}`, {
        withCredentials: true,
      })
      .then((res) => {
        setPG(res.data.rooms);
      })
      .catch((e) => {
        toast.error(e.response.data.message);
      });
  };
  useEffect(() => {
    pgroom();
  }, []);

  return (
    <div className="back">
      <h5 className="boy">Available PG  For Girls In {JSON.parse(
          window.localStorage.getItem("valu")
        )}</h5>
      <div className="container-fluid">
        <div className=" row ">
         
          {pg.map((i) => {
            return (
              <>
                <Pgdata
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
  );
};

export default PG;
