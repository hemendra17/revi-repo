/**
 * Menu component
 */
import {Link} from "react-router-dom";

import DesktopMenuBlock from './desktopMenuBlock.jsx';
import MobileMenuBlock from './mobileMenuBlock.jsx';

import './navbar.css';

/**
 * Main menu block
 * @param {Booelan}  options.lightMode    If true - blue background, white text
 * @param {Object}  options.config       Element config
 * @param {Boolean}  options.isMobile     true for mobile
 * @param {Function}  options.onLogoClick  On logo click handler
 * @param {Boolean} options.onTop        Enable special menu display on the top
 * @param {Boolean} options.collapseLogo Collapse logo from Revi to R on scroll
 * @param {Boolean} options.transparent  Background is transparent
 */
export default function Menu({lightMode, config, isMobile, onLogoClick, onTop=false, collapseLogo=true, transparent=false}) {
	// LAYOUT
	const colorModeClass = lightMode ? 'color-scheme-white' : 'color-scheme-red';
	const mobileModeClass = isMobile ? 'mobile' : '';
	const scrolledDownStyle = onTop ? 'on-the-top' : 'navbar--scrolled';
	const nonCollapsedLogoClass = isMobile || collapseLogo ? '' : 'non-collapse-logo';
	const menuClass = `navbar ${colorModeClass} ${mobileModeClass} ${scrolledDownStyle} ${nonCollapsedLogoClass}`.trim();

	// selection appropriate menu block
	const menuBlock = isMobile
			? <MobileMenuBlock config={config}/>
			: <DesktopMenuBlock config={config}/>;

	// icon for menu
	const icon = isMobile
		// mobile
		? lightMode ? config.logoUrlWhite : config.logoUrlTangerine
		// desktop
		: lightMode 
			? (onTop || !collapseLogo ? config.logoPrimUrlMainWhite : config.logoUrlMainWhite)
			: (onTop || !collapseLogo ? config.logoPrimUrlMainTangerine : config.logoUrlMainTangerine);

	// menu direct style
	const menuStyle = {};

	if(transparent) {
		menuStyle.backgroundColor = 'transparent';
	}

	// Logo click => go to the home page/init state of home page
	function defaultLogoClick() {
		if(location.hash === '#/') {
			location.reload()
		}
	}

	// render
	return (<div className="navbar--wrap">
				<nav className={menuClass} style={menuStyle}>
					<Link to="/">
						<img 
							className="navbar--logo" src={icon} 
							alt="Revi logo" 
							onClick={() => onLogoClick ? onLogoClick() : defaultLogoClick()}/>
					</Link>
					{menuBlock}
				</nav>
			</div>);
}