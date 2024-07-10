import React from 'react'
import RightArrow from '../images/Right Arrow.png'

export default function Buttongrp() {
  return (
    <>
      <section className="button-grp">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="btn_cover">
                <a href="#">Retain Naomi as a new customer with personal offers.<img src={RightArrow} alt /></a>
              </div>
              <div className="btn_cover">
                <a href="#">Remind Tai about his go-to avo toast place downtown.<img src={RightArrow} alt /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
