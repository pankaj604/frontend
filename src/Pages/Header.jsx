import React from "react";
import Login from "../auth/Login";
import Logout from "../auth/Logout";
import Addroom from "./Addroom";
import { Link } from "react-router-dom";
import "../style/Header.css"
const Header = () => {
  return (
    <div className="header">
     
      <nav class="navMenu">
        {/* <Link to={"/login"}>Login</Link> */}
        {/* <Link to={"/profile"}>your profile</Link> */}
        {/* <Link to={"/Register"} >register</Link> */}
        <Link className="a" to={"/addroom"}>addroom </Link>
        <Link className="a" to={"/admin"}>all rooms</Link>
        <Link className="a" to={"/logout"}>Logout</Link>
        <Link className="a" to={"/home"}>profile</Link>
        <Link className="a" to={"/boys"}>Boys</Link>
        <Link className="a" to={"/girls"}>Girls</Link>
        <Link className="a" to={"/pg"}>pg</Link>
        <Link className="a" to={"/hostle"}>Hostles</Link>
        <Link className="a" to={"/myroom"}>MYrooms</Link>
        <Link></Link>
      </nav>
    </div>
  );
};

export default Header;
