import React, { useContext, useEffect, useState } from "react";
import { Context, server } from "..";
import axios from "axios";
import { toast } from "react-hot-toast";
import Myshopdata from "./Myshopdata";

const MyShop = () => {
  const { Setrefresh, refresh } = useContext(Context);
  const [myroom, setMyroom] = useState([]);

  const mydata = async () => {
    await axios
      .get(`${server}/shop/my`, {
        withCredentials: true,
      })
      .then((res) => {
        setMyroom(res.data.shop);
      })
      .catch((e) => {
        toast.error(e.response.data.message);
      });
  };

  useEffect(() => {
    mydata();
  }, [refresh]);

  console.log(myroom);

  return (
    <div>
      <div>
        {myroom.map((i) => {
          return (
            <>
              <Myshopdata
                city={i.city}
                rent={i.rent}
                address={i.address}
                mobile={i.mobile}
                area={i.area}
                nearby={i.nearby}
                size={i.size}
                image={i.image}
                id={i._id}
                status={i.status ? "ON" : "OFF"}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default MyShop;
