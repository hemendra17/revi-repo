/**
 * This menu strip will display on whole page
 */

import './sticky.css';

import Desktop from './desktop.jsx';
import Mobile from './mobile.jsx';


/**
 * Sticky menu bar
 * @param {Array} options.config   			Text items
 * @param {Boolean} options.onTop     		Menu on the top
 * @param {Boolean} options.isMobile 		true if mobile view
 * @param {Function} options.onMenuClick 	callback on menu click
 */
export default function Sticky({config, onTop=true, menuIndex=-1, isMobile, onMenuClick = () => {}}) {
	if(isMobile) {
		return <Mobile config={config} onMenuClick={onMenuClick}/>;
	} else {
		return <Desktop config={config} onTop={onTop} menuIndex={menuIndex} onMenuClick={onMenuClick}/>;
	}
}