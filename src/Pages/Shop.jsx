import React, { useContext, useEffect, useState } from "react";
import { Context, server } from "..";
import axios from "axios";
import { toast } from "react-hot-toast";
import Shopdata from "./Shopdata";
import KeyboardReturnOutlinedIcon from "@mui/icons-material/KeyboardReturnOutlined";
import { Link } from "react-router-dom";

const Shop = () => {
  const [shops, setshops] = useState([]);
  const [loading , setloading] = useState(true);
  const [error, seterror] = useState("");
  const shop = async () => {
    await axios
      .get(
        `${server}/shop/${JSON.parse(window.localStorage.getItem("valu"))}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setshops(res.data.shops);
        setloading(false)
      })
      .catch((e) => {
        toast.error(e.response.data.message);
        seterror(e.response.data.message);
      });
  };
  useEffect(() => {
    shop();
  }, []);

  return (
    <>
      <div className="nav-main-cont d-flex flex-row justify-content-center mt-1  text text-center">
        <div className="m-0 p-1">
          <Link className="go-back text-decoration-none" to={"/header"}>
            Go Back To Home <KeyboardReturnOutlinedIcon />
          </Link>
        </div>
      </div>

      <div className="back">
        <h5 className="boy my-1">
          Available shops/offices in{" "}
          {JSON.parse(window.localStorage.getItem("valu"))}
        </h5>
        <div className="container-fluid">
          <div className="row">
          {error && <h1>{error}</h1>}
          {loading && <h1 className="text-center bg-dark text-light">Please Wait .. </h1>}
            { shops && shops.map((i) => {
              return (
                <>
                  <Shopdata
                    city={i.city}
                    rent={i.rent}
                    address={i.address}
                    mobile={i.mobile}
                    area={i.area}
                    nearby={i.nearby}
                    size={i.size}
                    image={i.image}
                    date={i.date}
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

export default Shop;
