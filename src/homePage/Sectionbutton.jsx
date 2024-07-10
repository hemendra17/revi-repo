import React, { useState } from 'react'
import RightArrow from '../images/Right Arrow.png'
import BackOnCome from './BackOnCome.jsx'
export default function Sectionbutton() {


  const [hoverindex, setHoverindex] = useState(null)
  const handleMouseEnter = (index) => {
    setHoverindex(index)
  }

  const handelMouseLeave = () => {
    setHoverindex(null)
  }

  return (
    <>
      <section className="button">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="btn_cover" onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={() => { handelMouseLeave() }}>
                <a href="#" >Reengage Alyssa to spend more at her favorite café.<img src={RightArrow} alt /></a>
              </div>
              <div className="btn_cover" onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => { handelMouseLeave() }}>
                <a href="#" >Retain Naomi as a new customer with personal offers.<img src={RightArrow} alt /></a>
              </div>
              <div className="btn_cover" onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => { handelMouseLeave() }} >
                <a href="#" onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => { handelMouseLeave() }}>Remind Tai about his go-to avo toast place downtown.<img src={RightArrow} alt /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {
        hoverindex !== null && <BackOnCome />
      }
      {/* <section className="button">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="btn_cover">
          <a href="#">Reengage Alyssa to spend more at her favorite café.<img src={RightArrow} alt /></a>
        </div>
      </div>
    </div>
  </div>
</section> */}

    </>
  )
}
