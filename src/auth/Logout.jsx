import React, { useContext } from "react";
import axios from "axios";
import { Context, server } from "..";
import { toast } from "react-hot-toast";
import { Navigate } from "react-router-dom";
const Logout = () => {
  const { setUser,isAuthenticated, setIsAuthenticated, setLoading } = useContext(Context);

  const logoutHandler = async () => {
   
    try {
      await axios.get(`${server}/user/logout`, {
        withCredentials: true,
      });

      toast.success("Logged Out Successfully");
      setIsAuthenticated(false);
    
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(true);
     
    }
  };
  // if(!isAuthenticated) return <Navigate to={"/login"}/>
  return (
    <div>
      <button onClick={logoutHandler}>logout</button>
    </div>
  );
};

export default Logout;
