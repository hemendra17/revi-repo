import React from 'react'

export default function CircleSection() {
  return (
    <>
     
   <section className="circle-image">
  <div className="container">
    <div className>
      {/* <div class="col-md-12">
              <div class="circle">
                  <img src="images/circle_image.png" alt="">
              </div>
              
          </div> */}
      <div className>
        {/* <div class="content">
                  <h4>eCommerce-inspired checkout, 
                      marketing, and delivery for businesses.</h4>
                  <p>Revi drives new revenue and automatically markets to your customers while replacing dozens of time-consuming tools. Oh, Revi does 0% commission delivery too.</p>
              </div> */}
        <div className="ring-wrapper">
          <div id="layer-1" className="ring layer-1">
            <div className="cent_text">
              <h2>eCommerce-inspired checkout, marketing, and delivery for businesses.</h2>
              <p>Revi drives new revenue and automatically markets to your customers while replacing
                dozens of time-consuming tools. Oh, Revi does 0% commission delivery too.</p>
            </div>
            <div className="ring-display">
              <div className="label"><span>Advertising</span></div>
              <div className="label"><span>Ordering</span></div>
              <div className="label"><span>Upsells</span></div>
              <div className="label"><span>Rewards</span></div>
              <div className="label"><span>Analytics</span></div>
              <div className="label"><span>Texts</span></div>
              <div className="label"><span>Coupons</span></div>
              <div className="label"><span>Food Pics</span></div>
              <div className="label"><span>CRM</span></div>
              <div className="label"><span>Marketplace</span></div>
              <div className="label"><span>Delivery</span></div>
              <div className="label"><span>Menu</span></div>
            </div>
            <div className="interaction" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </>
  )
}
