import React from 'react'
import RightArrow from '../images/Right Arrow.png'
export default function Sectionbutton() {
  return (
    <>
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
