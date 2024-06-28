import {useState, useEffect, useRef} from 'react';
import * as menu from './menuConvertions.js';

/**
 * menu item component
 * @param {String} options.text  Caption
 * @param {Number} options.i     Index of menu item
 * @param {Function} options.resetOffset Reset manual offset handler
 * @param {Number} options.step Get current slide index
 */
function MenuItem({text, i, resetOffset, step}) {
	// on menu item click
	function onClick() {
		window.scrollTo(0, menu.indexToOffsetMobile(i));
		resetOffset(null);
	}
	// get sub class
	const subClass = menu.isActive(i, step, true);

	return (<span 
		className={`sticky-menu-item ${subClass}`} 
		onClick={onClick}>{text}</span>);
}

/**
 * Sticky menu bar for mobile view
 * @param {Array} options.config   Text items
 * @param {Function} options.onMenuClick callback on menu click
 */
export default function Sticky({config, onMenuClick = () => {}}) {
	const bar = useRef(null); // bind to menu bar
	const [step, updateStep] = useState(0);
	const [offsetLeft, updateLeftOffset] = useState(null);
	const [mobileScrolled, updateScrolled] = useState(false);

	// convert submenu to sticked bar (no css {position:sticky} here)

	// LEFT, px -> only for mobile
	const left = offsetLeft !== null ? -offsetLeft : menu.getLeftOffset(step, true);
	// update sctive menu in mobile mode
	const updateMobileMenuIndex = () => {
		const innerIndex = menu.offsetToIndexMobile(window.pageYOffset);

		if(innerIndex != step) {
			updateStep(innerIndex);
		}		
	};

	// menu items on the strip
	const stripItems = config.map((text,i) => <MenuItem key={text} text={text} i={i} step={step} resetOffset={updateLeftOffset}/>)
	// on submenu bar shift (mobile only)
	const barShift = (data) => updateLeftOffset(data.offset > 0 ? 0 : data.offset);

	// on element created
	useEffect(() => {
		// submenu touchmove controller
		const shifter = new menu.Shift(bar, barShift);
		const mobileCheckHeight = 670;

		function onScroll(evt) {
			if(window.pageYOffset >= mobileCheckHeight && !mobileScrolled) {
				updateScrolled(true);
			} else {
				if(window.pageYOffset < mobileCheckHeight && mobileScrolled) {
					updateScrolled(false);
				}
			}

			// update step; mobile mode only
			updateMobileMenuIndex();
		}

		window.addEventListener('scroll', onScroll);
		return () => {
			window.removeEventListener('scroll', onScroll);
			shifter && shifter.free();
		}
	});

	return (<div className={`sticky-manual ${mobileScrolled ? 'menu-fix' : ''}`} data-scroller="ignore">
			<div ref={bar} className="sticky-wrap" style={{left: `-${left}px`}}>
				{stripItems}
			</div>
		</div>);
}