import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Context, server } from "..";
import { toast } from "react-hot-toast";
import Myroomdata from "./Myroomdata";
import "../style/boys.css";
import Aproveldata from "./Aproveldata";
import { Link } from "react-router-dom";
const Aprovel = () => {
  const { Setrefresh, refresh } = useContext(Context);
  const [myroom, setMyroom] = useState([]);
  const [count, setcount] = useState("");
  const [coun, setcoun] = useState("");
  const [total, settotal] = useState("");

  const mydata = async () => {
    await axios
      .get(`${server}/room/all`, {
        withCredentials: true,
      })
      .then((res) => {
        setMyroom(res.data.rooms);
        settotal(res.data.total);
        setcount(res.data.count);
        setcoun(res.data.coun);
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
      <div className="back ">
        <h5 className="choice text-dark text text-center"> total Rooms {total}</h5>
        <h5 className="choice text-dark text text-center"> approval {count} </h5>
        <h5 className="choice text-dark text text-center"> not approval {coun} </h5>

        <div className="container  m-0 p-0 ">
          <div className="row">
            {myroom &&
              myroom.map((i) => {
                return (
                  <>
                    <Aproveldata
                      city={i.city}
                      rent={i.rent}
                      address={i.address}
                      mobile={i.mobile}
                      forr={i.forr}
                      status={i.status ? "ON" : "OFF"}
                      id={i._id}
                      key={i._id}
                      image={i.image}
                      size={i.size}
                      facilities={i.facilities}
                      isApproved={i.isApproved ? "ON" : "OFF"}
                      food={i.food}
                      date={i.date}
                      image2={i.image2}
                      roomid={i.roomid}
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

export default Aprovel;
