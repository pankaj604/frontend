import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { Context, server } from "../index.js";
import toast from "react-hot-toast";
import "../style/login.css";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [error, seterror] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${server}/user/regester`,
        {
          name,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      toast.success(data.massage);
      setIsAuthenticated(true);
    } catch (error) {
      toast.error(error.response.data.massage);
      seterror(error.response.data.massage);
      setIsAuthenticated(false);
    }
  };

  if (isAuthenticated) return <Navigate to={"/login"} />;

  return (
    <div className="login-div">
      <div className="container-fluid d-flex justify-content-center  logo-landing">
        <div className=" row m-0 p-0  d-flex align-items-center justify-content-between">
          <div className=" d-inline logo-img  col-3 p-0  ">
            <img className="img-logo" src="https://res.cloudinary.com/dvgumv3vu/image/upload/v1697112055/android-chrome-512x512_oxsl2w.png" alt="" />
          </div>
          <div className="col p-0 ">
            {" "}
            <h5 className=" welcome-hs">WELCOME TO WELLROOM</h5>
          </div>
        </div>
      </div>
      <div>
      <h4 className=" nobroker  text-center p-2 m-0">No Brokerage</h4>
      </div>
      <div className="wrapper mt-3 ">
        <h4 className="text-center mt-1 name">Register with Email</h4>
        <form className="p-3 mt-3" onSubmit={submitHandler}>
          <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
              required
            />
          </div>
          <div className="form-field d-flex align-items-center">
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-field d-flex align-items-center">
            <input
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p>{error}</p>}
          <button className="btn mt-3" type="submit">
            Sign Up
          </button>
        </form>
        <div className="text-center fs-6">
          <Link to="/login">
          <h6 className=" p-1 text-primary"><span className="text-dark">already have account ?</span> Login Now</h6>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
