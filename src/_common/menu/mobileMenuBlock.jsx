import {Link} from "react-router-dom";
import {useState} from 'react';

import SocialButtons from 'Common/socialButtons/socialIndex.jsx';
import './mobile.css'
import '../../css/main.css'

export default function MobileMenuBlock({config}) {
	const [show, update] = useState(false);
	// first menus
	const items = (config.items || []).filter(v=>v && v.usage && v.usage.includes('mobile'));
	// first line menus
	const primMenus = items.map((item, index) => <div key={index} className="navbar-mobile-menu-item-1">
			{item.link 
				? <a href={item.url}>{item.title}</a>
				: <Link to={item.url}>{item.title}</Link>}
		</div>);
	// second line items
	const secMenus = (config.mobile.subItems || []).filter(v=>v.visible).map((item, index) => (
			<div key={index} className="navbar-mobile-menu-item-2">
				{item.socialIcons
					? <SocialButtons config={item.config}/>
					: <Link to={item.url}>{item.title}</Link>}
			</div>
		));
	// bottom buttons
	const genButton = (item, className) =>
				item.url.startsWith('/')
					? <Link to={item.url}><div className={className}>{item.title}</div></Link>
					: <a href={item.url}><div className={className}>{item.title}</div></a>;

	const loginBtn = config.mobile.loginButton.visible
			? genButton(config.mobile.loginButton, "navbar-mobile-menu-items-bottom-login")
			: null;
	const getReviBtn = config.mobile.getReviButton.visible
			? genButton(config.mobile.getReviButton, "navbar-mobile-menu-items-bottom-getrevi")
			: null;

	// render
	return (
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
          <a className="navbar-brand" href="#"><img src="../images/header_logo.png" alt /></a>
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
  </div>
</div>


	
	);
}