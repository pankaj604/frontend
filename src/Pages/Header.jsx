import React from "react";
import Login from "../auth/Login";
import Logout from "../auth/Logout";
import Addroom from "./Addroom";
import { Link } from "react-router-dom";
import "../style/Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="admin">
        <Link className="a" to={"/login"}>
          add your rooms
        </Link>
      </div>
      <div className="navHead">
        <nav className="wel">
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
              pg
            </Link>
          </h1>
          <h1>
            {" "}
            <Link className="a" to={"/hostle"}>
              Hostles
            </Link>
          </h1>
        </nav>
      </div>
    </div>
  );
};

export default Header;
