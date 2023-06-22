import React, { useContext } from 'react'
import { Context } from '..';
import Logout from './Logout';

const Profile = () => {
  const { isAuthenticated, loading, user } = useContext(Context);
  
  return (
    <div className='profile'>
      <h3 className='p-name'>Your Profile</h3>
       <h1 className='p-name'>Name {user?.name}</h1>
      <h2 className='p-email'>Email {user?.email}</h2>
      <Logout/>
    </div>
  )
}

export default Profile