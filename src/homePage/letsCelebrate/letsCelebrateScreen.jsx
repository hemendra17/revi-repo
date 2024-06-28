import LetsCelebtrateMobile from './mobile.jsx';
import LetsCelebtrateDesktop from './desktop.jsx';

/**
 * Create celebrate screen
 * @param {Boolean} options.firstShow On first show - shows curtain
 * @param {Object} options.user      User info (logo and favorite cafe name needs)
 * @param {Object} options.config    Configuration of component
 */
export default function LetsCelebreateScreen({firstShow, user, config, isMobile}) {
	return isMobile 
			? <LetsCelebtrateMobile firstShow={firstShow} user={user} config={config}/>
			: <LetsCelebtrateDesktop firstShow={firstShow} user={user} config={config}/>
}