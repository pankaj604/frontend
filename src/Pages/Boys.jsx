import React, { useEffect, useState } from "react";
import Boysdata from "./Boysdata";
import axios from "axios";
import { server } from "..";
import { toast } from "react-hot-toast";

const Boys = () => {
  const [boys, Rboys] = useState([]);
  const allboys = async () => {
    await axios
      .get(`${server}/room/boys`, {
        withCredentials: true,
      })
      .then((res) => {
        Rboys(res.data.rooms);
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
      <h1>Available rooms for boys</h1>

      {boys.map((i) => {
        return (
          <>
            <Boysdata
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

export default Boys;
