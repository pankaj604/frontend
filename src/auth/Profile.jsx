import React, { useContext, useEffect } from 'react'
import { Context, server } from '..';
import Logout from './Logout';
import axios from 'axios';
import "./Profile.css";
const Profile = () => {
  const { isAuthenticated, loading, user } = useContext(Context);
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

  useEffect(() => {
    //Runs only on the first render
    bio()
  }, []);
  return (
    <div className='profile-nav text text-center'>
      <h1 className=''>Your Profile</h1>
       <h2 className=''>Name =  {user?.name}</h2>
       <br />
      <h2 className=''>Email =  {user?.email}</h2>
 
    </div>
  )
}

export default Profile