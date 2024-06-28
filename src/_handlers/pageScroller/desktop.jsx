/**
 * Desktop scroller handler
 */
import {useEffect, useRef, useReducer} from 'react';
// functionality
import ScrollHandler, {getScrollPath} from './control.js';
import {getScrollData, getSlideOffset} from './pageSections.js';

// Page scroller config
const CONFIG = {
	stepsCount: 45, // 16msec * 45 = 720 msec to process scrolling
	enableCSSTransitions: false, // use css transitions instead of JS-smooth scrolling
};


/**
 * Reducer for page update
 * @param  {Object} state  Current state
 * @param  {Object} action {type: 'action type', data: 'custom data'}
 * @return {Object}        New state
 */
function reducer(state, action={}) {
	const newState = {...state};
	let nextTop = null;

	if(action.type == 'STEP') {
		newState.step = action.data;
		// reset manual offset!!!
		newState.manualOffset = 0;
	}

	if(action.type == 'OFFSET') {
		nextTop = newState.manualOffset || action.data;
		newState.offset = action.data;
	}

	if(action.type == 'MANUAL_OFFSET') {
		nextTop = action.data || newState.offset;
		newState.manualOffset = action.data;
	}

	if(action.type == 'DIR') {
		newState.dir = action.data;
	}

	if(action.type == 'MOVE_NEXT') {
		const isAllow = state.scrollPath && state.scrollPath.length > 1;

		newState.scrollPath = isAllow ? state.scrollPath.slice(1) : null;
	}

	// calculated fields
	if(nextTop !== null) {	
		const noScrollPath = state.topOffset == nextTop || CONFIG.enableCSSTransitions;

		newState.topOffset = nextTop;
		// scroll path don't calc for css transitions
		newState.scrollPath = noScrollPath
			? null
			: getScrollPath(state.topOffset, newState.topOffset, 45);
	}

	return newState;
}

// params, using to define scroll rules
const DESKTOP_SECTION_SCROLL_PARAMS = {
	removeMenuFirst: true, 
	removeFooterLast: false, 
	isMobile: false
};

/**
 * Desktop version of page scroller
 * @param {Array/Number/Null} options.queue        Queue handler
 * @param {String} options.className    Class name for nested element
 * @param {ReactElement} options.menu         Menu element
 * @param {Array} options.children     React nested elements
 * @param {ReactElement} options.footer       Footer element
 * @param {Number} options.currentStep  Current step
 * @param {Number} options.lastStep     Last availible step
 * @param {Function} options.onStepChange Step change callback
 * @param {Function} options.onFirstSlide Fires, when page on the first slide
 */
export default function Desktop({queue, className, menu, children, footer, currentStep, lastStep, onStepChange, onFirstSlide=() => {}}) {
	// page init state
	const INIT_DATA = {
		// current step index
		step: currentStep || 0,
		// screen offset in px
		offset: 0,
		// last scroll direction
		dir: 0,
		// offset setted manually
		manualOffset: 0,
		// real top offset
		topOffset: 0,
		// scroll path
		scrollPath: null
	};
	// page control
	const [page, update] = useReducer(reducer, INIT_DATA);
	// ref to container
	const ref = useRef(null);	

	// on create/destroy
	useEffect(() => {
		// calculated page offset
		const pageOffset = getScrollData(queue || page.step, ref, DESKTOP_SECTION_SCROLL_PARAMS);
		// manual reset step
		const isResetStep = currentStep != undefined && currentStep != page.step;
		// init on slide changed
		const needReinitOffset = pageOffset.offset != page.offset && !page.manualOffset;

		// set slide step from outside
		if(isResetStep) {
			onStepChange(currentStep);
			update({type: 'STEP', data: currentStep});
		}

		// set init page offset
		if(needReinitOffset) {
			update({type: 'OFFSET', data: pageOffset.offset});
		}

		// scroll controller handler
		function scrollController(dir) {
			// last avialiable step
			const LAST_STEP = lastStep && lastStep >= 0 
								? lastStep
								: Array.isArray(queue)
									? queue.length - 1
									: pageOffset.totalItems;
			// steps
			const limitStep = Math.min(LAST_STEP, pageOffset.isLast ? page.step : Infinity);
			const nextStep = Math.max(0, Math.min(page.step + dir, limitStep));
			// ladder stepper
			const ladder = getSlideOffset(pageOffset, dir, page.manualOffset || page.offset);
			const allowSetManualOffset = !Array.isArray(queue) && ladder.preventStepChange;

			// if slide too tall && no queue array mode - it will be scrolled by sizes
			if(allowSetManualOffset) {
				update({type: 'MANUAL_OFFSET', data: ladder.offset});
			}

			// new step
			// 	previously - set parent step (if it's have mean)
			// 	secondary - update component step state
			if(nextStep != page.step && !allowSetManualOffset) {
				/* - action order is important - */
				// notify parents
				onStepChange(nextStep);
				// update state
				update({type: 'STEP', data: nextStep});
				// update last direction
				update({type: 'DIR', data: dir});
			}
		}

		// page scroll handler
		const control = new ScrollHandler(scrollController);
		// check first slide on top + hysteresis(5)
		onFirstSlide((page.manualOffset || page.offset) < 5);

		return () => {
			control.free();
		};
	});

	// This is smooth scrolling processor
	// work only if css transitions was disabled
	const allowJSTransition = !CONFIG.enableCSSTransitions && page.scrollPath && page.scrollPath.length > 0;
	 
	if(allowJSTransition) {
		requestAnimationFrame(() => update({type: 'MOVE_NEXT'}));
	}

	// calced top value
	const top = (page.scrollPath && page.scrollPath.length) ? page.scrollPath[0] : page.topOffset;
	const bodyClass = `scrollable-section-body ${CONFIG.enableCSSTransitions ? 'scrollable-section-body-transition' : ''}`;

	// render
	return (<section className={`scrollable-section ${className || ''}`}>
			<div className={bodyClass} ref={ref} style={{top: `-${top}px`}}>
				{menu}
				{children}
				{footer}
			</div>
		</section>);	
}