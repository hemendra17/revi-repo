import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone } from '@fortawesome/free-solid-svg-icons';
// import logo from '../../images/header_logo.png'; // Ensure this path is correct
import '/src/css/main.css'; // Ensure this path is correct

export default function Navbar() {
  return (
   <nav className="navbar navbar-static-top my_nav">
  <div className="container">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar" />
        <span className="icon-bar" />
        <span className="icon-bar" />
      </button>
      <a className="navbar-brand" href="#"><img src="images/header_logo.png" alt /></a>
    </div>
    <div id="navbar" className="navbar-collapse collapse">
      <ul className="nav navbar-nav">
        <li className="active"><a href="#">The App</a></li>
        <li><a href="#">For Business</a></li>
        <li><a href="#">Log in</a></li>
        
        <div className="icon_btn">
          <a href="#"><img src="images/Man On Phone.svg" alt /><span>Get Revi</span></a>
        </div>
      </ul>
    </div>
  </div>
</nav>

  );
}
