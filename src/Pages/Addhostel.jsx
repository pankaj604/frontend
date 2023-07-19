import axios from "axios";
import React, { useState } from "react";
import { server } from "..";
import { toast } from "react-hot-toast";
import "../style/Addroom.css";
import imageCompression from "browser-image-compression";
const Addhostel = () => {
  const [button, setbutton] = useState(false);
  const [area, setArea] = useState("");
  const [nearby, setNearby] = useState("");
  const [rent, setRent] = useState("");
  const [mobile, setMobile] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [address, setAddress] = useState("");
  const [availableseats, setAvailableseats] = useState("");
  const [totalseats, setTotalseats] = useState("");
  const [gatetime, setGatetime] = useState("");
  const [facilites, setFacilites] = useState("");
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
  const handleSubmit = async (e) => {
    const selectBox = document.getElementById("option");
    const citydata = selectBox.value;

    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("city", citydata);
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

      toast.success(data.message);
      setbutton(false);
    } catch (error) {
      setbutton(false);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="container  overflow-auto d-flex flex-column room">
      <h4 className="wel-1 wel text text-center mt-1 ">HS rooms Add Hostel</h4>{" "}
      <form onSubmit={handleSubmit}>
        <div className="container d-flex flex-column justify-content-center   text text-center">
          <div className="options d-flex justify-content-center  m-2 d-flex flex-row">
            <div className="container-option m-2">
              <h5 className="city-option choice">Choose city</h5>

              <select id="option" defaultValue="indore">
                <option value="indore">Indore</option>
                <option value="bhopal">Bhopal</option>
                <option value="mumbai">Mumbai 3</option>
              </select>
            </div>
          </div>
          <div className="input-box  d-flex flex-column align-items-center justify-content-center   text text-center">
            <div class="user-box">
              <h5>Available Seats</h5>
              <input
                className="text text-center"
                type="text"
                value={availableseats}
                onChange={(e) => setAvailableseats(e.target.value)}
              />
            </div>
            <div class="user-box">
              <h5>Total Seats</h5>

              <input
                className="text text-center"
                type="text"
                value={totalseats}
                onChange={(e) => setTotalseats(e.target.value)}
              />
            </div>

            <div class="user-box">
              <h5>Gate time </h5>

              <input
                className="text text-center"
                type="text"
                value={gatetime}
                onChange={(e) => setGatetime(e.target.value)}
              />
            </div>
            <div class="user-box">
              <h5>Room Rent</h5>

              <input
                className="text text-center"
                type="text"
                value={rent}
                onChange={(e) => setRent(e.target.value)}
              />
            </div>

            <div class="user-box">
              <h5>Nearby</h5>
              <input
                type="text"
                value={nearby}
                onChange={(e) => setNearby(e.target.value)}
              />
            </div>
            <div class="user-box">
              <h5>Area</h5>

              <input
                type="text"
                value={area}
                onChange={(e) => setArea(e.target.value)}
              />
            </div>

            <div class="user-box">
              <h5>facilities </h5>

              <input
                type="text"
                value={facilites}
                onChange={(e) => setFacilites(e.target.value)}
              />
            </div>

            <div class="user-box align-self-">
              <h5>Address</h5>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div class="user-box">
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
            {button ? <h6>image loading</h6> : <></>}
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
