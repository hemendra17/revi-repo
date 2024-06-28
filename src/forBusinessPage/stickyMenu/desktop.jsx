import {desktop} from './offsets.js';

/**
 * menu item component
 * @param {String} options.text  		Caption
 * @param {Function} options.click 		Click handler
 * @param {Number} options.index     	Index of menu item
 * @param {Boolean} options.active 		If active == true
 */
function MenuItem({text, click, index, active}) {
	// slide scrolling
	const scrollTo = desktop[index]+1;
	const scrollBefore = pageYOffset + (pageYOffset > desktop[index] ? -1 : 1) * (desktop[index] / 2);

	// render
	return (<span 
		className={`sticky-menu-item ${active ? 'active' : ''}`} 
		onClick={() => {
			window.scrollTo(0, scrollBefore);
			requestAnimationFrame(() => window.scrollTo(0, scrollTo));
		}}>{text}</span>);
}

/**
 * Sticky menu bar for mobile view
 * @param {Array} options.config   			Text items
 * @param {Array} options.top   			Top position
 * @param {Number} options.menuIndex		Index of menu
 * @param {Function} options.onMenuClick 	callback on menu click
 */
export default function Sticky({config, onTop=true, menuIndex=-1, onMenuClick = () => {}}) {
	// menu items on the strip
	const stripItems = config.map((text,i) => <MenuItem key={text}
													text={text}
													active={i == menuIndex}
													index={i}
													click={onMenuClick}/>);

	// render
	return (<div className={`sticky-menu ${onTop ? 'sticky-menu-narrow' : ''}`} style={{top: `${top}px`}}>
			<div className="sticky-wrap">
				{stripItems}
			</div>
		</div>);
}