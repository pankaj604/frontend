import React, { useContext, useEffect, useState } from "react";
import { Context, server } from "..";
import axios from "axios";
import { toast } from "react-hot-toast";
import Myshopdata from "./Myshopdata";
import "../style/Myroomdata.css";
import KeyboardReturnOutlinedIcon from "@mui/icons-material/KeyboardReturnOutlined";
import { Link } from "react-router-dom";

const MyShop = () => {
  const { Setrefresh, refresh } = useContext(Context);
  const [myroom, setMyroom] = useState([]);

  const mydata = async () => {
    await axios
      .get(`${server}/shop/my`, {
        withCredentials: true,
      })
      .then((res) => {
        setMyroom(res.data.shop);
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
        <h5 className="choice text text-center"> Your Shop/Office</h5>
        <div className="container-fluid">
          <div className="row">
            {myroom.map((i) => {
              return (
                <>
                  <Myshopdata
                    city={i.city}
                    rent={i.rent}
                    address={i.address}
                    mobile={i.mobile}
                    area={i.area}
                    nearby={i.nearby}
                    size={i.size}
                    image={i.image}
                    id={i._id}
                    status={i.status ? "ON" : "OFF"}
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

export default MyShop;
