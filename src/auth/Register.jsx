import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { Context, server } from "../index.js";
import toast from "react-hot-toast";
import "../style/login.css"
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

      toast.success(data.message);
      setIsAuthenticated(true);
    } catch (error) {
      toast.error(error.response.data.message);
      seterror(error.response.data.message);
      setIsAuthenticated(false);
    }
  };

  if (isAuthenticated) return <Navigate to={"/login"} />;

  return (
    <div className="wrapper">
      <h4 className="wl-lgn wel-1">WelCome To HSrooms</h4>
      <h4 className="text-center mt-1 name">Register with Email</h4>
      <form  className="p-3 mt-3" onSubmit={submitHandler}>
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
        <button className="btn mt-3" type="submit">Sign Up</button>
      </form>
      <div className="text-center fs-6">
        <Link to="/login"><h5 className=" links p-1 ">Log In</h5></Link>
      </div>
    </div>
  );
};

export default Register;
