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
      toast.error(error.response.data.message);
      setIsAuthenticated(false);
    }
  };
  // const { setUser, setIsAuthenticated, setLoading } = useContext(Context);

  if (isAuthenticated) return <Navigate to={"/owner"} />;
  return (
    <div class="login-box">
      <h2>Login</h2>
      <form onSubmit={submitHandler}>
        <div class="user-box">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Email</label>
        </div>
        <div class="user-box">
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>
        <a>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <button type="submit">Login</button>
        </a>
      </form>
      <div className="rlogin">
        <Link to="/register">Sign Up</Link>
      </div>
      <div className="rlogin">
        <Link to="/forget">forget password</Link>
      </div>
    </div>
  );
};

export default Login;
