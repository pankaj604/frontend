import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Context, server } from "..";
import { toast } from "react-hot-toast";
import Hosteldata from "./Hosteldata";

const Hostel = () => {
  const { city, setCity } = useContext(Context);
  console.log(`${city}`)
  const [hostels, setHostles] = useState([]);
  const hostel = async () => {
    await axios
      .get(`${server}/hostel/hostels/${city}`, {
        withCredentials: true,
      })
      .then((res) => {
        setHostles(res.data.hostels);
      })
      .catch((e) => {
        toast.error(e.response.data.message);
      });
  };
  useEffect(() => {
    hostel();
  }, []);
  console.log(hostels);
 
  return (
    <div>
      <h1 className="boys-head">Available rooms at hostles</h1>

      {hostels.map((i) => {
        return (
          <>
            <Hosteldata
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
               
                 status={i.status ? "ON" : "OFF"}
                 key={i._id}
              
            />
            ;
          </>
        );
      })}
    </div>
  );
};

export default Hostel;
