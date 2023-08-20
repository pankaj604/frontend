import React, { useEffect, useState } from "react";

const Shopdata = ({
  city,
  rent,
  address,
  mobile,
  image,
  area,
  nearby,
  size,
  date
}) => {
  //
  const [daysLeft, setDaysLeft] = useState(null);
  const update = () => {
    const inputDate = new Date(date);

    const currentDate = new Date();

    const timeDifference = inputDate - currentDate.getTime();
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    if (daysRemaining >= 1) {
      setDaysLeft(daysRemaining);
    } else {
      setDaysLeft("Available Now");
    }
    console.log(daysRemaining);
  };

  useEffect(() => {
    update();
  }, []);
  //


  return (
    <>
      <div className="one   p-0 col-xl-2  text-white">
        <div className="image p-0">
          <img className="img-fluid w-100 h-100 " src={image} alt="room" />
        </div>
        <div className="text p-1">
          <h6 className="d-inline m-0 h6">
            Shop/Rent  is <p className="m-0 d-inline rent-value">{rent}</p>
          </h6>
          <br />
          <h6 className="d-inline m-0 h6">
            Area <p className="m-0 d-inline value">{area}</p>
          </h6>
          <br />
          <h6 className="d-inline m-0 h6">
            Nearby <p className="m-0 d-inline value">{nearby}</p>
          </h6>
          <br />
      
          <h6 className="d-inline m-0 h6">
            Owner Mo. <p className="m-0 d-inline value">{mobile}</p>
          </h6>
          <br />
          <h6 className="d-inline m-0 h6">
            Room Size <p className="m-0 d-inline value">{size}</p>
          </h6>
          <br />
          <h6 className="d-inline m-0 h6">
            {date && <>Available Date </>}
            <p className="m-0 d-inline value">
              {date} <b> left-time = {daysLeft} days</b>
            </p>
          </h6>
          <br />
          <h6 className="d-inline m-0 h6">
            Address - <p className="m-0 d-inline value">{address}</p>
          </h6>
          <br />
        </div>
      </div>
    </>
  );
};

export default Shopdata;
