import { useEffect, useMemo, useRef } from 'react';
import Scroller, { throttleScroll } from 'Hand/pageScroller/control.js';
import processScenario from './processing.js';
import Scrolling from './scrollingproc.js';
import {
	offsetToSlideIndex,
	toggleBodyStyle,
	inRange,
	oneOfRange
} from './utils.js';
import Menu from 'Common/menuNew/menuIndex.jsx';
import Footer from 'Common/footer/footer.jsx';


/**
 * Configuration of inner data
 * @type {Object}
 */
const SCM_CONF = {
	// mobile version
	isMobile: false,
	// element filtering on page
	blocksFilter: () => true,
	// menu in light mode 
	menuLightMode: (offset, isMobile, $) => false,
	// menu transparent background (overload light mode check)
	menuTransparent: (offset, isMobile, $) => false,
	// menu logo click
	menuLogoClick: (evt) => { },
	// don't collapse Revi to R (DESKTOP ONLY)
	menuCollapseLogo: (offset, $) => true,
	// quick transition boundaries
	transitBoundaries: []
}

// params for scrolling
const scrollParams = {
	// no native scroll handler
	blockNativeScrolling: true,
	// no callback throtteling
	throttleDelay: 0,
};

/// scroll wait timer
let observeTimer = 0;
/// scroll processor
let scrollProc = null;

/**
 * Smooth scroll motion engine
 * @param {Object}   options.appConfig 			App config data
 * @param {Object}   options.scenarios 			Object of scenarios
 * @param {Function} options.updateRequest      Callback; fires on event needs to update scenario
 * @param {Function} options.scroll            	Callback of scroll
 * @param {Array}   options.children           	Nested elements
 * @param {String}   options.className         	CSS class name for container
 * @param {Object} options.setup 	     		Setup behavior of display
 */
export default function Scm({ appConfig = {}, scenarios = {}, updateRequest = () => { }, scroll = () => { }, children, className = '', setup = {} }) {
	const ref = useRef(null);
	const CONFIG = Object.assign({}, SCM_CONF, setup);
	// scroll control handler
	const control = useMemo(() => new Scroller(scrollParams), []);

	// define element params
	function adjustElements(offset = 0) {
		if (ref.current) {
			const index = offsetToSlideIndex(ref, offset, CONFIG.blocksFilter);
			const scenarioKeys = Reflect.ownKeys(scenarios);
			const output = {};

			// looking for available scenarios
			scenarioKeys.forEach(key => {
				const scenario = scenarios[key];

				output[key] = processScenario(scenario, offset, index)
			});
			// fire callback
			scroll(initProxy(output));
		} else {
			console.warn('Ref to element is undefined');
		}
	}

	// init positions
	useEffect(() => {
		adjustElements(window.pageYOffset);
		// scroll handler initialized only once!
		if (scrollProc == null) {
			scrollProc = new Scrolling(CONFIG.isMobile);
		}
	}, [scenarios]);

	// every recreate
	useEffect(() => {
		// on scroll handler
		function onScroll(evt, event, mobOffset = 0) {
			if (isFinite(evt)) {
				scrollProc.scrollRequest(evt, event, mobOffset, adjustElements, CONFIG.isMobile ? [] : CONFIG.transitBoundaries);
			} else {
				clearTimeout(observeTimer);
				// for finish adjust of elements - wait
				observeTimer = setTimeout(() => adjustElements(Math.round(window.pageYOffset)), 200);
			}
		}

		// on resize
		function onResize(evt) {
			window.scrollBy(0, 0);
			updateRequest();
			adjustElements(window.pageYOffset, evt || Date.now());
		}


		// page scroll controller
		control.activate(onScroll);

		// window handler - for scrollbar handling
		window.addEventListener('scroll', onScroll);
		window.addEventListener('resize', onResize);

		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onResize);

			control.deactivate();
			toggleBodyStyle(false);
		}
	});

	// use as support for external config
	const exportParams = { inRange: inRange, oneOfRange: oneOfRange };

	// * RENDER *
	return (<div ref={ref} className={className}>
		{/* <Menu lightMode={CONFIG.menuLightMode(pageYOffset, CONFIG.isMobile, exportParams)}
					transparent={CONFIG.menuTransparent(pageYOffset, CONFIG.isMobile, exportParams)}
					config={appConfig.menu} 
					isMobile={CONFIG.isMobile} 
					onLogoClick={CONFIG.menuLogoClick}
					onTop={pageYOffset < 100}
					collapseLogo={CONFIG.menuCollapseLogo(pageYOffset, exportParams)}/> */}
		<Menu />
		{children}
		<Footer data={appConfig.footer} isMobile={CONFIG.isMobile} />
	</div>);
}

// using for operate with scroll engine primary params
const emptyObject = {
	style: {},
	className: '',
	active: false,
	triggers: {}
};

/// proxy for init object
export function initProxy(init = {}) {
	return new Proxy(init, {
		get: function (target, name) {
			return name in target ? target[name] : emptyObject;
		}
	});
}