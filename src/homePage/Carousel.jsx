import React from 'react'
import Kiosk from '../images/kiosk.png'
import Rectangle from '../images/Rectangle-94.png'
export default function Carousel() {
  return (
    <>
    
 <section className="carousel-sec">
  <div className="container">
    <div className="row car_cover">
      <div className="col-sm-3 col-md-4">
        <div className="c_img">
          <img src={Kiosk} alt />
        </div>
      </div>
      <div className="col-sm-7 col-md-6">
        <div className="c-img-box">
          <img src={Rectangle} alt />
          <h4>Self-service Kiosk</h4>
          <p>Save $50k/year on labor</p>
        </div>
      </div>
      <div className="col-md-2">
        <div className="car-dots">
          <ul>
            <li className="active" />
            <li  className="active"/>
            <li  className="active"/>
            <li />
            <li />
            <li  />
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
