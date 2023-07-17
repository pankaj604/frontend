import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Context, server } from "..";
import { toast } from "react-hot-toast";
import Myroomdata from "./Myroomdata";
import "../style/boys.css";
import Aproveldata from "./Aproveldata";
const Aprovel = () => {
  const { Setrefresh, refresh } = useContext(Context);
  const [myroom, setMyroom] = useState([]);
  
  const mydata = async () => {
    await axios
      .get(`${server}/room/all`, {
        withCredentials: true,
      })
      .then((res) => {
        setMyroom(res.data.rooms);
       
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
        <h5 className="choice text text-center"> Your Rooms</h5>
        <div className="container-fluid">
          <div className="row">
            { myroom &&  myroom.map((i) => {
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
