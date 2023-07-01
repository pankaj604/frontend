import React from 'react'

const Shopdata = ({city,rent,address,mobile,image,area,nearby,size}) => {
  return (
    <div className="container-pg">
    <div className="text-list">
      <h1>available shops</h1>
      <ol>
        <li>city is {city}</li>
        <li>rent is {rent}</li>
        <li>address <address>{address}</address></li>
        <li>contact here{mobile}</li>
        <li>area {area}</li>
        <li>Nearby {nearby}</li>
        <li>size is {size}</li>
        
      </ol>
      <div className="img-pg">
      <img className="image" src={image} alt="room" />
    </div>
    </div>
  </div>
  )
}

export default Shopdata