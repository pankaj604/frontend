// components/UserList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { server } from "..";
import { useParams } from "react-router-dom";
import "./Manafger.css";
function Manager() {
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  console.log(id);
  useEffect(() => {
    axios
      .post(
        `${server}/user/userdata`,
        { id },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="manager ">
      <h1 className="userdata-head text-center ">Users With Total {id}</h1>
      <ul className="ul-user">
        {users.map((user) => (
          <>
            <li className="li-user" key={user._id}>
              <p>Username: {user?.name}</p>
              <p>Email: {user.email}</p>
              <p>
                Total {id} : <p className="d-inline total">{user.roomCount}</p> 
              </p>
              <p className="bg-dark"> dark</p>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default Manager;
