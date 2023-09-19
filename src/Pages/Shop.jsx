import React, { useContext, useEffect, useState } from "react";
import { Context, server } from "..";
import axios from "axios";
import { toast } from "react-hot-toast";
import Shopdata from "./Shopdata";
import { Helmet } from "react-helmet";
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
      <Helmet>
        
        <title>Shop</title>
        <meta
          name="description"
          content="we are providing rooms flats hostels shops free without brokerage "
        />
        <meta
          name="keywords"
          content=" rooms in indore , free ,room , hostel , pg , shops , shops in indore , room for boys , room for girls , hostel for boys , hostel for girls , pg for boys , pg for girls , shops free  , no brokerage , without brokerage , wellroom wellroom.in , wellroom , achha room , best room , free room , room for student   "
        />
        <meta name="theme-color" content="#E6E6FA" />
        <link rel="canonical" href="https://www.wellroom.in/shop" />
        <meta name="theme-color" content="#E6E6FA" />
        <meta property="og:site_name" content="https://www.wellroom.in" />
        <meta property="og:type" content="article" />

        <meta
          property="og:title"
          content="Home - Wellroom , room  without brokerage"
        />
        <meta
          property="og:description"
          content=" we are providing rooms flats hostels shops free without brokerage , Find all room`s pg hostels and shop or offices free without charge and brokerage "
        />
        <meta property="og:url" content="https://www.wellroom.in" />
        <meta name="twitter:title" content="Home - wellroom free brokerage" />
        <meta
          name="twitter:description"
          content=" we are providing rooms flats hostels shops free without brokerage , Find all room`s pg hostels and shop or offices free without charge and brokerage|"
        />
        <meta name="twitter:site" content="https://www.wellroom.in" />
        <meta name="twitter:label1" content="Written by" />

        <meta name="twitter:data1" content=" wellroom " />

        <meta name="author" content="https://www.wellroom.in" />
      </Helmet>
      <div className="back">
        <h5 className="boy my-1">
          Available shops/offices in{" "}
          {JSON.parse(window.localStorage.getItem("valu"))}
        </h5>
        <div className="container-fluid">
          <div className="row">
          {error && <h1>{error}</h1>}
          {loading && (
              <>
                <div className="text-center d-flex justify-content-center mt-5 align-items-center container-fluid">
                  <div className="spinner"></div>
                </div>
              </>
            )}
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
                    image2={i.image2}
                    date={i.date}
                    shopid={i.shopid}
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
