import React from 'react'
// import { useEffect } from 'react'
import desktop from '../images/SVG/all_svg_imagea/banner/desktop.svg'
import mobile from '../images/SVG/all_svg_imagea/banner/mobile.svg'
import checkout_machine from  "../images/SVG/all_svg_imagea/banner/checkout_machine.svg"
import bannerImage1 from '../images/SVG/all_svg_imagea/banner/banner_image1.svg'
import bannerImage2 from '../images/SVG/all_svg_imagea/banner/banner_image2.svg'

export default function HomePage() {
  
	// useEffect(() => {
	// 	const handleScroll = throttle(() => {
	// 		let value = window.scrollY;
	// 		document.getElementById('sun').style.top = value * 0.2 + 'px';
	// 		document.getElementById('hillsBg').style.top = value * -0.1 + 'px';
	// 		document.getElementById('lightTree').style.top = value * -0.1 + 'px';
	// 	}, 100); // adjust the delay as needed

	// 	window.addEventListener('scroll', handleScroll);
	// 	return () => {
	// 		window.removeEventListener('scroll', handleScroll);
	// 	};
	// }, []);

  return (
    <>
   <section className="hero">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="ban_left">
          <h1>Revenue on AutoPilot</h1>
          <p>Don't Call it a Pos. Revi is the first to not only take transactions, but also drive new revenue automatically for businesses
          </p>
        </div>
      </div>
      <div className="col-md-6">
        
        <div className="Topbanner-imageBox">
          <div className="desktopSvg"><img src={desktop} /></div>
          <div className="mobileSvg"><img src={mobile} /></div>
          <div className="checkmachineSvg"><img src={checkout_machine} /></div>
          <div className="bannerimageSvg1"><img src={bannerImage1} /></div>
          <div className="bannerimageSvg2"><img src={bannerImage2} /></div>
        </div>
      </div>
    </div>
  </div>
</section>
 

</>
  
  )
}
