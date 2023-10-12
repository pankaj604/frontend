import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "..";
import { toast } from "react-hot-toast";
import "../style/Addroom.css";
import imageCompression from "browser-image-compression";
import { Navigate } from "react-router-dom";
const Addhostel = () => {
  const [button, setbutton] = useState(false);
  const [area, setArea] = useState("");
  const [nearby, setNearby] = useState("");
  const [rent, setRent] = useState("");
  const [hostelfor, sethostelfor] = useState("");
  const [mobile, setMobile] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFile2, setSelectedFile2] = useState(null);
  const [address, setAddress] = useState("");
  const [availableseats, setAvailableseats] = useState("");
  const [totalseats, setTotalseats] = useState("");
  const [gatetime, setGatetime] = useState("");
  const [facilites, setFacilites] = useState("");
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const handleFileChange = async (e) => {
    const imageFile = e.target.files[0];

    const options = {
      maxSizeMB: 1,
    };
    try {
      setbutton(true);
      const compressedFile = await imageCompression(imageFile, options);
      setSelectedFile(compressedFile);
      setbutton(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleFileChange2 = async (e) => {
    const imageFile = e.target.files[0];

    const options = {
      maxSizeMB: 1,
    };
    try {
      setbutton(true);
      const compressedFile = await imageCompression(imageFile, options);
      setSelectedFile2(compressedFile);
      setbutton(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (e) => {
    const selectBox = document.getElementById("option");
    const citydata = selectBox.value;
    const gender = document.getElementById("hostelfor");
    const value = gender.value;
  
    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("image2", selectedFile2);
    formData.append("city", citydata);
    formData.append("hostelfor", value);
    formData.append("rent", rent);
    formData.append("address", address);
    formData.append("area", area);
    formData.append("nearby", nearby);
    formData.append("mobile", mobile);
    formData.append("availableseats", availableseats);
    formData.append("totalseats", totalseats);
    formData.append("gatetime", gatetime);
    formData.append("facilites", facilites);

    e.preventDefault();
    try {
      setbutton(true);
      const { data } = await axios.post(`${server}/hostel/add`, formData, {
        withCredentials: true,
      });

      toast.success(data.massage);
      setbutton(false);
      setisAuthenticated(true);
    } catch (error) {
      setbutton(false);
      toast.error(error.response.data.massage);
    }
  };
  const initialget = () => {
    const valu = document.getElementById("hostelfor");

    sethostelfor(valu.value);
    
  };
  useEffect(() => {
    initialget();
  }, []);
  if (isAuthenticated) return <Navigate to={"/login"} />;

  return (
    <div className="container d-flex flex-column">
      <h4 className="wel-1 wel text text-center mt-1 ">Add Hostel</h4>{" "}
      <form onSubmit={handleSubmit}>
        <div className=" d-flex flex-column justify-content-center   text text-center">
          <div className="options d-flex justify-content-center  m-2 d-flex flex-row">
            <div className="container-option m-2">
              <h5 className="city-option text text-success choice">Choose city</h5>

              <select id="option" defaultValue="indore">
                <option value="indore">Indore</option>
                <option value="bhopal">Bhopal</option>
                <option value="mumbai">Mumbai </option>
              </select>
            </div>
            <div className="container-option text text-success m-2">
              <h5 className="city-option text text-success choice">Choose Any</h5>

              <select
                id="hostelfor"
                onChange={initialget}
                defaultValue="Girls"
              >
                <option value="Girls">Girls</option>
                <option value="Boys">Boys</option>
              </select>
            </div>
          </div>
          <div className="input-box  d-flex flex-column  align-items-center justify-content-center   text text-center">
            <div className="user-box">
              <h5>Hostel Name</h5>

              <input
                type="text"
                value={area}
                onChange={(e) => setArea(e.target.value)}
              />
            </div>
            <div className="user-box">
              <h5>Available Seats</h5>
              <input
                className="text text-center"
                type="text"
                value={availableseats}
                onChange={(e) => setAvailableseats(e.target.value)}
              />
            </div>
            <div className="user-box">
              <h5>Total Seats</h5>

              <input
                className="text text-center"
                type="text"
                value={totalseats}
                onChange={(e) => setTotalseats(e.target.value)}
              />
            </div>

            <div className="user-box">
              <h5>Gate time </h5>

              <input
                className="text text-center"
                type="text"
                value={gatetime}
                onChange={(e) => setGatetime(e.target.value)}
              />
            </div>
            <div className="user-box">
              <h5>Room Rent</h5>

              <input
                className="text text-center"
                type="text"
                value={rent}
                onChange={(e) => setRent(e.target.value)}
              />
            </div>

            <div className="user-box">
              <h5>Nearby</h5>
              <input
                type="text"
                value={nearby}
                onChange={(e) => setNearby(e.target.value)}
              />
            </div>

            <div className="user-box">
              <h5>facilities </h5>

              <input
                type="text"
                value={facilites}
                onChange={(e) => setFacilites(e.target.value)}
              />
            </div>

            <div className="user-box align-self-">
              <h5>Address</h5>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className="user-box">
              <h5>Mobile</h5>

              <input
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>

          </div>
          <div className="input-box mt-2 d-flex flex-column justify-content-center   text text-center">
            <div>
              <input type="file" onChange={handleFileChange} />
            </div>
            <div>
              <input type="file" onChange={handleFileChange2} />
            </div>
            {button ? <h5>Loading</h5> : <></>}
            <button disabled={button} type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Addhostel;
