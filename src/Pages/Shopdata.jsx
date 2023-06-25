import React from 'react'

const Shopdata = ({city,rent,address,mobile,image,area,nearby,size}) => {
  return (
    <div className="container-pg">
    <div className="text-list">
      <h1>available shops</h1>
      <ol>
        <li>{city}</li>
        <li>{rent}</li>
        <li>{address}</li>
        <li>{mobile}</li>
        <li>{area}</li>
        <li>{nearby}</li>
        <li>{size}</li>
        
      </ol>
      <div className="img-pg">
      <img className="image" src={image} alt="room" />
    </div>
    </div>
  </div>
  )
}

export default Shopdata