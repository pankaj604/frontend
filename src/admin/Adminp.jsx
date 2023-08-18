import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import axios from "axios";
import { server } from "../index.js";
import { toast } from "react-hot-toast";
const Admin = () => {
  const [users, setUsers] = useState([]);
  const all = async () => {
    await axios
      .get(`${server}/room/all`, {
        withCredentials: true,
      })
      .then((res) => {
        setUsers(res.data.rooms);
      })
      .catch((e) => {
        toast.error(e.response.data.message);
      });
  };
  useEffect(() => {
    all();
  }, []);
  return (
    <div>
      <h1 className="all-room-head">hello admin pankaj all rooms are</h1>
      {users.map((i) => {
       
        return (
          <>
            <Dashboard
              city={i.city}
              rent={i.rent}
              forr={i.forr}
              address={i.address}
              mobile={i.mobile}
              status={i.status ? "true" : "False"}
              key = {i._id}
              id = {i._id}
              image={i.image}
            />
          </>
        );
      })}
    </div>
  );
};

export default Admin;
