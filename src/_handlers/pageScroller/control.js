/**
 * Control page handler
 * Handle window events and emit direction-oriented events
 * Check for action and run binded callback!
 */

/**
 * Read user scroll offset summary and inform about final movement
 * @param  {Function} fn    Callback
 * @param  {Number}   delay Apply delay
 * @return {Function}       Calc function
 */
function debounceScroll(fn, delay=100) {
	let timeout = 0;
	let summary = 0;

	return function(value) {
		clearTimeout(timeout);
		summary += value;
		timeout = setTimeout(() => {
			fn(summary > 0 ? 1 : summary < 0 ? -1 : 0);
			summary = 0;
		}, delay);
	}
}

///----------------------------------------------------

/**
 * Run function once, next time in delay msecs
 * @param  {Function} fn    Callback
 * @param  {Number}   delay Apply delay
 * @return {Function}       Calc function
 */
export function throttleScroll(fn, delay=100) {
	return function(value) {
		if(!throttleScroll.blocked) {
			throttleScroll.blocked = true;
			fn(value > 0 ? 1 : value < 0 ? -1 : 0);
			setTimeout(()=>{throttleScroll.blocked = false;}, delay);
		}
	}
}


/// ScrollHandler config params
const defaultParams = {
	blockNativeScrolling: true,
	throttleDelay: 600, // 0 for NO_THROTTLEING
};


/**
 * Handler class of user scrolling
 */
export default class ScrollHandler {
	/**
	 * Constructor
	 * @param  {Object} params 	Configuration object
	 * @return {ScrollHandler}            Instance
	 */
	constructor(params = {}) {
		// configured scroll handler
		this.__params = Object.assign({}, defaultParams, params);
		// inner params``
		this.touch = null;
		// bind functions to current context
		this.innerScrolHandler = this.innerScrolHandler.bind(this);
		this.innerTouchHandler = this.innerTouchHandler.bind(this);

		// window scroll listener
		window.addEventListener('wheel', this.innerScrolHandler, {passive: false});
		// touch handlers
		window.addEventListener('touchstart', this.innerTouchHandler, {passive: false});
		window.addEventListener('touchmove', this.innerTouchHandler, {passive: false});
		window.addEventListener('touchend', this.innerTouchHandler, {passive: false});
		window.addEventListener('touchcancel', this.innerTouchHandler, {passive: false});
	}

	/**
	 * Activate controller for use in scrolling
	 * @param  {Function} callback Scroll callback
	 */
	activate(callback) {
		this.touchHandler = callback;
		this.scrollHandler = this.__params.throttleDelay == 0 
			? callback
			: throttleScroll(callback, this.__params.throttleDelay);
	}

	/**
	 * Deactivate from use
	 */
	deactivate() {
		this.scrollHandler = () => {};
	}

	/**
	 * Touch handler
	 * @param  {Event} event touch event
	 */
	innerTouchHandler(event) {
		const touches = event.changedTouches || event.targetTouches || [{clientX: 0}];

		switch(event.type) {
			case 'touchstart':
				if (touches && touches[0]) {
					this.touch = {
						initTouch: touches[0].clientY,
						timestamp: Date.now(),
						start: touches[0].clientY, 
						finish: null
					};
				}
				break;

			case 'touchmove': 
				// move notify
				if(this.touch) {
					const value = Math.round(this.touch.start - touches[0].clientY);
					const dir = Math.sign(value);

					this.touch.start = touches[0].clientY;
					this.touchHandler(dir, event, Math.abs(value));
				}
				break;

			case 'touchend': 
				if(this.touch && touches && touches[0]) {
					this.touch.finish = touches[0].clientY;
				}
				break;

			case 'touchcancel': 
				touchPosition = null;
				break;
		}

		if(this.touch && this.touch.start != null && this.touch.finish != null && this.touchHandler) {
			const delta = this.touch.start - this.touch.finish;
			const dir = delta < 0 ? - 1 : delta > 0 ? 1 : 0;

			this.touchHandler(dir, event, Math.abs(delta));

			// scroll booster
			const totalDelta = this.touch.initTouch - this.touch.finish;
			const time = Date.now() - this.touch.timestamp;
			// ethalonized according to screen height 812 px
			// minmal speed will not provide boost
			const boostReducer = 0.6 * (innerHeight / 812);
			const speedBoost = Math.max(0, Math.abs(totalDelta) / time - boostReducer);

			// for high speed increase offset
			if(speedBoost > 0) {
				const value = Math.round(innerHeight * speedBoost)

				this.touchHandler(Math.sign(totalDelta), event, Math.abs(value));
			}

			this.touch = null;
		}
	}

	/**
	 * Scroll handler
	 * @param  {Event} event scroll event
	 */
	innerScrolHandler(event) {
		if(this.scrollHandler) {
			this.scrollHandler(event.deltaY < 0 ? - 1 : event.deltaY > 0 ? 1 : 0, event);
		}

		// is defaults should be prevented?
		this.__params.blockNativeScrolling && event.preventDefault();
	}

	/**
	 * Destructor
	 */
	free() {
		this.touchHandler = null;
		this.scrollHandler = null;

		// window scroll listener
		window.removeEventListener('wheel', this.innerScrolHandler, {passive: false});
		// touch handlers
		window.removeEventListener('touchstart', this.innerTouchHandler, {passive: false});
		window.removeEventListener('touchmove', this.innerTouchHandler, {passive: false});
		window.removeEventListener('touchend', this.innerTouchHandler, {passive: false});
		window.removeEventListener('touchcancel', this.innerTouchHandler, {passive: false});			
	}
}

/**
 * Make bezier function for smooth scrolling
 * @param  {Number} p0 P0
 * @param  {Number} p1 P1
 * @param  {Number} p2 P2
 * @param  {Number} p3 P3
 * @param  {Number} t  0..1
 * @return {Number}    Calced value
 */
function cubicBezier(p0, p1, p2, p3, t) {
	return Math.pow(1-t, 3)*p0 + 3*t*Math.pow(1 - t, 2)*p1 + 3*Math.pow(t, 2)*(1 - t)*p2 + Math.pow(t, 3)*p3;
}

/**
 * Create a row of offsets to scroll slide
 * @param  {Number} topFrom   start y pos
 * @param  {Number} topTo     finish y pos
 * @param  {Number} moveSteps count of transition steps
 * @return {Array}            Array of positions
 */
export function getScrollPath(topFrom = 0, topTo = 0, moveSteps = 1) {
	const p0 = 0;
	const p1 = 0;
	const p2 = 0.45;
	const p3 = 1;
	const delta = topTo - topFrom;
	const steps = [];

	for(let index = 0; index < moveSteps; index++) {
		const t = (index + 1) / moveSteps;
		const cbValue = cubicBezier(p0, p1, p2, p3, t);
		const nextStep = Math.round(topFrom + delta*cbValue);

		steps.push(nextStep);
	}

	// last step - defined <to>
	steps[steps.length - 1]  = topTo;

	return steps;
}