// import React from 'react';
// import Slider from 'react-slick';
// export default function BackOnCome() {
//   const settings = {
//     infinite: true, // Infinite loop
//     speed: 500, // Transition speed
//     slidesToShow: 1, // Number of slides to show at once
//     slidesToScroll: 1, // Number of slides to scroll
//     autoplay: true, // Enable autoplay
//     autoplaySpeed: 1000, // Autoplay speed in milliseconds
  
//   };

//   return (
//     <>
//        <Slider {...settings}>
//           <div>
//             <section className="back-one back_com">
//               <div className="container">
//                 <div className="row">
//                   <div className="col-md-12">
//                     <div className="content">
//                       <h2>Alyssa orders via Revi kiosk at Talkin Tacos</h2>
//                       <div className="my_btn">
//                         <a href="#">Data Capture</a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </section>
//           </div>
//           <div>
//             <section className="back-two back_com">
//               <div className="container">
//                 <div className="row">
//                   <div className="col-md-12">
//                     <div className="content">
//                       <h2>Alyssa adds two extra items at checkout</h2>
//                       <div className="my_btn">
//                         <a href="#">&nbsp;Higher Tickets</a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </section>
//           </div>
//           <div>
//             <section className="back-three back_com">
//               <div className="container">
//                 <div className="row">
//                   <div className="col-md-12">
//                     <div className="content">
//                       <h2>Alyssa gets personalized offers a day later</h2>
//                       <div className="my_btn">
//                         <a href="#">Increased Retention</a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </section>
//           </div>
//         </Slider>
//     </>
//   );
// }


import React from 'react'

export default function BackOnCome() {
  return (
    <>
   <div>
  <section className="back-one back_com" id='1'>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="content">
            <h2>Alyssa orders via Revi kiosk
              at Talkin Tacos</h2>
            <div className="my_btn">
              <a href="#">Data Capture</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 <section className="back-two back_com">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="content">
            <h2>Alyssa adds two extra items at
              checkout</h2>
            <div className="my_btn">
              <a href="#">&nbsp;Higher Tickets</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="back-three back_com">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="content">
            <h2>Alyssa gets personalized offers
              a day later</h2>
            <div className="my_btn">
              <a href="#">Increased Retention</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    </>
  )
}