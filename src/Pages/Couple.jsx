import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { server } from '..';
import { toast } from 'react-hot-toast';
import Coupledata from './Coupledata';

const Couple = () => {

    const [couple, setcouple] = useState([]);
    const both = async () => {
      await axios
        .get(`${server}/room/everyone`, {
          withCredentials: true,
        })
        .then((res) => {
            setcouple(res.data.rooms);
        })
        .catch((e) => {
          toast.error(e.response.data.message);
        });
    };
    useEffect(() => {
      both();
    }, []);

  return (
    <div>
      <h1 className="boys-head">Available Rooms For Couple</h1>

      {couple.map((i) => {
        return (
          <>
            <Coupledata
              city={i.city}
              rent={i.rent}
              address={i.address}
              mobile={i.mobile}
              image={i.image}
            />
            ;
          </>
        );
      })}
    </div>
  )
}

export default Couple