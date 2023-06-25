import React, { useContext, useEffect, useState } from 'react'
import { Context, server } from '..';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Myshopdata from './Myshopdata';
import Myhosteldata from './Myhosteldata';

const Myhostel = () => {

    const { Setrefresh, refresh } = useContext(Context);
    const [hostel, setMyhostel] = useState([]);
  
    const mydata = async () => {
      await axios
        .get(`${server}/hostel/myhostel`, {
          withCredentials: true,
        })
        .then((res) => {
          setMyhostel(res.data.hostel);
        })
        .catch((e) => {
          toast.error(e.response.data.message);
        });
    };
  
    useEffect(() => {
      mydata();
    }, [refresh]);


  console.log(hostel)

  return (
    <div>
    <div>
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
            />
          </>
        );
      })}
    </div>
  </div>
  )
}

export default Myhostel