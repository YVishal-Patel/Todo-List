import React from 'react'
import './AboutCard.css'

function AboutCard({Icon, Title, Discription}) {
  return (
    <>
    <div className="about-cards">
     <div className="about-card">
       <p>{Icon} </p>
       <h3 className='title' >{Title}</h3>
       <p className='discription'>{Discription}</p>
     </div>
    </div>
    </>
  )
}

export default AboutCard