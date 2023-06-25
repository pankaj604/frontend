import React, { useContext, useEffect, useState } from "react";
import { Context, server } from "..";
import axios from "axios";
import { toast } from "react-hot-toast";
import Shopdata from "./Shopdata";

const Shop = () => {
  const { city, setCity } = useContext(Context);
  const [shops, setshops] = useState([]);
  const shop = async () => {
    await axios
      .get(`${server}/shop/${city}`, {
        withCredentials: true,
      })
      .then((res) => {
        setshops(res.data.shops);
      })
      .catch((e) => {
        toast.error(e.response.data.message);
      });
  };
  useEffect(() => {
    shop();
  }, []);

  return (
    <div>
      {shops.map((i) => {
        return (
          <>
            <Shopdata
              city={i.city}
              rent={i.rent}
              address={i.address}
              mobile={i.mobile}
              area={i.area}
              nearby={i.nearby}
              size={i.size}
              image={i.image}
            />
          </>
        );
      })}
    </div>
  );
};

export default Shop;
