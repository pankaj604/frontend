import React, { useContext, useEffect, useState } from "react";
import Boysdata from "./Boysdata";
import axios from "axios";

import { toast } from "react-hot-toast";
import { Context, server } from "..";
import { collapseToast } from "react-toastify";

const Boys = () => {
  const { city, setCity } = useContext(Context);
  const [boys, Rboys] = useState([]);
  const [error, seterror] = useState("");
  const allboys = async () => {
    await axios
      .get(`${server}/room/boys/${city}`, {
        withCredentials: true,
      })
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
    <div>
      <h1 className="boys-head">Available rooms for boys</h1>
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
            />
            ;
          </>
        );
      })}
    </div>
  );
};

export default Boys;
