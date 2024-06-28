/**
 * Supports page scrolling for every page in app!
 * How it's work:
 * 1. Define 2 main (queue, onStepChange) - A and 3 secondary (initStep, className, lastStep) - B props
 * 2. A -> queue - the array of 2-length array, [0] - check function, [1] - index of displaying html element
 * 3. B -> start display step (if we want starts not in start slide), css class name, COUNT of slides (when count <> page sections)
 * 		lastStep = lastStep < 0 ? queue.length : lastStep.
 *
 * Supports 2 modes:
 * 1. With action array - QUEUE - it define index of actual block depends on boolean-result function, if function
 * 		is true - choosing defined step:
 * 		[
 * 			[() => false, 0] // block #0 will be skiped
 * 			[() => true, 1] // block #1 will be displayed
 * 		]
 * 2. queue == null. In this case, component automaticly use step as block index. Index overflow is blocked.
 */
import {useState} from 'react';
import PropTypes from 'prop-types';

// views
import Mobile from './mobile.jsx';
import Desktop from './desktop.jsx';

// common elements
import Menu from 'Common/menu/menuIndex.jsx';
import Footer from 'Common/footer/footer.jsx';

// css
import './pageScroll.css';

// Common config of scroller
const COMMON_CONFIG = {
	// show menu bar
	menuEnable: true,
	// blue background, white chars
	menuLightMode: false,
	// Toggle light mode on such steps.
	// Step index, not slide index. 
	// 1 slide can consist few steps, like 1 slide on homepage.
	lightModeSteps: [],
	// For mobile mode
	// Slides and steps queue model could differs from desktop. 
	lightModeStepsMobile: [],
	// logo click handler
	menuLogoClick: () => {},
	// don't collapse Revi to R
	menuCollapseLogo: true,

	// show footer
	footerEnable: true,

	// whole app config
	appConfig: {}
};

/**
 * Scroll page wrapper. By default removing menu and process footer
 * @param {Array} options.queue        Array of conditions
 * @param {Function} options.onStepChange Callback on step changed
 */
export default function Scroller({queue, onStepChange = () => {}, currentStep, className, lastStep, children, isMobile, common = {}}) {
	// current step
	const [stepIndex, updateStepIndex] = useState(currentStep || 0);
	// page on the top
	const [pageOnTop, updatePageOnTop] = useState(true);
	// base config of common elements: menu, footer
	const commonConfig = Object.assign({}, COMMON_CONFIG, common);
	// enable light mode for menu
	const lightModeSteps = isMobile
		? Array.isArray(commonConfig.lightModeStepsMobile) ? commonConfig.lightModeStepsMobile : []
		: Array.isArray(commonConfig.lightModeSteps) ? commonConfig.lightModeSteps : [];
	const isMenuLightMode = commonConfig.menuLightMode || lightModeSteps.includes(stepIndex);
	// elements
	const menuElement = commonConfig.menuEnable
		?  <Menu lightMode={isMenuLightMode}
				config={commonConfig.appConfig.menu} 
				isMobile={isMobile} 
				onLogoClick={commonConfig.menuLogoClick} 
				onTop={pageOnTop}
				collapseLogo={commonConfig.menuCollapseLogo}/>
		: null;
	const footerElement = commonConfig.footerEnable
		?  <Footer data={commonConfig.appConfig.footer} isMobile={isMobile}/>
		: null;

	// check is page on top
	function checkOnTop(newValue) {
		if(newValue != pageOnTop) {
			updatePageOnTop(newValue);
		}
	}

	// step changing handler
	function stepWasChanged(nextStep) {
		onStepChange(nextStep);
		updateStepIndex(nextStep);
	}

	// render
	// in mobile version scroll engine is disable
	return isMobile 
		? (<Mobile className={className || ''} children={children} menu={menuElement} 
					footer={footerElement} onFirstSlide={checkOnTop} onStepChange={stepWasChanged}/>)
		: (<Desktop className={className || ''} queue={queue} children={children}
			menu={menuElement} footer={footerElement} onStepChange={stepWasChanged} 
			currentStep={currentStep} lastStep={lastStep} onFirstSlide={checkOnTop}/>);
}

// check props
Scroller.propTypes = {
	queue: PropTypes.array,
	onStepChange: PropTypes.func,
	currentStep: PropTypes.number,
	className: PropTypes.string,
	lastStep: PropTypes.number
};