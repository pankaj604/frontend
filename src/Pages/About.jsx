import React from "react";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
        <meta
          name="description"
          content=" our details what we do for student - we are providing rooms flats hostels shops free without brokerage "
        />
        <meta
          name="keywords"
          content=" rooms in indore , free ,room , hostel , pg , shops , shops in indore , room for boys , room for girls , hostel for boys , hostel for girls , pg for boys , pg for girls , shops free  , no brokerage , without brokerage , wellroom wellroom.in , wellroom , achha room , best room , free room , room for student   "
        />
        <meta name="theme-color" content="#E6E6FA" />
        <link rel="canonical" href="https://www.wellroom.in/about" />
      </Helmet>
      <div className="container-fluid div-privacy">
        <h1 className="text-center privacy"> About us</h1>

        <h4 className="text-center">
          curruntly our services available in only indore , as soon as we will
          cover bhopal and kota and we give priority for students for -- any
          kind of help you can contact us on
          <br />
          <a href="https://instagram.com/wellroom.in?igshid=NzZhOTFlYzFmZQ==">
            <img
              src="https://cdn-icons-png.flaticon.com/128/1384/1384063.png"
              alt="youtube"
              className="img-icon-2"
            />
          </a>
        </h4>
        <h4>Our Office Address - </h4>
        <address>
          petpuja building , brahmpuri colony , bholaram ustad marg , bhanwarkua
          chouraha , indore madhya pradesh pincode - 452014
          <br />
          <p className="temp">
            (notice) this address is temporary address ,our main office is under
            construction{" "}
          </p>
        </address>
      </div>
    </>
  );
};

export default About;
