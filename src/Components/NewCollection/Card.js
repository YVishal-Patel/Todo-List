import React from 'react'
import './Card.css'

function Card({imgUrl , Title , Discription , Price}) {
  return (
      <>
          <div className="card">
            <div className="card-component">
              <img src={imgUrl} alt="" />
              <h3>{Title}</h3>
              <p>{Discription}</p>
              <h5>{Price}</h5>
              <button className='btn-main'>Shop Now</button>
            </div>
          </div>
      </>
  )
}

export default Card
