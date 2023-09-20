import React, { useState } from "react";
import axios from "axios";
import { server } from "..";
import { Navigate } from "react-router-dom";
import "../style/login.css"
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
    formData.append("email", email);
    formData.append("otp", otp);
    formData.append("newPassword", newPassword);
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
    <div className="wrapper">
      <h4 className="wl-lgn text-dark">WelCome To WELLROOM</h4>

      <div className="text-center mt-1 name">Change Password</div>
      <form className="p-3 mt-3" onSubmit={handleFormSubmit}>
        <div className="form-field d-flex align-items-center">
          {" "}
          <input
            className="l-r"
            type="email"
            value={email}
            placeholder="Email "
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <input
            className="l-r"
            type="text"
            value={otp}
            placeholder="OTP"
            onChange={handleOtpChange}
            required
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <input
            className="l-r"
            type="password"
            placeholder="New PassWord"
            value={newPassword}
            onChange={handleNewPasswordChange}
            required
          />
        </div>
        <button className="btn mt-3" type="submit">
          Reset Password
        </button>
      
      </form>
    </div>
  );
};

export default Reset;
