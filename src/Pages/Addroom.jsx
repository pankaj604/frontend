import React, { useContext } from "react";
import { useState } from "react";

import axios from "axios";
import { server } from "..";
import { toast } from "react-hot-toast";
import "../style/Addroom.css";
import { Context } from "..";
import imageCompression from "browser-image-compression";
const Addroom = () => {
  const [rent, setRent] = useState("");
  const [mobile, setMobile] = useState("");
  const [facilities, setfacilities] = useState("");
  const [size, setsize] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [button, setbutton] = useState(false);

  //

  const handleFileChange = async (e) => {
    const imageFile = e.target.files[0];

    const options = {
      maxSizeMB: 1,
      
    };
    try {
      const compressedFile = await imageCompression(imageFile, options);
      setSelectedFile(compressedFile);
      console.log(compressedFile.size/1024/1024);
    } catch (error) {
      console.log(error);
    }
  };
  //

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
    formData.append("facilities", facilities);
    formData.append("size", size);
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
      setbutton(false);
      toast.error(error.response.data.message);
      setIsAuthenticated(false);
    }
  };
  return (
    <div className="container-fluid d-flex flex-column room">
      <h4 className="wel-1 wel text text-center mt-1 ">HS rooms Add room</h4>{" "}
      <form onSubmit={handleSubmit}>
        <div className="container d-flex flex-column justify-content-center   text text-center">
          <div className="options d-flex justify-content-center  m-2 d-flex flex-row">
            <div className="container-option m-2">
              <h5 className="city-option choice">Choose city</h5>

              <select className="choice" id="option" defaultValue="indore">
                <option value="indore">Indore</option>
                <option value="bhopal">Bhopal</option>
                <option value="mumbai">Mumbai 3</option>
              </select>
            </div>
            <div class="container-option m-2 ">
              <h5 className="city-option">Choose Gender</h5>

              <select className="choice" id="for" defaultValue="everyone">
                <option value="boys">Boys</option>
                <option value="girls">Girls</option>
                <option value="pg">PG girls</option>
                <option value="everyone">Everyone</option>
              </select>
            </div>
          </div>
          <div className="input-box d-flex flex-column justify-content-center   text text-center">
            <div class="user-box  align-self-mid">
              <h5>Room Rent</h5>
              <input
                type="text"
                value={rent}
                onChange={(e) => setRent(e.target.value)}
              />
            </div>
            <div class="user-box align-self-mid">
              <h5>Room Size</h5>
              <input
                type="text"
                value={size}
                onChange={(e) => setsize(e.target.value)}
              />
            </div>
            <div class="user-box align-self-mid">
              <h5>Facilities</h5>
              <input
                type="text"
                value={facilities}
                onChange={(e) => setfacilities(e.target.value)}
              />
            </div>
            <div class="user-box align-self-mid">
              <h5>Address</h5>
              <input
                className="address"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div class="user-box align-self-mid">
              <h5>Mobile</h5>
              <input
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <div>
              {selectedFile && selectedFile.size > 2 * 1024 * 1024 && (
                <>
                  <h4>photo size should be less than 2 mb</h4>
                </>
              )}
            </div>
          </div>
          <div className="input-box mt-2 d-flex flex-column justify-content-center   text text-center">
            <div>
              <input type="file" onChange={handleFileChange} />
            </div>

            <button
              className="mt-3"
              disabled={
                button
              }
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Addroom;
