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
  if (!isAuthenticated) return <Navigate to={"/header"} />;
  return (
    <div className="container d-flex flex-column  owner">
      <div className=" wel-1 d-flex flex-row justify-content-center mb-1 mt-2  text text-center">
        <h4 className=" text wel text-center mt-1 ">WelCome {user?.name}</h4>
      </div>

      <div className="owner-nav d-flex flex-row justify-content-center  text text-center">
        <div className="myroom m-3">
          <Link className="choice" to={"/header"}>
            Home
          </Link>
        </div>
        <div className="myroom m-3 ">
          <Link className="choice" to={"/profile"}>
            Your profile
          </Link>
        </div>

        <div className="myroom m-3">
          <Link className="choice" onClick={logoutHandler}>
            Logout
          </Link>
        </div>
      </div>
      {user && user.role === 'admin'  ? (
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
      ) : (
        <div> </div>
      )}

      <div className=" help d-flex justify-content-center mt-2 flex-row text text-center">
        <div className="myroom m-2">
          <h6 className="choice" to={"/myroom"}>
            Call me for any help +919685290529
          </h6>
        </div>
      </div>
      <div className="add-rooms mt-2 d-flex flex-row justify-content-center text text-center">
        <div className="add m-2">
          <Link className="choice" to={"/addroom"}>
            Add New Room
          </Link>
        </div>
        <div className="add m-2">
          <Link className="choice" to={"/addshop"}>
            Add New Shop/Office
          </Link>
        </div>
        <div className="add m-2">
          <Link className="choice" to={"/addhostel"}>
            Add New Hostle
          </Link>
        </div>
      </div>

      <div className="add-rooms d-flex justify-content-center flex-row text text-center">
        <div className="myroom m-2">
          <Link className="choice" to={"/myroom"}>
            Your Rooms
          </Link>
        </div>
        <div className="myroom m-2">
          <Link className="choice" to={"/myshop"}>
            Your shop/office
          </Link>
        </div>
        <div className="myroom m-2">
          <Link className="choice" to={"/myhostel"}>
            Your hostels
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Owner;
