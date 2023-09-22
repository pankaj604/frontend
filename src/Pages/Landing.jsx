import React, { useContext, useEffect } from "react";
import "../style/Landing.css";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Context } from "..";
function Landing() {
  const { isAuthenticated } = useContext(Context);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Wellroom - rooms without brokerage</title>
        <link rel="canonical" href="https://www.wellroom.in" />
        <meta
          name="description"
          content="we are providing rooms flats hostels shops free without brokerage , Find all room`s pg hostels and shop or offices free without charge and brokerage "
        />
        <meta
          name="keywords"
          content=" rooms in indore , free ,room , hostel , pg , shops , shops in indore , room for boys , room for girls , hostel for boys , hostel for girls , pg for boys , pg for girls , shops free  , no brokerage , without brokerage , wellroom wellroom.in , wellroom , achha room , best room , free room , room for student ,wellroom , well , room , rooms in indore , free ,room , hostel , pg , shops , shops in indore , room for boys , room for girls , hostel for boys , hostel for girls , pg for boys , pg for girls , shops free  , no brokerage , without brokerage , wellroom wellroom.in , wellroom , achha room , best room , free room , room for student   "
        />
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
      <div className="container-fluid d-flex justify-content-center p-0 logo-landing">
        <div className="  m-0 p-0  d-flex align-items-center ">
          <div className=" d-inline logo-img text-center m-0 p-0  ">
            <img
              className="img-logo"
              src="https://res.cloudinary.com/dvgumv3vu/image/upload/v1694497611/done_dindh1.png"
              alt="logo"
            />
          </div>
          <div className=" p-0 ">
            {" "}
            <h4 className="welcome-hs">WELCOME TO WELLROOM</h4>
          </div>
        </div>
      </div>
      <div className="Loading p-2 ">
        <h4 className=" nobroker  text-center p-2 m-0">No Brokerage</h4>
        <div className="container banner my-3 p-3 ">
          <h1 className="search-easy">रूम ढूँढना हुआ सबसे आसान...</h1>

          <h3>बिना किसी दलाली ( ब्रोकरी ) और परेशानी के </h3>
          <p>
            अब आपको कभी भी अपना कीमती समय गवा कर गली गली भटकने की जरुरत नहीं हे
            और नहीं अपना कीमती पैसा दलाली में बर्बाद करने की{" "}
          </p>
        </div>
        <div className="container banner-2 p-3 my-3">
          <h2>यहां मिलेगा सब आसानी से </h2>
          <h3 className="d-inline mx-1">
            Rooms - Hostels - PG - Flats - Shops & Offices{" "}
          </h3>
          <br />
          <div className="d-flex justify-content-end">
            <Link to={"/header"} className="btn w-50 mt-2 m-2 explore-btn">
              Explore Now
              <SearchIcon />
            </Link>
          </div>
        </div>
        <div className="container banner-3 p-3 my-3">
          <h4 className="owner-lines">
            {" "}
            क्या आप रूम, होस्टल्स, पीजी, फ्लैट या दुकान और ऑफिस के मालिक है{" "}
          </h4>
          <h4 className="easy">आसानी से पाए किरायेदार </h4>

          <h4 className="d-inline mx-1">
            जुड़े हमारे साथ और आसानी से पाए किरायेदार{" "}
          </h4>
          <br />
          <div className="d-flex">
            {isAuthenticated ? (
              <Link to={"/owner"} className="btn w-100 mt-2 m-2 login-btn">
                Go to Dashboard
              </Link>
            ) : (
              <>
                <Link
                  to={"/register"}
                  className="btn w-50 mt-2 m-2 explore-btn"
                >
                  Register Now
                </Link>

                <Link to={"/login"} className="btn login-btn w-50 mt-2 m-2">
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
        <div className="container ">
          <h2 className="fw-bold text-center">Our Target</h2>
          <adress>
            Our Team Directly contact with landlord and register rooms and not
            any broker can register someones else room on this website ~ if
            someone demond for <b>brokerage</b> then contact us on instagram ={" "}
            <a href="https://instagram.com/wellroom.in?igshid=NzZhOTFlYzFmZQ==">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1384/1384063.png"
                alt="youtube"
                className="img-icon-2"
              />
            </a>
          </adress>
        </div>

        <div className="container-fluid  p-0 ">
          <footer className="text-center footer text-lg-start pt-1  text-muted">
            <div
              className="text-center p-4"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
            >
              @ all copyright reserved
              <a className="text-reset fw-bold"> wellroom.in</a>
              <div className="d-flex justify-content-around">
                <Link to={"/policy"} className="text-reset fw-bold">
                  {" "}
                  privacy policy{" "}
                </Link>

                <Link to={"/about"} className="text-reset fw-bold">
                  {" "}
                  About Us
                </Link>
                {/* <Link to={"/contact"} className="text-reset fw-bold"> contact us </Link> */}
              </div>
            </div>
          </footer>
        </div>
        <div className="container test"></div>
      </div>
    </>
  );
}

export default Landing;
