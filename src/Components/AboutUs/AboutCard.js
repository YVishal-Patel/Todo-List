import React from 'react'

function AboutCard({Icon, Title, Discription}) {
  return (
    <>
    <div className="about-cards">
     <div className="about-card">
       <p>{Icon} </p>
       <h3>{Title}</h3>
       <p>{Discription}</p>
     </div>
    </div>
    </>
  )
}

export default AboutCard