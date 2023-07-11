import React, { useContext, useEffect, useState } from "react";
import { Context, server } from "..";
import axios from "axios";
import { toast } from "react-hot-toast";
import Shopdata from "./Shopdata";

const Shop = () => {
  const [shops, setshops] = useState([]);
  const shop = async () => {
    await axios
      .get(
        `${server}/shop/${JSON.parse(window.localStorage.getItem("valu"))}`,
        {
          withCredentials: true,
        }
      )
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
    <div className="back">
      <h5 className="boy">available shops/offices in {JSON.parse(
          window.localStorage.getItem("valu")
        )}</h5>
      <div className="container-fluid">
        <div className="row">
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
      </div>
    </div>
  );
};

export default Shop;
