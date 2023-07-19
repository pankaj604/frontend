import React, { useContext, useEffect, useState } from "react";
import { Context, server } from "..";
import axios from "axios";
import { toast } from "react-hot-toast";
import Myshopdata from "./Myshopdata";
import Myhosteldata from "./Myhosteldata";
import "../style/Myroomdata.css";
const Myhostel = () => {
  const { Setrefresh, refresh } = useContext(Context);
  const [hostel, setMyhostel] = useState([]);
  const [count, setcount] = useState("");
  const [coun, setcoun] = useState("");
  const [total, settotal] = useState("");
  const mydata = async () => {
    await axios
      .get(`${server}/hostel/myhostel`, {
        withCredentials: true,
      })
      .then((res) => {
        setMyhostel(res.data.hostel);
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
      <h5 className="choice text text-center"> Your total hostals room {total}</h5>
        <h5 className="choice text text-center"> room available {count}</h5>
        <h5 className="choice text text-center"> not available {coun}</h5>
        <div className="container-fluid">
          <div className="row">
            {hostel.map((i) => {
              return (
                <>
                  <Myhosteldata
                    city={i.city}
                    rent={i.rent}
                    address={i.address}
                    mobile={i.mobile}
                    area={i.area}
                    nearby={i.nearby}
                    availableseats={i.availableseats}
                    totalseats={i.totalseats}
                    gatetime={i.gatetime}
                    facilites={i.facilites}
                    image={i.image}
                    id={i._id}
                    status={i.status ? "ON" : "OFF"}
                    key={i._id}
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

export default Myhostel;
