import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Context, server } from "..";
import { toast } from "react-hot-toast";

const Aprovelshopdata = ({
  city,
  rent,
  address,
  mobile,
  image,
  area,
  nearby,
  size,
  id,
  isApproved,
  date,
  image2,
  shopid
}) => {
  const [button, setbutton] = useState(false);
  const {refresh,setRefresh } = useContext(Context);
  //
  const [daysLeft, setDaysLeft] = useState(null);
  if (date <=Date.now()) {
    date = null;
  }
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

  };

  useEffect(() => {
    update();
  }, []);

  //


  const updateHandler = async (id) => {
    try {
      const { data } = await axios.put(
        `${server}/shop/approveShop/${id}`,
        {},
        {
          withCredentials: true,
        }
      );

      toast.success(data.massage);
      setRefresh((prev) => !prev);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const deleteHandler = async (id) => {
    try {
      const resul = window.confirm("are you sure to delet");
      if (resul) {
        setbutton(false);
        const { data } = await axios.delete(`${server}/shop/delet/${id}`, {
          withCredentials: true,
        });

        toast.success(data.message);
        setRefresh((prev) => !prev);
        setbutton(true);
      } else {
        return;
      }
    } catch (error) {
      setbutton(false);
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <div div className="one m-3  p-0 col-xl-2  text-white">
        <div className="image p-0">
          <img className="img-fluid w-100 h-100 " src={image} alt="room" />
        </div>
        <div className="image p-0">
          <img className="img-fluid w-100 h-100 " src={image2} alt="room" />
        </div>
        <div className="text p-1">
          <h6 className="d-inline m-0 h6">
            room rent is <p className="m-0 d-inline value">{rent} , </p>
            id = <p className="roomid d-inline p-1 ">{shopid}</p>
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
            City <p className="m-0 d-inline value">{city}</p>
          </h6>
          <br />
          <h6 className="d-inline m-0 h6">
            Area <p className="m-0 d-inline value">{area}</p>
          </h6>
          <br />
          <h6 className="d-inline m-0 h6">
            Facilities <p className="m-0 d-inline value">{nearby}</p>
          </h6>
          <br />
          <h6 className="d-inline m-0 h6">
          {date && <>Available on </>}
            <p className="m-0 d-inline value">
              <b> {date}</b> ||{" "}
              <b className="left-days"> left -days= {daysLeft} </b>
            </p>
          </h6>
          <br />
          <h6 className="d-inline m-0 h6">
            Address <p className="m-0 d-inline value">{address}</p>
          </h6>
          <br />
        </div>

        <div className="operation d-flex justify-content-around flex-row ">
          <div className="input d-flex justify-content-center  flex-row m-2">
            <div className="input d-flex justify-content-center align-items-center  flex-row m-2">
              <input
                className="chackbox "
                disabled={button}
                onChange={() => updateHandler(id)}
                type="checkbox"
                checked={isApproved}
              />
              <h5 className="m-1 choise">Approved</h5>
            </div>
          </div>
          <div className="button align-self-end m-2">
            <button
              disabled={button}
              onClick={() => deleteHandler(id)}
              className="btn text-light"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aprovelshopdata;
