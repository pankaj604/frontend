import React, { useContext, useEffect, useState } from "react";
import Login from "../auth/Login";
import Logout from "../auth/Logout";
import Addroom from "./Addroom";
import { Link } from "react-router-dom";
import "../style/Header.css";
import { Context, server } from "..";
import axios from "axios";
const Header = (req, res) => {
  const { isAuthenticated, loading, user } = useContext(Context);
  const { setUser, setIsAuthenticated, setLoading } = useContext(Context);
  const [city, setCity] = useState("");
  const bio = () => {
    axios
      .get(`${server}/user/check`, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data.user);
        if (!res.data.user._id) {
          setIsAuthenticated(false);
        } else {
          setIsAuthenticated(true);
        }
      })
      .catch((error) => {
        setUser({});
        setIsAuthenticated(false);
      });
  };

  useEffect(() => {
    bio();
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
    <div className="container head d-flex flex-column">
      <div className=" m-1 mb-4 mt-3 p-1 wel-1 text text-center ">
        <h4 className="test ">WELCOME TO HSROOMS</h4>
      </div>
      <div className="welcome m-1 p-1  text text-center ">
        <h4 className="wel">Are You Looking For Rooms</h4>

        <h4 className="wel">Please Choose Your City</h4>
      </div>

      <div className="option  text text-center m-1 p-2 ">
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
      <div className="slog m-1 p-2  text text-center ">
        <h6>From Owner To Renter </h6>
        <h6>No Brokerage </h6>
      </div>
      <div className="FOR d-flex flex-row justify-content-around justify-content-xl-around text-center m-1 p-1  ">
        <h4 className="d-inline m-2">
          <Link className="choice underline " to={"/boys"}>
            For Boys
          </Link>
        </h4>
        <h4 className="d-inline m-2">
          <Link className="choice underline" to={"/girls"}>
           For  Girls
          </Link>
        </h4>
      </div>
      <div className="FOR d-flex flex-row justify-content-around  justify-content-xl-around text-center m-1 p-1 ">
        <h4 className="d-inline m-2">
          <Link className="choice underline" to={"/pg"}>
            PG For Girls
          </Link>
        </h4>
        <h4 className="d-inline m-2">
          <Link className="choice underline" to={"/hostel"}>
            Hostels For Girls
          </Link>
        </h4>
      </div>
      <div className="FOR d-flex flex-row justify-content-around  justify-content-xl-around text-center m-1 p-1 ">
        <h4 className="d-inline m-2">
          <Link className="choice underline" to={"/couple"}>
            Rooms For Couple
          </Link>
        </h4>
        <h4 className="d-inline  m-2">
          {" "}
          <Link className="choice underline " to={"/shop"}>
            Shops Or Offices
          </Link>
        </h4>
      </div>
      <div className=" align-self-end  m-2  add-room">
        <Link className="head-add p-1 text-decoration-none" to={"/login"}>
          Add your Rooms
        </Link>
      </div>
    </div>
  );
};

export default Header;
