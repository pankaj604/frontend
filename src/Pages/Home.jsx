import React, { useContext } from "react";
import Profile from "../auth/Profile";
import axios from "axios";
import { Context, server } from "../index";
const Home = () => {
  const { setUser, setIsAuthenticated, setLoading } = useContext(Context);

  const bio = () => {
    axios
      .get(`${server}/user/me`, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data.user);
        setIsAuthenticated(true);
      })
      .catch((error) => {
        setUser({});
        setIsAuthenticated(false);
      });
  };

  bio();

  return (
    <div>
      <Profile />
    </div>
  );
};

export default Home;
