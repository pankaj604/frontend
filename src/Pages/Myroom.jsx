import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Context, server } from "..";
import { toast } from "react-hot-toast";
import Myroomdata from "./Myroomdata";

const Myroom = () => {
  const { Setrefresh, refresh } = useContext(Context);
  const [myroom, setMyroom] = useState([]);

  const mydata = async () => {
    await axios
      .get(`${server}/room/myrooms`, {
        withCredentials: true,
      })
      .then((res) => {
        setMyroom(res.data.room);
      })
      .catch((e) => {
        toast.error(e.response.data.message);
      });
  };

  useEffect(() => {
    mydata();
  }, [refresh]);

  return (
    <div>
      {myroom.map((i) => {
        return (
          <>
            <div className="main-room-data">
              <div className="container">
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
                />
                ;
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Myroom;
