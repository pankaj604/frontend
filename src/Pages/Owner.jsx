import React, { useContext } from "react";
import Addroom from "./Addroom";
import { Link, Navigate } from "react-router-dom";
import "../style/Owner.css";
import axios from "axios";
import { Context, server } from "..";
import { toast } from "react-hot-toast";
const Owner = () => {
  const { setUser, isAuthenticated, setIsAuthenticated, setLoading } =
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
  if(!isAuthenticated) return <Navigate to={"/header"}/>
  return (
    <div className="main-box">
      {" "}
      <div className="owner-box">
        <div className="owner">
          <div className="add">
            <Link to={"/addroom"}>AddNewRoom</Link>
          </div>
          <div className="add">
            <Link to={"/addshop"}>Add New Shop/Office</Link>
          </div>
          <div className="add">
            <Link to={"/addhostel"}>Add New Hostle</Link>
          </div>
          <div className="myroom">
            <Link to={"/myroom"}>Your Rooms</Link>
          </div>
          <div className="myroom">
            <Link to={"/myshop"}>Your shop/office</Link>
          </div>
          <div className="myroom">
            <Link to={"/myhostel"}>Your hostels</Link>
          </div>
          <div className="myroom">
            <Link to={"/home"}>Your profile</Link>
          </div>
          <div className="myroom">
            <Link to={"/header"}>Home</Link>
          </div>
          <div className="myroom">
            <Link onClick={logoutHandler}>Logout</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Owner;
