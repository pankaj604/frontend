import React, { useState } from "react";
import axios from "axios";
import { server } from "..";
import { Navigate } from "react-router-dom";
import "../style/login.css"
const Forget = () => {
  const [email, setEmail] = useState("");
  const [value, setvalue] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${server}/user/forget`, { email });
      alert("OTP sent on your email");
      setEmail("");
      setvalue(true);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  if (value) return <Navigate to={"/reset"} />;

  return (
    <div className="wrapper">
      <h4 className="wl-lgn">WelCome To WELLROOM</h4>

      <div className="text-center mt-1 name">Reset Password</div>
      <form className="p-3 mt-3" onSubmit={handleFormSubmit}>
        <div className="form-field d-flex align-items-center">
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <button className="btn mt-3" type="submit">
          Send OTP
        </button>
      </form>
    </div>
  );
};

export default Forget;
