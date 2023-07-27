import React, { useContext, useEffect, useState } from "react";
import Login from "../auth/Login";
import Logout from "../auth/Logout";
import Addroom from "./Addroom";
import { Link } from "react-router-dom";
import "../style/Header.css";
import { Context, server } from "..";
import axios from "axios";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import KeyboardReturnOutlinedIcon from "@mui/icons-material/KeyboardReturnOutlined";

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
    window.scrollTo(0, 0);
    window.localStorage.setItem("valu", JSON.stringify(city));
  }, [city]);

  return (
    <>
      <div className="container-fluid d-flex justify-content-center  logo-landing">
        <div className=" row m-0 p-0  d-flex align-items-center justify-content-between">
          <div className=" d-inline logo-img  col-3 p-0  ">
            <img className="img-logo" src="android-chrome-512x512.png" alt="" />
          </div>
          <div className="col p-0 ">
            {" "}
            <h5 className=" welcome-hs">WelCome to HSROOMS</h5>
          </div>
        </div>
      </div>

      <div className="container head d-flex flex-column">
        <div className="container banner my-3 p-3 ">
          <h1 className="search-easy text-center">अपना शहर चुने..</h1>
          <div className="dropdown text text-center m-1 p-2 ">
            <select
              id="section"
              onChange={handleSelectChange}
              defaultValue={JSON.parse(window.localStorage.getItem("valu"))}
              className="city-choose"
            >
              <option value="indore">Indore</option>
              <option value="bhopal">bhopal</option>
              <option value="mumbai">mumbai</option>
            </select>
            <LocationOnOutlinedIcon />
          </div>
        </div>

        <h4 className=" nobroker  text-center p-3 ">No Brokerage</h4>

        <div className="container banner-2 p-3 my-3">
          <h2 className="text-center">रूम मिलेगा सबके लिए</h2>

          <div className="d-flex justify-content-around">
            <h4 className=" w-50 m-2">
              <Link
                className="btn w-100 text-dark bg-light text-decoration-none"
                to={"/boys"}
              >
                Boys
              </Link>
            </h4>
            <h4 className="w-50 m-2">
              <Link
                className="btn w-100  text-dark bg-light text-decoration-none"
                to={"/girls"}
              >
                Girls
              </Link>
            </h4>
          </div>
          <div className="d-flex justify-content-around">
            <h4 className="w-50 m-2">
              <Link
                className="btn w-100 text-dark bg-light text-decoration-none"
                to={"/pg"}
              >
                PG
              </Link>
            </h4>
            <h4 className="w-50 m-2">
              <Link
                className="btn w-100 text-dark bg-light text-decoration-none"
                to={"/couple"}
              >
                Couples
              </Link>
            </h4>
          </div>
        </div>

        {/* Hostels */}
        <div className="container banner-2 p-3 my-3">
          <h2 className="text-center">होस्टल भी मिलेगा सबके लिए</h2>

          <div className="d-flex justify-content-around">
            <h4 className=" w-50 m-2">
              <Link
                className="btn w-100 text-dark bg-light text-decoration-none"
                to={"/hostel/Boys"}
              >
                Boys Hostel
              </Link>
            </h4>
            <h4 className="w-50 m-2">
              <Link
                className="btn w-100  text-dark bg-light text-decoration-none"
                to={"/hostel/Girls"}
              >
                Girls Hostel
              </Link>
            </h4>
          </div>
        </div>

        <div className="container banner-2 p-3 my-3">
          <h2 className="text-center">दुकान और ऑफिस भी तो हैं भिया </h2>

          <div className="d-flex justify-content-around">
            <h4 className=" w-100 m-2">
              <Link
                className="btn w-100 text-dark bg-light text-decoration-none"
                to={"/shop"}
              >
                Shops/Offices
              </Link>
            </h4>
          </div>
        </div>
        <div className="nav-main-cont-header d-flex flex-row justify-content-center mt-1  text text-center">
          <div className="m-0 p-1">
            <Link className="go-back-header text-decoration-none" to={"/"}>
              Go Back To Home <KeyboardReturnOutlinedIcon />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
