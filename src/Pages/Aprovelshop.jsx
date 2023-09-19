import React, { useContext, useEffect, useState } from "react";
import { Context, server } from "..";
import axios from "axios";
import { toast } from "react-hot-toast";
import Myshopdata from "./Myshopdata";
import "../style/Myroomdata.css";
import Aprovelshopdata from "./Aprovelshopdata";
const Aprovelshop = () => {
  const { Setrefresh, refresh } = useContext(Context);
  const [myroom, setMyroom] = useState([]);

  const mydata = async () => {
    await axios
      .get(`${server}/shop/all`, {
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

  return (
    <>
      <div className="back">
        <h5 className="choice text text-dark text-center">Shop Approvel</h5>
        <div className="container-fluid">
          <div className="row">
            {myroom &&
              myroom.map((i) => {
                return (
                  <>
                    <Aprovelshopdata
                      city={i.city}
                      rent={i.rent}
                      address={i.address}
                      mobile={i.mobile}
                      area={i.area}
                      nearby={i.nearby}
                      size={i.size}
                      image={i.image}
                      image2={i.image2}
                      id={i._id}
                      status={i.status ? "ON" : "OFF"}
                      isApproved={i.isApproved}
                      date={i.date}
                      shopid={i.shopid}
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

export default Aprovelshop;
