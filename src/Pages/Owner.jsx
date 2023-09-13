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



  useEffect(() => {
    //Runs only on the first render
    //  useEffect(() => {
    window.scrollTo(0, 0);
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
        <div className="  m-0 p-0  d-flex align-items-center ">
          <div className=" d-inline logo-img text-center m-0 p-0  ">
            <img className="img-logo" src="https://res.cloudinary.com/dvgumv3vu/image/upload/v1694497611/done_dindh1.png" alt="" />
          </div>
          <div className=" p-0 ">
            {" "}
            <h4 className="welcome-hs">WELCOME TO WELLROOM</h4>
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

        {user && user.role === "admin" ? (
          <>
            <div className="admin d-flex flex-row justify-content-center text-light mt-2  text text-center">
              <div className="myroom  m-3">
                <Link className="choice" to={"/admin/room-aprovel"}>
                  Room Aprovel
                </Link>
              </div>
              <div className="myroom m-3 ">
                <Link className="choice" to={"/admin/shop-aprovel"}>
                  Shop Aprovel
                </Link>
              </div>
              <div className="myroom m-3">
                <Link className="choice" to={"/admin/hostel-aprovel"}>
                  Hostel Aproval
                </Link>
              </div>
            </div>
            <div className="admin d-flex flex-row justify-content-center text-light mt-2  text text-center">
              <div className="myroom m-3">
                <Link className="choice" to={"/admin/managment/rooms"}>
                 Room Manager
                </Link>
              </div>
              <div className="myroom m-3">
                <Link className="choice" to={"/admin/managment/hostels"}>
                  Hostel Manager
                </Link>
              </div>
              <div className="myroom m-3">
                <Link className="choice" to={"/admin/managment/shops"}>
                  Shop Manager
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div> </div>
        )}

        <div className="container banner-3 p-3 my-3">
          <h4 className="owner-lines text-center"> Rooms Management </h4>
          <h4 className="easy text-center">आसानी से पाए किरायेदार </h4>

          <h4 className="d-inline mx-1 text-center ">
            यहाँ केवल रूम और फ्लैट्स जोड़े{" "}
          </h4>
          <br />
          <div className="d-flex">
            <Link
              className="btn text text-center register-btn pt-2 w-50 mt-2 m-2 "
              to={"/addroom"}
            >
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
            <Link
              className="btn register-btn w-50 pt-2 mt-2 m-2"
              to={"/addhostel"}
            >
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
