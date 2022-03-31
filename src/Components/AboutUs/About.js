import React from 'react'
import './About.css'
import AboutCard from './AboutCard'

function About() {
  return (
      <>
          <div className="about-container">
              <div className="about-assets">

               <div className="about-asset">
              <AboutCard 
              Icon={<svg xmlns="http://www.w3.org/2000/svg" class="about-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
              </svg>}
             Title="Worldwide shipment" 
             Discription="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore quas iure libero ad excepturi suscipit vitae fugit corporis amet incidunt! Asperiores quas est ex quod reprehenderit dolore, ad error sunt." />
                </div>
                <div className="about-asset">
                  <AboutCard 
                      Icon={<svg xmlns="http://www.w3.org/2000/svg" class="about-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round"  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>}
                      Title ="Fast & Secure Payment"
                      Discription="LLorem ipsum dolor sit amet, consectetur adipisicing elit. Iste magnam laborum sapiente dolor atque saepe, alias tempore quod, quos officiis numquam sint aliquam delectus consectetur. Laudantium officia obcaecati deleniti repellat?"
                  />
                    </div>

                    <div className="about-asset">
                  <AboutCard 
                    Icon={<svg xmlns="http://www.w3.org/2000/svg" class="about-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>}
                    Title="24/7 Customer Care"
                    Discription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste magnam laborum sapiente dolor atque saepe, alias tempore quod, quos officiis numquam sint aliquam delectus consectetur. Laudantium officia obcaecati deleniti repellat?"
                    />
                    </div>
              </div>
          </div>
      </>
  )
}

export default About