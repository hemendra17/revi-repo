/**
 * Special button, which provides different behaviour accorfing config
 */
import {Link} from "react-router-dom";

/**
 * Link button
 * @param {String} options.link      url to address
 * @param {String} options.title     Button title
 * @param {Object} options.style 	 Object additional style
 * @param {String} options.className Class name
 * @return {ReactComponent} Button element
 */
function LinkButton({link, title, style={}, className='revi-button', blank=false}) {
	return link.startsWith('/')
		? <Link className={className} style={style} to={link}>{title}</Link>
		: <a className={className} style={style} href={link} target={blank ? '_blank' : '_self'}>{title}</a>
}

/**
 * Export new button
 * @param {Object} options.config 		Button config {title, link, blank} or {title,click()}
 * @param {Boolean} options.isWhite 	true if button should be white
 * @param {Object} options.style 		Custom style overload
 */
export default function Button({config, style={}, isWhite=false}) {
	const className = isWhite ? 'revi-button-white' : 'revi-button';
	let element = <span className={className}>Button don't specified</span>;

	// if .link is present - it's a link button
	if(config.link) {
		element = <LinkButton style={style} link={config.link} title={config.title} className={className}/>
	} else {
		// if .click is present - it's a button
		if(config.click) {
			element = <button style={style} className={className}>{config.title}</button>
		}
	} 

	return element;
}