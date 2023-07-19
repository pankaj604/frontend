import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Context, server } from "..";
import { toast } from "react-hot-toast";
import Myroomdata from "./Myroomdata";
import "../style/boys.css";
const Myroom = () => {
  const { Setrefresh, refresh } = useContext(Context);
  const [myroom, setMyroom] = useState([]);
  const [count, setcount] = useState("");
  const [coun, setcoun] = useState("");
  const [total, settotal] = useState("");
  const mydata = async () => {
    await axios
      .get(`${server}/room/myrooms`, {
        withCredentials: true,
      })
      .then((res) => {
        setMyroom(res.data.room);
        settotal(res.data.total)
        setcount(res.data.count)
        setcoun(res.data.coun)
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
        <h5 className="choice text text-center"> Your total Rooms {total}</h5>
        <h5 className="choice text text-center">available {count}</h5>
        <h5 className="choice text text-center"> not available {coun}</h5>
        <div className="container-fluid">
          <div className="row">
            {myroom.map((i) => {
              return (
                <>
                  <Myroomdata
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
                    isApproved={i.isApproved}
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

export default Myroom;
