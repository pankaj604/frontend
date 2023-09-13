import React, { useContext, useEffect } from 'react'
import { Context, server } from '..';
import Logout from './Logout';
import axios from 'axios';
import "./Profile.css";
const Profile = () => {
  const { isAuthenticated, loading, user } = useContext(Context);
  const { setUser, setIsAuthenticated, setLoading } = useContext(Context);


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