import { Link } from "react-router-dom";
import { useState } from 'react';

import SocialButtons from 'Common/socialButtons/socialIndex.jsx';
import './mobile.css';

export default function MobileMenuBlock({ config }) {
	const [show, update] = useState(false);
	// first menus
	const items = (config.items || []).filter(v => v && v.usage && v.usage.includes('mobile'));
	// first line menus
	const primMenus = items.map((item, index) => <div key={index} className="navbar-mobile-menu-item-1">
		{item.link
			? <a href={item.url}>{item.title}</a>
			: <Link to={item.url}>{item.title}</Link>}
	</div>);
	// second line items
	const secMenus = (config.mobile.subItems || []).filter(v => v.visible).map((item, index) => (
		<div key={index} className="navbar-mobile-menu-item-2">
			{item.socialIcons
				? <SocialButtons config={item.config} />
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
		<div className="navbar-mobile">
			<div className={`navbar-mobile-open ${show ? 'hide' : ''}`} onClick={() => update(true)}>
				<span>—</span>
				<span>—</span>
			</div>
			{/*menu box*/}
			<div className={`navbar-mobile-menu ${show ? '' : 'hide'}`}>
				<img className="navbar-mobile-menu-logo" src={config.mobile.logo} onClick={() => location.href = '/'} />
				<div className="navbar-mobile-menu-close" onClick={() => update(false)}>
					<img src={config.closeMenuImage} />
				</div>
				<div className="navbar-mobile-menu-items">
					<div className="navbar-mobile-menu-items-top">
						{primMenus}
						{secMenus}
					</div>
					<div className="navbar-mobile-menu-items-bottom">
						{loginBtn}
						{getReviBtn}
					</div>
				</div>
			</div>
		</div>
	);
}