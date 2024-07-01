import React from 'react'
import Icon1 from '../images/icon1.png'
import Icon2 from '../images/icon-2.png'
import Icon3 from '../images/icon-3.png'
import Icon4 from '../images/icon-4.png'
export default function Revenue() {
  return (
    <>
      <section className="revenue">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="rev_grid">
          <div className="rev_single" data-aos="slide-up" data-aos-duration={1000} data-aos-easing="ease-in-out">
            <div className="rs_image">
              <img src={Icon1} alt />
            </div>
            <div className="rs_content">
              <h2>More Cutomers</h2>
              <p>Seamlessly connect with nearby customers on the Revi app, and expand your reach through our ecosystem</p>
            </div>
          </div>
          <div className="rev_single" data-aos="slide-up" data-aos-duration={1500} data-aos-easing="ease-in-out">
            <div className="rs_image">
              <img src={Icon2} alt />
            </div>
            <div className="rs_content">
              <h2>Increase Tickets</h2>
              <p>Experience growth in your average ticket value with Revi's intelligent recommendation system and reward platform.</p>
            </div>
          </div>
          <div className="rev_single" data-aos="slide-up" data-aos-duration={2000} data-aos-easing="ease-in-out">
            <div className="rs_image">
              <img src={Icon3} alt />
            </div>
            <div className="rs_content">
              <h2>Drive Repeat Visits</h2>
              <p>Turn every customer interaction into lasting loyalty. Our advanced conversion and retargeting technologies ensure that your customers 
                keep coming back, driving business growth</p>
            </div>
          </div>
          <div className="rev_single" data-aos="slide-up" data-aos-duration={2500} data-aos-easing="ease-in-out">
            <div className="rs_image">
              <img src={Icon4} alt />
            </div>
            <div className="rs_content">
              <h2>Reduce Labor Cost</h2>
              <p>Streamline your operations, allowing your staff to focus on what matters most-enhancing customer experience.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  {/* <section className="revenue">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="rev_grid">
          <div className="rev_single">
            <div className="rs_image">
              <img src={Icon1} alt />
            </div>
            <div className="rs_content">
              <h2>More Cutomers</h2>
              <p>Seamlessly connect with nearby customers on the Revi app, and expand your reach through our ecosystem</p>
            </div>
          </div>
          <div className="rev_single">
            <div className="rs_image">
              <img src={Icon2} alt />
            </div>
            <div className="rs_content">
              <h2>Increase Tickets</h2>
              <p>Experience growth in your average ticket value with Revi's intelligent recommendation system and reward platform.</p>
            </div>
          </div>
          <div className="rev_single">
            <div className="rs_image">
              <img src={Icon3} alt />
            </div>
            <div className="rs_content">
              <h2>Drive Repeat Visits</h2>
              <p>Turn every customer interaction into lasting loyalty. Our advanced conversion and retargeting technologies ensure that your customers 
                keep coming back, driving business growth</p>
            </div>
          </div>
          <div className="rev_single">
            <div className="rs_image">
              <img src={Icon4} alt />
            </div>
            <div className="rs_content">
              <h2>Reduce Labor Cost</h2>
              <p>Streamline your operations, allowing your staff to focus on what matters most-enhancing customer experience.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}

    </>
  )
}
