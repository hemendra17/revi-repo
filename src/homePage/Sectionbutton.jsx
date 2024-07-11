import React, { useState } from 'react'
import RightArrow from '../images/Right Arrow.png'
import BackOnCome from './BackOnCome.jsx'
export default function Sectionbutton() {


  const [hoverindex, setHoverindex] = useState(null)

  const [activeIndex, setActiveIndex] = useState(null)



  const handelClick = (index) => {
    setActiveIndex((pre) => (pre === index ? null : index))

  }


  return (
    <>
      <section className="button">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="btn_cover">
                <a style={{ cursor: 'pointer' }} onClick={() => handelClick(0)}>Reengage Alyssa to spend more at her favorite café.<img src={RightArrow} alt /></a>
              </div>
              {
                activeIndex === 0 && <BackOnCome />
              }

              <div className="btn_cover">
                <a style={{ cursor: 'pointer' }} onClick={() => handelClick(1)}>Retain Naomi as a new customer with personal offers.<img src={RightArrow} alt /></a>
              </div>
              {
                activeIndex === 1 && <BackOnCome />
              }
              <div className="btn_cover"  >
                <a style={{ cursor: 'pointer' }} onClick={() => handelClick(2)}>Remind Tai about his go-to avo toast place downtown.<img src={RightArrow} alt /></a>
              </div>
              {
                activeIndex === 2 && <BackOnCome />
              }
            </div>
          </div>
        </div>
      </section>

      {  /* 
<section className="button">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="btn_cover">
          <a href="#">Reengage Alyssa to spend more at her favorite café.<img src={RightArrow} alt /></a>
        </div>
      </div>
    </div>
  </div>
</section>
 */  }

    </>
  )
}
