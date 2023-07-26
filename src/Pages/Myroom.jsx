import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Context, server } from "..";
import { toast } from "react-hot-toast";
import Myroomdata from "./Myroomdata";
import "../style/boys.css";
import { Link } from "react-router-dom";
import KeyboardReturnOutlinedIcon from "@mui/icons-material/KeyboardReturnOutlined";

const Myroom = () => {
  const { Setrefresh, refresh } = useContext(Context);
  const [myroom, setMyroom] = useState([]);
  const [count, setcount] = useState("");
  const [coun, setcoun] = useState("");
  const [total, settotal] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const mydata = async () => {
    await axios
      .get(`${server}/room/myrooms`, {
        withCredentials: true,
      })
      .then((res) => {
        setMyroom(res.data.room);
        settotal(res.data.total);
        setcount(res.data.count);
        setcoun(res.data.coun);
      })
      .catch((e) => {
        toast.error(e.response.data.message);
      });
  };

  useEffect(() => {
    mydata();
  }, [refresh]);

  return (
    <>
      <div className="nav-main-cont d-flex flex-row justify-content-center mt-1  text text-center">
        <div className="m-0 p-1">
          <Link className="go-back text-decoration-none" to={"/owner"}>
            Go Back To Home <KeyboardReturnOutlinedIcon />
          </Link>
        </div>
      </div>
      <div className="back">
        <div className="detail p-1">
          <h6 className="choice text text-center">
            {" "}
            Your Total Rooms - {total}
          </h6>
          <h6 className=" choice text text-center">
            Available - {count} || Not Available - {coun}
          </h6>
        </div>
        <div className="container-fluid">
          <div className="row">
            {myroom.map((i) => {
              return (
                <>
                  <Myroomdata
                    city={i.city}
                    rent={i.rent}
                    address={i.address}
                    mobile={i.mobile}
                    forr={i.forr}
                    status={i.status ? "ON" : "OFF"}
                    id={i._id}
                    key={i._id}
                    image={i.image}
                    size={i.size}
                    facilities={i.facilities}
                    isApproved={i.isApproved}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Myroom;
