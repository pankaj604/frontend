import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { server } from "..";
import axios from "axios";
import Girlsdata from "./Girlsdata";
import Pgdata from "./Pgdata";

const PG = () => {
  const [pg, setPG] = useState([]);
  const pgroom = async () => {
    await axios
      .get(`${server}/room/pg`, {
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
    <div>
       <h1 className="boys-head">Available PG</h1>
      {pg.map((i) => {
        return (
          <>
            <Pgdata
              city={i.city}
              rent={i.rent}
              address={i.address}
              mobile={i.mobile}
              image={i.image}
            />
            ;
          </>
        );
      })}
    </div>
  );
};

export default PG;
