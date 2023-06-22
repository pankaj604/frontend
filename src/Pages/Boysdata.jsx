import React from 'react'

const Boysdata = ({city,rent,address,mobile,image}) => {
  return (
    <div className="container-pg">
      <div className="text-list">
        
        <ol>
          <li>{city}</li>
          <li>{rent}</li>
          <li>{address}</li>
          <li>{mobile}</li>
          
        </ol>
        <div className="img-pg">
        <img className="image" src={image} alt="room" />
      </div>
      </div>
    </div>
  )
}

export default Boysdata