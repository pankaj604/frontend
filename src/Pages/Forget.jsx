import React, { useState } from "react";
import axios from "axios";
import { server } from "..";
import { Navigate } from "react-router-dom";
import "../style/Forget.css"
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
    <div className="main-f">
      <div className="container-f">
        <div>
          <h2>Forgot Password</h2>
          <form onSubmit={handleFormSubmit}>
            <input className="input-f"
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
            <button type="submit">Reset Password</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forget;
