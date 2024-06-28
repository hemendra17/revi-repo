
import Group_70_1 from '../../../images/Group 70 (1).png'
import bg_image from '../../../images/bg-image.png'
import desktop from '../../../images/SVG/all_svg_imagea/banner/desktop.svg'
import mobileSvg from '../../../images/SVG/all_svg_imagea/banner/mobile.svg'
import checkout_machine from '../../../images/SVG/all_svg_imagea/banner/checkout_machine.svg'
import banner_image1 from '../../../images/SVG/all_svg_imagea/banner/banner_image1.svg'
import banner_image2 from '../../../images/SVG/all_svg_imagea/banner/banner_image2.svg'
import screen_4_bg_hills from '../../.././images/SVG/all_svg_imagea/tree_son_screen/screen_4_bg_hills.svg'
import screen_1_sun from '../../.././images/SVG/all_svg_imagea/tree_son_screen/screen_1_sun.svg'
import screen_3_lighttrees from "../../.././images/SVG/all_svg_imagea/tree_son_screen/screen_3_lighttrees.svg"
import screen_2_blue_trees from "../../.././images/SVG/all_svg_imagea/tree_son_screen/screen_2_blue_trees.svg"
import icon1 from "../../../images/icon1.png"
import icon2 from "../../../images/icon-2.png"
import icon3 from "../../../images/icon-3.png"
import icon4 from "../../../images/icon-4.png"


export default function Slide1({ track, user = {}, config = {} }) {


	return (
		<>
			{/* banner section start*/}
			<section section className="hero" >
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
							{/* <div class="ban_right">
								<img src={Group_70_1} alt />
							</div> */}
							<div className="Topbanner-imageBox">
								<div className="desktopSvg">
									<img src={desktop} /></div>
								<div className="mobileSvg">
									<img src={mobileSvg} /></div>
								<div className="checkmachineSvg">
									<img src={checkout_machine} /></div>
								<div className="bannerimageSvg1">
									<img src={banner_image1} /></div>
								<div className="bannerimageSvg2">
									<img src={banner_image2} /></div>
							</div>
						</div>



					</div>
				</div>
			</section >
			{/* banner section end*/}
			{/* bg-image section start 
			<section className="bg_image">
				<img src={bg_image} alt />
			</section>
			 */}

			<section className="sunBannersec">
				<img src={screen_4_bg_hills} id="hillsBg" className="hillsBg" />
				<img src={screen_1_sun} id="sun" className="sun" />
				<img src={screen_3_lighttrees} id="lightTree" className="lightTree" />
				<img src={screen_2_blue_trees} id="blueTree" className="blueTree" />
			</section>


			{/* bg-image section end */}

			{/* <section className="revenue">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="rev_grid">
								<div className="rev_single">
									<div className="rs_image">
										<img src="images/icon1.png" alt />
									</div>
									<div className="rs_content">
										<h2>More Cutomers</h2>
										<p>Seamlessly connect with nearby customers on the Revi app, and expand your reach through our ecosystem</p>
									</div>
								</div>
								<div className="rev_single">
									<div className="rs_image">
										<img src="images/icon-2.png" alt />
									</div>
									<div className="rs_content">
										<h2>Increase Tickets</h2>
										<p>Experience growth in your average ticket value with Revi's intelligent recommendation system and reward platform.</p>
									</div>
								</div>
								<div className="rev_single">
									<div className="rs_image">
										<img src="images/icon-3.png" alt />
									</div>
									<div className="rs_content">
										<h2>Drive Repeat Visits</h2>
										<p>Turn every customer interaction into lasting loyalty. Our advanced conversion and retargeting technologies ensure that your customers
											keep coming back, driving business growth</p>
									</div>
								</div>
								<div className="rev_single">
									<div className="rs_image">
										<img src="images/icon-4.png" alt />
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
			<section className="revenue">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="rev_grid">
								<div className="rev_single" data-aos="slide-up" data-aos-duration={1000} data-aos-easing="ease-in-out">
									<div className="rs_image">
										<img src={icon1} alt />
									</div>
									<div className="rs_content">
										<h2>More Cutomers</h2>
										<p>Seamlessly connect with nearby customers on the Revi app, and expand your reach through our ecosystem</p>
									</div>
								</div>
								<div className="rev_single" data-aos="slide-up" data-aos-duration={1500} data-aos-easing="ease-in-out">
									<div className="rs_image">
										<img src={icon2} alt />
									</div>
									<div className="rs_content">
										<h2>Increase Tickets</h2>
										<p>Experience growth in your average ticket value with Revi's intelligent recommendation system and reward platform.</p>
									</div>
								</div>
								<div className="rev_single" data-aos="slide-up" data-aos-duration={2000} data-aos-easing="ease-in-out">
									<div className="rs_image">
										<img src={icon3} alt />
									</div>
									<div className="rs_content">
										<h2>Drive Repeat Visits</h2>
										<p>Turn every customer interaction into lasting loyalty. Our advanced conversion and retargeting technologies ensure that your customers
											keep coming back, driving business growth</p>
									</div>
								</div>
								<div className="rev_single" data-aos="slide-up" data-aos-duration={2500} data-aos-easing="ease-in-out">
									<div className="rs_image">
										<img src={icon4} alt />
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


		</>




	);
}