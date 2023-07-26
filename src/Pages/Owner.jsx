import React, { useContext, useEffect } from "react";
import Addroom from "./Addroom";
import { Link, Navigate } from "react-router-dom";
import "../style/Owner.css";
import axios from "axios";
import { Context, server } from "..";
import { toast } from "react-hot-toast";
import "../style/Owner.css";
const Owner = () => {
  const role = false;

  const bio = () => {
    axios
      .get(`${server}/user/me`, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data.user);

        setIsAuthenticated(true);
      })
      .catch((error) => {
        setUser({});
        setIsAuthenticated(false);
      });
  };

  useEffect(() => {
    //Runs only on the first render
    bio();
  }, []);
  const { setUser, isAuthenticated, setIsAuthenticated, setLoading, user } =
    useContext(Context);

  const logoutHandler = async () => {
    try {
      await axios.get(`${server}/user/logout`, {
        withCredentials: true,
      });

      toast.success("Logged Out Successfully");
      setIsAuthenticated(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(true);
    }
  };
  if (!isAuthenticated) return <Navigate to={"/"} />;
  return (
    <>
      <div className="container-fluid d-flex justify-content-center  logo-landing">
        <div className=" row m-0 p-0  d-flex align-items-center justify-content-between">
          <div className=" d-inline logo-img  col-3 p-0  ">
            <img className="img-logo" src="android-chrome-512x512.png" alt="" />
          </div>
          <div className="col p-0 ">
            {" "}
            <h5 className=" welcome-hs">WelCome {user?.name}</h5>
          </div>
        </div>
      </div>

      <div></div>
      <div className="container d-flex flex-column  owner">
        <div className="owner-nav d-flex flex-row justify-content-center mt-1  text text-center">
          <div className="myroom m-3">
            <Link className="choice" to={"/"}>
              Home
            </Link>
          </div>
          <div className="myroom m-3 ">
            <Link className="choice " to={"/profile"}>
              Your profile
            </Link>
          </div>

          <div className="myroom m-3">
            <Link className="choice" onClick={logoutHandler}>
              Logout
            </Link>
          </div>
        </div>
        
        <div className="container banner-3 p-3 my-3">
          <h4 className="owner-lines text-center"> Rooms Management </h4>
          <h4 className="easy text-center">आसानी से पाए किरायेदार </h4>

          <h4 className="d-inline mx-1 text-center ">
            यहाँ केवल रूम और फ्लैट्स जोड़े{" "}
          </h4>
          <br />
          <div className="d-flex">
            <Link className="btn register-btn w-50 mt-2 m-2" to={"/addroom"}>
              Add Room
            </Link>
            <Link className="btn login-btn w-50 mt-2 m-2" to={"/myroom"}>
              Your Rooms
            </Link>
          </div>
        </div>
        <div className="container banner-3 p-3 my-3">
          <h4 className="owner-lines text-center"> Hostel Management </h4>
          <h4 className="easy text-center">आसानी से पाए किरायेदार </h4>

          <h4 className=" mx-1 text-center ">यहाँ केवल होस्टल्स जोड़े</h4>

          <div className="d-flex">
            <Link className="btn register-btn w-50 mt-2 m-2" to={"/addhostel"}>
              Add Hostel
            </Link>
            <Link className="btn login-btn w-50 mt-2 m-2" to={"/myhostel"}>
              Your Hostels
            </Link>
          </div>
        </div>
        <div className="container banner-3 p-3 my-3">
          <h4 className="owner-lines text-center"> Shop/Office Management </h4>
          <h4 className="easy text-center">आसानी से पाए किरायेदार </h4>

          <h4 className="d-inline mx-1 text-center ">
            यहाँ केवल दुकान और ऑफिस जोड़े{" "}
          </h4>
          <br />
          <div className="d-flex">
            <Link className="btn register-btn w-50 mt-2 m-2" to={"/addshop"}>
              Add Shop/Office
            </Link>
            <Link className="btn login-btn w-50 mt-2 m-2" to={"/myshop"}>
              Your Shop/Office
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Owner;
