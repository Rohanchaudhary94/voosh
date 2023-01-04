import React from 'react'


import Landing_bg from "../../images/landing_bg.webp"



function Landingpage() {
  return (
    <>
    <div className="page1_container" id="page1">
      <div className="landing_bg_container">
        <img src={Landing_bg} className="landing_bg_icon" alt="landing"/>
      </div>

      <div className="page1_title_container_content" style={{
      marginTop:"3%",
      marginLeft:"25%"
      }}>
        <div className="page1_title_container">
          <div className="title">
            Consolidate your restaurants' insights in one place. Unlock growth.
          </div>
          <div className="subtitle">
            Your one stop solution to view mission-critical data and insights
            from all your locations in one place.
          </div>
          
          <br/>
        <div  className='youtube' style={{
                marginLeft:"-8%",
                marginTop:"7%"
                // minHeight:"400",
                // minWidth:"700",
                
            }}>
           <iframe width="700" height="400" src="https://www.youtube.com/embed/YOwOFi0yP7k" title="Voosh - India's first10 Min Food Delivery" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <br/>
        </div>

        
      </div>
    </div>
      
    </>
  )
}

export default Landingpage
