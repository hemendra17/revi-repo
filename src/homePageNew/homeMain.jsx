import './css/main.css'
import './css/bootstrap-theme.css'
import './css/bootstrap-theme.min.css'
import './css/bootstrap.css'
import './css/bootstrap.min.css'

import header_logo from './images/header_logo.png'
import Man_On_Phone from './images/Man On Phone.svg'
import Group_70_1 from './images/Group 70 (1).png'
import bg_image from './images/bg-image.png'

export default function () {
    return (
        <>
            <div>
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
                                <div className="ban_right">
                                    <img src={Group_70_1} alt />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* banner section end */}
                {/* bg-image section start */}
                <section className="bg_image">
                    <img src={bg_image} alt />
                </section>
                {/* bg-image section end */}
                {/* Revenue section start */}
                <section className="revenue">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="rev_grid">
                                    <div className="rev_single">
                                        <div className="rs_image">
                                            <lord-icon
                                                src="https://cdn.lordicon.com/piwupaqb.json"
                                                trigger="hover"
                                                style={{ width: '100px', height: '100px', backgroundColor: 'white', padding: 1 }}>
                                            </lord-icon>
                                            {/* <img src="images/icon1.png" alt /> */}
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
                </section>
                {/* Revenue section end */}
                {/* Button section start */}
                <section className="button">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="btn_cover">
                                    <a href="#">Reengage Alyssa to spend more at her favorite café.<img src="images/Right Arrow.png" alt /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Button section end */}
                {/* Back1 section start */}
                <section className="back-one back_com">
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
                {/* Back1 section end */}
                {/* Back2 section start */}
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
                {/* Back2 section end */}
                {/* Back3 section start */}
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
                {/* Team section start */}
                <section className="team">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-4">
                                <div className="team-single">
                                    <div className="ts_l">
                                        <img src="images/ts-1.png" alt />
                                    </div>
                                    <div className="ts_r">
                                        <img src="images/tr-1.png" alt />
                                        <h2>Piter Park</h2>
                                        <p>Revi is integrated into all of my favorite food trucks. It’s easy to use and has all
                                            order history saved, so I can order quick.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <div className="team-single">
                                    <div className="ts_l">
                                        <img src="images/ts-2.png" alt />
                                    </div>
                                    <div className="ts_r">
                                        <img src="images/tr-2.png" alt />
                                        <h2>Andrea&nbsp;Piacquadio</h2>
                                        <p>Revi is integrated into all of my favorite food trucks. It’s easy to use and has all
                                            order history saved, so I can order quick.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <div className="team-single">
                                    <div className="ts_l">
                                        <img src="images/ts-3.png" alt />
                                    </div>
                                    <div className="ts_r">
                                        <img src="images/tr-3.png" alt />
                                        <h2>Rebrand Cities</h2>
                                        <p>Revi is integrated into all of my favorite food trucks. It’s easy to use and has all
                                            order history saved, so I can order quick.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12">
                                <div className="quote-cover">
                                    <img src="images/block-quote.png" alt />
                                    <h2>Businesses and customers love Revi.</h2>
                                    <p>Here’s what they have to say.</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <div className="team-single">
                                    <div className="ts_l">
                                        <img src="images/ts-4.png" alt />
                                    </div>
                                    <div className="ts_r">
                                        <img src="images/tr-4.png" alt />
                                        <h2>Andrea Piacquadio</h2>
                                        <p>Revi is integrated into all of my favorite food trucks. It’s easy to use and has all
                                            order history saved, so I can order quick.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <div className="team-single">
                                    <div className="ts_l">
                                        <img src="images/ts-5.png" alt />
                                    </div>
                                    <div className="ts_r">
                                        <img src="images/tr-5.png" alt />
                                        <h2>Dinielle De Veyra</h2>
                                        <p>Revi is integrated into all of my favorite food trucks. It’s easy to use and has all
                                            order history saved, so I can order quick.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <div className="team-single">
                                    <div className="ts_l">
                                        <img src="images/ts-6.png" alt />
                                    </div>
                                    <div className="ts_r">
                                        <img src="images/tr-6.png" alt />
                                        <h2>Piacquadio</h2>
                                        <p>Revi is integrated into all of my favorite food trucks. It’s easy to use and has all
                                            order history saved, so I can order quick.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Team section end */}
                {/* Circel-image section start */}
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
                {/* Circel-image section end */}
                {/* Box section start */}
                <section className="box-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="box-grid">
                                    <div className="box-single">
                                        <h2>$125k+<span> New Revenue</span></h2>
                                        <p>Revi drives over $125k in new
                                            revenue per location</p>
                                    </div>
                                    <div className="box-single">
                                        <h2>+20%<span> Ticket Sizes</span></h2>
                                        <p>Boost sales with smart,
                                            personalized upsells</p>
                                    </div>
                                    <div className="box-single">
                                        <h2>91%<span> Data Captured</span></h2>
                                        <p>Automatically collect emails and
                                            phone numbers</p>
                                    </div>
                                    <div className="box-single">
                                        <h2>58%<span> Upsell Rates</span></h2>
                                        <p>More than half of Revi users
                                            buy additional items</p>
                                    </div>
                                    <div className="box-single">
                                        <h2>0%<span> Delivery Commissions</span></h2>
                                        <p>Split up Revi’s flat $7.99
                                            delivery fee</p>
                                    </div>
                                    <div className="box-single">
                                        <h2>+22%<span> Repeat Orders</span></h2>
                                        <p>Remarket to customers without
                                            lifting a finger</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Box section end */}
                {/* Checkout section start */}
                <section className="checkout">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="content">
                                    <h2>So, so much more than just checkout.</h2>
                                    <p>Revi provides an all-in-one platform for discovery, checkout, delivery, and marketing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Checkout section end */}
                {/* carousel section start */}
                <section className="carousel-sec">
                    <div className="container">
                        <div className="row car_cover">
                            <div className="col-sm-3 col-md-4">
                                <div className="c_img">
                                    <img src="images/kiosk.png" alt />
                                </div>
                            </div>
                            <div className="col-sm-7 col-md-6">
                                <div className="c-img-box">
                                    <img src="images/Rectangle-94.png" alt />
                                    <h4>Self-service Kiosk</h4>
                                    <p>Save $50k/year on labor</p>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="car-dots">
                                    <ul>
                                        <li className="active" />
                                        <li />
                                        <li />
                                        <li />
                                        <li />
                                        <li />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* carousel section end */}
                <section className="calltoaction">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h3>Zero upfront costs. <br />Just pay for shipping.</h3>
                                <p>See how Revi can boost revenue for you. <br />Book a demo to learn more.</p>
                                <div className="input-group mb-3">
                                    <a className="my_btns" href="#">Call Now</a>
                                    <a className="my_btns1" href="#">Book Your demo</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3 col-md-3">
                                <img src="images/footer_logo.png" className="img-foter" />
                                <ul className="socials">
                                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                                    <li><a href="#"><i className="fa fa-instagram" /></a></li>
                                </ul>
                            </div>
                            <div className="col-sm-1 col-md-3">
                                &nbsp;
                            </div>
                            <div className="col-xs-6 col-sm-2 col-md-2">
                                <h4>Revi</h4>
                                <ul>
                                    <li><a href="#">Revi App</a></li>
                                    <li><a href="#">For Business</a></li>
                                </ul>
                            </div>
                            <div className="col-xs-6 col-sm-3 col-md-2">
                                <h4>Products</h4>
                                <ul>
                                    <li><a href="#">The Revi</a></li>
                                    <li><a href="#">For Countertop</a></li>
                                    <li><a href="#">Revi Clamp</a></li>
                                </ul>
                            </div>
                            <div className="col-xs-12 col-sm-3 col-md-2">
                                <h4>About</h4>
                                <ul>
                                    <li><a href="#">The Revi</a></li>
                                    <li><a href="#">For Countertop</a></li>
                                    <li><a href="#">Revi Clamp</a></li>
                                    <li><a href="#">contact Us</a></li>
                                    <li><a href="#">Press Inquiries</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
                <section className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <p>Copyright © Revi</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Bootstrap core JavaScript
  ================================================== */}
                {/* Placed at the end of the document so the pages load faster */}
                {/* Just to make our placeholder images work. Don't actually copy the next line! */}
                {/* IE10 viewport hack for Surface/desktop Windows 8 bug */}
            </div>

        </>
    )
}