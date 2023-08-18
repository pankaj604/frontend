import React, { useContext } from "react";
import { useState } from "react";
import axios from "axios";
import { server } from "..";
import { toast } from "react-hot-toast";
import "../style/Addroom.css";
import { Context } from "..";
import imageCompression from "browser-image-compression";
import { Navigate } from "react-router-dom";

const Addroom = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [rent, setRent] = useState("");
  const [mobile, setMobile] = useState("");
  const [food, setfood] = useState("");
  const [facilities, setfacilities] = useState("");
  const [size, setsize] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [button, setbutton] = useState(false);
  const [isAuthenticated, setisAuthenticated] = useState(false);

  //

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
  //

  const [address, setAddress] = useState("");
  // const { isAuthenticated, setIsAuthenticated } = useContext(Context);

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
    formData.append("food", food);
    e.preventDefault();
    try {
      setbutton(true);
 
      const { data } = await axios.post(`${server}/room/add`, formData, {
        withCredentials: true,
      });

      toast.success(data.massage);
      // setIsAuthenticated(true);
      setbutton(false);
      setisAuthenticated(true);
    } catch (error) {
      setbutton(false);
      toast.error(error.response.data.message);
      // setIsAuthenticated(false);
    }
  };
  if (isAuthenticated) return <Navigate to={"/login"} />;
  return (
    <div className="container-fluid d-flex flex-column ">
      <h4 className=" wel wel-1 text text-center mt-1 "> Add room</h4>{" "}
      <form onSubmit={handleSubmit}>
        <div className=" d-flex flex-column justify-content-center   text text-center">
          <div className="options d-flex justify-content-center  m-2 d-flex flex-row">
            <div className="container-option m-2">
              <h5 className="">Choose city</h5>

              <select className="" id="option" defaultValue="indore">
                <option value="indore">Indore</option>
                <option value="bhopal">Bhopal</option>
                <option value="mumbai">Mumbai 3</option>
              </select>
            </div>
            <div className="container-option m-2 ">
              <h5 className="">Choose Gender</h5>
              <select
                onChange={(e) => setSelectedOption(e.target.value)}
                id="for"
                defaultValue="everyone"
              >
                <option value="boys">Boys</option>
                <option value="girls">Girls</option>
                <option value="pggirls">PG girls</option>
                <option value="everyone">Everyone</option>
                <option value="pgboys">PG Boys</option>
              </select>
            </div>
          </div>
          <div className="input-box d-flex flex-column justify-content-center   text text-center">
            <div className="user-box  align-self-mid">
              <h5>Room Rent</h5>
              <input
                type="text"
                value={rent}
                onChange={(e) => setRent(e.target.value)}
                required
              />
            </div>

            <div className="user-box align-self-mid">
              <h5>Room Size</h5>
              <input
                type="text"
                value={size}
                onChange={(e) => setsize(e.target.value)}
                required
              />
            </div>
            <div className="user-box align-self-mid">
              <h5>Facilities</h5>
              <input
                type="text"
                value={facilities}
                onChange={(e) => setfacilities(e.target.value)}
                required
              />
            </div>
            <div className="user-box align-self-mid">
              <h5>Address</h5>
              <input
                className="address"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="user-box align-self-mid">
              <h5>Mobile</h5>
              <input
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </div>
            {selectedOption === "pggirls" ? (
              <div className="user-box align-self-mid">
                <h5>Food</h5>
                <input
                  type="text"
                  value={food}
                  onChange={(e) => setfood(e.target.value)}
                  required
                />
              </div>
            ) : (
              <></>
            )}
            {selectedOption === "pgboys" ? (
              <div className="user-box align-self-mid">
                <h5>Food</h5>
                <input
                  type="text"
                  value={food}
                  onChange={(e) => setfood(e.target.value)}
                  required
                />
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="input-box mt-2 d-flex flex-column justify-content-center   text text-center">
            <div>
              <input type="file" onChange={handleFileChange} />
            </div>
            {button ? <h5>Loading</h5> : <></>}
            <button className="mt-3" disabled={button} type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Addroom;
