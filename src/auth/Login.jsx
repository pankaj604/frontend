import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, Navigate } from "react-router-dom";
import { Context, server } from "../index.js";
import { useEffect } from "react";
import "../style/login.css";
const Login = () => {
  
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `${server}/user/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
          credentials: "include",
        }
      );

      toast.success(data.message);
      setIsAuthenticated(true);
    } catch (error) {
      seterror(error.response.data.message);
      toast.error(error.response.data.message);
      setIsAuthenticated(false);
    }
  };
  // const { setUser, setIsAuthenticated, setLoading } = useContext(Context);

  if (isAuthenticated) return <Navigate to={"/owner"} />;
  return (
    <div className="wrapper">
      <h4 className="wl-lgn">WelCome To HSrooms</h4>

      <div className="text-center mt-1 name">Login</div>

      <form className="p-3 mt-3" onSubmit={submitHandler}>
        <div className="form-field d-flex align-items-center">
          <span className="far fa-user"></span>
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
          <input
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn mt-3" type="submit">
          Login
        </button>
      </form>

      <div className="text-center fs-6">
        <Link to="/register">
          <h5>Sign Up</h5>
        </Link>
        <br />
        <Link to="/forget">
          <h5>Forget Password</h5>
        </Link>
      </div>
    </div>
  );
};

export default Login;

