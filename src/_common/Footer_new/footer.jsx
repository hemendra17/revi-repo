import React from 'react'
import { Link } from 'react-router-dom'
import instra_logo from '../../_configs/assets/_common_assets/insta.svg'
import linkedin_logo  from '../../_configs/assets/_common_assets/linked in.svg'
import twitter_logo  from '../../_configs/assets/_common_assets/twitter.svg'
import footer_logo from '../../images/footer_logo.png'
export default function footer() {
  return (
    <>
<div id='footer'>
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-sm-3 col-md-3">
          <img src={footer_logo} className="img-foter" />
          <ul className="socials">
            <li><a target='_blank' href="https://www.instagram.com/get.revi/"><img src={instra_logo }/></a></li>
            <li><a target='_blank' href="https://www.linkedin.com/company/getrevi/"><img src={linkedin_logo }/></a></li>
            <li><a  target='_blank' href="https://twitter.com/GetRevi_"><img src={twitter_logo }/></a></li>
            </ul>	
        </div>
        <div className="col-sm-1 col-md-3">
          &nbsp;
        </div>
        <div className="col-xs-6 col-sm-2 col-md-2">
          <h4>Revi</h4>
          <ul>
            <li><Link to="/app">Revi App</Link></li>
            <li><Link to="/business">For Business</Link></li>
          </ul>
        </div>
        <div className="col-xs-6 col-sm-3 col-md-2">
          <h4>Products</h4>
          <ul>
            <li><Link to="/business/kiosk">The Revi</Link></li>
            <li><Link to="/business/ctop">For Countertop</Link></li>
            <li><Link to="/business/clamp">Revi Clamp</Link></li>
          </ul>
        </div>
        <div className="col-xs-12 col-sm-3 col-md-2">
          <h4>About</h4>
          <ul>
            <li><Link to="/business/kiosk">The Revi</Link></li>
            <li><Link to="/business/ctop">For Countertop</Link></li>
            <li><Link to="/business/clamp">Revi Clamp</Link></li>
            <li><Link to="/contacts">contact Us</Link></li>
            <li><Link to="/contacts">Press Inquiries</Link></li>
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
</div>

{/* <div>
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-sm-3 col-md-3">
          <img src={footer_logo} className="img-foter" />
          <ul className="socials">
            <li><Link to="#"><i className="fab fa-twitter" /></Link></li>
            <li><Link to="#"><i className="fab fa-linkedin" /></Link></li>
            <li><Link to="#"><i className="fab fa-instagram" /></Link></li>
          </ul>	
        </div>
        <div className="col-sm-1 col-md-3">
          &nbsp;
        </div>
        <div className="col-xs-6 col-sm-2 col-md-2">
          <h4>Revi</h4>
          <ul>
            <li><Link to="#">Revi App</Link></li>
            <li><Link to="#">For Business</Link></li>
          </ul>
        </div>
        <div className="col-xs-6 col-sm-3 col-md-2">
          <h4>Products</h4>
          <ul>
            <li><Link to="#">The Revi</Link></li>
            <li><Link to="#">For Countertop</Link></li>
            <li><Link to="#">Revi Clamp</Link></li>
          </ul>
        </div>
        <div className="col-xs-12 col-sm-3 col-md-2">
          <h4>About</h4>
          <ul>
            <li><Link to="#">The Revi</Link></li>
            <li><Link to="#">For Countertop</Link></li>
            <li><Link to="#">Revi Clamp</Link></li>
            <li><Link to="#">contact Us</Link></li>
            <li><Link to="#">Press Inquiries</Link></li>
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
</div> */}

    </>
  )
}
