import React, { useContext } from 'react'
import { Context, server } from '..';
import Logout from './Logout';
import axios from 'axios';

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

  bio();
  
  return (
    <div className='profile-nav text text-center'>
      <h2 className=''>Your Profile</h2>
       <h2 className=''>Name {user?.name}</h2>
      <h2 className=''>Email {user?.email}</h2>
 
    </div>
  )
}

export default Profile