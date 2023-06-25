import React, { useContext, useEffect, useState } from "react";
import Login from "../auth/Login";
import Logout from "../auth/Logout";
import Addroom from "./Addroom";
import { Link } from "react-router-dom";
import "../style/Header.css";
import { Context } from "..";
const Header = () => {
  const { city, setCity } = useContext(Context);

  useEffect(() => {
    const initialget = () => {
      const valu = document.getElementById("section");
      setCity(valu.value);
    };

    initialget();
  }, []);

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setCity(selectedValue);
  };

  console.log(city);

  return (
    <div className="header">
      <div className="admin">
        <Link className="a" to={"/login"}>
          add your rooms
        </Link>
      </div>
      <div className="navHead">
        <nav className="wel">
          <select
            id="section"
            onChange={handleSelectChange}
            defaultValue="indore"
          >
            <option value="indore">indore</option>
            <option value="bhopal">bhopal</option>
            <option value="mumbai">mumbai</option>
          </select>

          <br />
          <br />
          <br />
          <h1>Welcome To HSRooms</h1>
        </nav>
      </div>

      <div class="navMenu">
        <nav>
          <h1>
            <Link className="a" to={"/boys"}>
              Boys
            </Link>
          </h1>
          <h1>
            <Link className="a" to={"/girls"}>
              Girls
            </Link>
          </h1>
          <h1>
            {" "}
            <Link className="a" to={"/pg"}>
              PG for girls
            </Link>
          </h1>
          <h1>
            {" "}
            <Link className="a" to={"/hostel"}>
              Hostels for girls
            </Link>
            <Link className="a" to={"/couple"}>
              Rooms For Couple
            </Link>
            <Link className="a" to={"/shop"}>
              Shops/Offices
            </Link>
          </h1>
        </nav>
      </div>
    </div>
  );
};

export default Header;
