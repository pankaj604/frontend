import React, { useContext, useEffect, useState } from "react";
import Login from "../auth/Login";
import Logout from "../auth/Logout";
import Addroom from "./Addroom";
import { Link } from "react-router-dom";
import "../style/Header.css";
import { Context } from "..";
const Header = () => {
  const [city, setCity] = useState("");

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
  useEffect(() => {
    window.localStorage.setItem("valu", JSON.stringify(city));
  }, [city]);

  return (
    <div className="body-home">
      <div className="add-room">
        <div className="admin">
          <Link className="a-add" to={"/login"}>
            add your rooms
          </Link>
        </div>
      </div>

      <div className="main-head">
        <div className="test">
          <div className="head-wel">
            <h1 className="h-test">Welcome To HSRooms</h1>
          </div>
          <div className="head-wel">
            <h1 className="h-test">Are You Looking For Rooms</h1>
          </div>
        </div>
      </div>
      <div className="city-cs">
        <div className="wel">
          <div className="text-c">
            <h2 className="pcyc">Please Choose Your City</h2>
          </div>
          <div>
            <select
              id="section"
              onChange={handleSelectChange}
              defaultValue={JSON.parse(window.localStorage.getItem("valu"))}
              className="option-c"
            >
              <option value="indore">Indore</option>
              <option value="bhopal">bhopal</option>
              <option value="mumbai">mumbai</option>
            </select>
          </div>
        </div>
      </div>
      <div className="room-type">
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
          <Link className="a" to={"/pg"}>
            PG for girls
          </Link>
        </h1>
        <h1>
          <Link className="a" to={"/hostel"}>
            Hostels for girls
          </Link>
        </h1>
        <h1>
          <Link className="a" to={"/couple"}>
            Rooms For Couple
          </Link>
        </h1>
        <h1>
          {" "}
          <Link className="a" to={"/shop"}>
            Shops/Offices
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Header;
