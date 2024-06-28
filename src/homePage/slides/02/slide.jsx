import './slide.css';

import Right_Arrow from '../../../images/Right Arrow.png'

export default function ({ config, data, track }) {
	return (
		<> {/* Button section start */}
			<section className="button">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="btn_cover">
								<a href="#">Reengage Alyssa to spend more at her favorite café.<img src={Right_Arrow} alt /></a>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Button section end */}
			<div>
				{/* Back1 section start */}
				<section className="back-one back_com">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="content">
									<h2>Alyssa orders via Revi kiosk at Talkin Tacos</h2>
									<div className="my_btn">
										<a href="#">Data Capture</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* Back1 section end */}
				{/* Back2 section start */}
				<section className="back-two back_com">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="content">
									<h2>Alyssa adds two extra items at checkout</h2>
									<div className="my_btn">
										<a href="#">&nbsp;Higher Tickets</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* Back2 section end */}
				{/* Back3 section start */}
				<section className="back-three back_com">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="content">
									<h2>Alyssa gets personalized offers a day later</h2>
									<div className="my_btn">
										<a href="#">Increased Retention</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* Back3 section end */}
				{/* Button-grp section start */}
				<section className="button-grp">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="btn_cover">
									<a href="#">Retain Naomi as a new customer with personal offers.<img src="images/Right Arrow.png" alt /></a>
								</div>
								<div className="btn_cover">
									<a href="#">Remind Tai about his go-to avo toast place downtown.<img src="images/Right Arrow.png" alt /></a>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* Button-grp section end */}
			</div>



		</>
	)
}