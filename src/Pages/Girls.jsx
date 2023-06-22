import React, { useEffect, useState } from "react";
import Girlsdata from "./Girlsdata";
import axios from "axios";
import { server } from "..";
import { toast } from "react-hot-toast";

const Girls = () => {
  const [girls, Rgirls] = useState([]);
  const allboys = async () => {
    await axios
      .get(`${server}/room/girls`, {
        withCredentials: true,
      })
      .then((res) => {
        Rgirls(res.data.rooms);
      })
      .catch((e) => {
        toast.error(e.response.data.message);
      });
  };
  useEffect(() => {
    allboys();
  }, []);

  return (
    <div>
      <h1>Available rooms for Girls</h1>

      {girls.map((i) => {
        return (
          <>
            <Girlsdata
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

export default Girls;
