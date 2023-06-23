import React, { useState } from "react";
import axios from "axios";
import { server } from "..";
import { Navigate } from "react-router-dom";
import "../style/Reset.css";
const Reset = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [value, setvalue] = useState(false);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email" , email)
    formData.append("otp" , otp)
    formData.append("newPassword" , newPassword)
    try {
      await axios.post(`${server}/user/reset`, formData, {
        withCredentials: true,
      });
      alert("Password reset successful");
      // Redirect or perform any other desired actions after successful password reset
      setvalue(true);
    } catch (error) {
      
      console.log(error);
      // Handle error and display appropriate messages to the user
    }
  };
  if (value) return <Navigate to={"/login"} />;
  return (
    <div className="main-r">
      <div className="cont-r">
        <form className="form-r" onSubmit={handleFormSubmit}>
          <h1 className="h-r">Email:</h1>
          <input
            className="l-r"
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />

          <br />

          <h1 className="h-r"> OTP:</h1>
          <input
            className="l-r"
            type="text"
            value={otp}
            onChange={handleOtpChange}
            required
          />

          <br />

          <h1 className="h-r">New Password</h1>
          <input
            className="l-r"
            type="password"
            value={newPassword}
            onChange={handleNewPasswordChange}
            required
          />

          <br />
          <button type="submit">Reset Password</button>
          <br />
        </form>
      </div>
    </div>
  );
};

export default Reset;
