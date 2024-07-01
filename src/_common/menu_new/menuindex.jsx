import React from 'react'
import Logo from '../../../src/images/header_logo.png'
import { Link } from 'react-router-dom'

import ManOnPhone from '../../../src/images/Man On Phone.svg'
export default function menuindex() {
  return (
    <>

<div className="navbar-wrapper">
  <div className="container">
    <nav className="navbar navbar-static-top my_nav">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <Link className="navbar-brand" to="/"><img src={Logo} alt /></Link>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li className="active"><Link to="/app">The App</Link></li>
            <li><Link to="/business">For Business</Link></li>
            <li>
              <a href="https://dashboard.zyrl.us/#/">Log in</a></li>
            <div className="icon_btn">
              <Link to="#"><img src={ManOnPhone} alt /><span>Get Revi</span></Link>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</div>

      {/* <div className="navbar-wrapper">
        <div className="container">
          <nav className="navbar navbar-static-top my_nav">
            <div className="container">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#navbar"
                  aria-expanded="false"
                  aria-controls="navbar"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <Link className="navbar-brand" to="#">
                  <img src={Logo} alt />
                </Link>
              </div>
              <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                  <li className="active">
                    <Link to="/app">The App</Link>
                  </li>
                  <li>
                  <Link to="/business">For Business</Link>
                 
                  </li>
                  <li>
                  <Link to="https://dashboard.zyrl.us/#/">Log in</Link>
                 
                  </li>

                  <div className="icon_btn">
                    <Link to="#">
                      <img src={ManOnPhone} alt />
                      <span>Get Revi</span>
                    </Link>
                  </div>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div> */}
    </>
  )
}
