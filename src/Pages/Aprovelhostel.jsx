import React, { useContext, useEffect, useState } from "react";
import { Context, server } from "..";
import axios from "axios";
import { toast } from "react-hot-toast";
import Myshopdata from "./Myshopdata";
import Myhosteldata from "./Myhosteldata";
import "../style/Myroomdata.css";
import Aprovelhosteldata from "./Aprovelhosteldata";
const Aprovelhostel = () => {
  const { Setrefresh, refresh } = useContext(Context);
  const [hostel, setMyhostel] = useState([]);
  const [count, setcount] = useState("");
  const [coun, setcoun] = useState("");
  const [total, settotal] = useState("");
  const mydata = async () => {
    await axios
      .get(`${server}/hostel/all`, {
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
        <h5 className="choice text-dark text-center"> Total Hostles {total}</h5>
        <h5 className="choice text-dark text-center"> Approved {count} </h5>
        <h5 className="choice text-dark text-center"> Not approved {coun} </h5>
        <div className="container-fluid">
          <div className="row">
            {hostel.map((i) => {
              return (
                <>
                  <Aprovelhosteldata
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
                    image2={i.image2}
                    id={i._id}
                    status={i.status ? "ON" : "OFF"}
                    isApproved={i.isApproved}
                    key={i._id}
                    date={i.date}
                    hostelid={i.hostelid}
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

export default Aprovelhostel;
