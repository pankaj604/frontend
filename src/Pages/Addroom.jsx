import React, { useContext } from "react";
import { useState } from "react";
import { Context } from "..";
import axios from "axios";
import { server } from "..";
import { toast } from "react-hot-toast";
import "../style/Addroom.css";
const Addroom = () => {
  const [rent, setRent] = useState("");
  const [mobile, setMobile] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [button, setbutton] = useState(false);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const [address, setAddress] = useState("");
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const handleSubmit = async (e) => {
    const selectBox = document.getElementById("option");
    const citydata = selectBox.value;
    const gender = document.getElementById("for");
    const value = gender.value;
    const formData = new FormData();

    // Append the selected file and article content to the FormData object
    formData.append("image", selectedFile);
    formData.append("city", citydata);
    formData.append("rent", rent);
    formData.append("forr", value);
    formData.append("mobile", mobile);
    formData.append("address", address);
    e.preventDefault();
    try {
      setbutton(true);
      const { data } = await axios.post(`${server}/room/add`, formData, {
        withCredentials: true,
      });

      toast.success(data.message);
      setIsAuthenticated(true);
      setbutton(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(false);
    }
  };
  return (
    <div class="login-box">
      {" "}
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <div className="container-option">
            <div class="user-box select">
              <label className="city-option">Choose city</label>
              <a className="option-city">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <select id="option" defaultValue="indore">
                  <option value="indore">Indore</option>
                  <option value="bhopal">Bhopal</option>
                  <option value="mumbai">Mumbai 3</option>
                </select>
              </a>
            </div>
            <div class="user-box">
              <label className="city-option">Choose Gender</label>
              <a>
                <select id="for" defaultValue="everyone">
                  <option value="boys">Boys</option>
                  <option value="girls">Girls</option>
                  <option value="pg">PG girls</option>
                  <option value="everyone">Everyone</option>
                  <option value="hostles">Girls Hostel</option>
                </select>
              </a>
            </div>
          </div>
        </div>
        <div class="user-box">
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <label>Address</label>
        </div>
        <div class="user-box">
          <input
            type="text"
            value={rent}
            onChange={(e) => setRent(e.target.value)}
          />
          <label>Room Rent</label>
        </div>
        <div class="user-box">
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <label>Mobile</label>
        </div>
        <div>
          <a>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <input type="file" onChange={handleFileChange} />
          </a>
        </div>
        <a>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <button disabled={button} type="submit">
            Submit
          </button>
        </a>
      </form>
    </div>
  );
};

export default Addroom;
