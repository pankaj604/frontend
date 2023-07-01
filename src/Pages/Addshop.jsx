import axios from "axios";
import React, { useState } from "react";
import { server } from "..";
import { toast } from "react-hot-toast";

const Addshop = () => {
  const [size, setSize] = useState("");
  const [area, setArea] = useState("");
  const [nearby, setNearby] = useState("");
  const [rent, setRent] = useState("");
  const [mobile, setMobile] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [address, setAddress] = useState("");
  const [button, setbutton] = useState(false);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleSubmit = async (e) => {
    const selectBox = document.getElementById("option");
    const citydata = selectBox.value;

    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("city", citydata);
    formData.append("size", size);
    formData.append("area", area);
    formData.append("nearby", nearby);
    formData.append("rent", rent);
    formData.append("mobile", mobile);
    formData.append("address", address);

    e.preventDefault();
    try {
      setbutton(true)
      const { data } = await axios.post(`${server}/shop/addshop`, formData, {
        withCredentials: true,
      });

      toast.success(data.message);
      setbutton(false)
    } catch (error) {
      setbutton(false);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div>
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
              value={nearby}
              onChange={(e) => setNearby(e.target.value)}
            />
            <label>Nearby</label>
          </div>
          <div class="user-box">
            <input
              type="text"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
            <label>Area</label>
          </div>
          <div class="user-box">
            <input
              type="text"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            />
            <label>Size</label>
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
              <input type="file" onChange={handleFileChange} />
            </a>
          </div>
          <a>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <button disabled={button} type="submit">Submit</button>
          </a>
        </form>
      </div>
    </div>
  );
};

export default Addshop;
