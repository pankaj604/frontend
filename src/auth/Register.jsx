import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { Context, server } from "../index.js";
import toast from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

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
      setIsAuthenticated(false);
    }
  };

  if (isAuthenticated) return <Navigate to={"/login"} />;

  return (
    <div class="login-box">
      <h2>Register with your Email</h2>
      <form onSubmit={submitHandler}>
        <div class="user-box">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
            required
          />
          <label>Name</label>
        </div>
        <div class="user-box">
          <input
            type="email"
            placeholder="Email"
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
            placeholder="Password"
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
          <button type="submit">Sign Up</button>
        </a>
      

      </form>
      <div className="rlogin">
        <Link to="/login">Log In</Link>
      </div>
    </div>
  );
};

export default Register;
