import axios from "axios";
import React, { useState } from "react";
import { server } from "..";
import { toast } from "react-hot-toast";
import "../style/Addroom.css";
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
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
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
    <div className="container-fluid d-flex flex-column room">
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
          <div className="input-box seat-wid d-flex flex-column justify-content-center   text text-center">
            <div className="d-flex seat-wid  justify-content-center flex-row">
              <div class="user-bo seat-wid  m-1">
                <h5 className="d-flex">Available Seats</h5>

                <input
                  className="text text-center"
                  type="text"
                  value={availableseats}
                  onChange={(e) => setAvailableseats(e.target.value)}
                />
              </div>
              <div class="m-1 user-bo">
                <h5>Total Seats</h5>

                <input
                  className="text text-center"
                  type="text"
                  value={totalseats}
                  onChange={(e) => setTotalseats(e.target.value)}
                />
              </div>
            </div>
            <div className="d-flex seat-wid justify-content-center -flex-row">
              <div class="user-bo m-1">
                <h5>Gate time </h5>

                <input
                  className="text text-center"
                  type="text"
                  value={gatetime}
                  onChange={(e) => setGatetime(e.target.value)}
                />
              </div>
              <div class="user-bo m-1">
                <h5>Room Rent</h5>

                <input
                  className="text text-center"
                  type="text"
                  value={rent}
                  onChange={(e) => setRent(e.target.value)}
                />
              </div>
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
            <button
              disabled={
                button || (selectedFile && selectedFile.size > 2 * 1024 * 1024)
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

export default Addhostel;
