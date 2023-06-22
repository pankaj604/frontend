import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { server } from '..';
import { toast } from 'react-hot-toast';
import Hosteldata from './Hosteldata';

const Hostel = () => {
    const [hostles, setHostles] = useState([]);
    const hostle = async () => {
      await axios
        .get(`${server}/room/hostles`, {
          withCredentials: true,
        })
        .then((res) => {
          setHostles(res.data.rooms);
        })
        .catch((e) => {
          toast.error(e.response.data.message);
        });
    };
    useEffect(() => {
      hostle();
    }, []);
  return (
    <div>
    <h1>Available rooms at hostles</h1>

    {hostles.map((i) => {
      return (
        <>
          <Hosteldata
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

export default Hostel