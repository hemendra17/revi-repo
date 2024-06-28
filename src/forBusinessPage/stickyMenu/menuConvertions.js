/**
 * Contains functionality to convert offsets to slide index and back
 */

// 0: "for-business-page-hereToDrive -> 0"
// 1: "for-business-page-openForBusiness -> 846"
// 2: "for-business-page-simpleSeamless -> 1580"
// 3: "for-business-page-commerce -> 2443"
// 4: "for-business-page-meetCustomers -> 3604"
// 5: "for-business-page-allowCustomers -> 4923"
// 6: "for-business-page-tools -> 5875"
// 7: "for-business-page-connectWith  -> 7621"
// 8:  "for-business-page-trackSales -> 8593"
// 9:  "fbp-pad-menu -> 9770"
// 10: "fbp-pad-menu fbp-pad-menu-darkblue -> 10635"


/*
menu name (index)	|	Name							|slide index|	slide offset [mobile]
--------------------------------------------------------------------------------------------------
'On Premise' (0)	|	Simple. Seamless. Safe.			|	2		|	1580 - 300px (for menu)
'On Premise' (1)	|	Commerce revolutionized			|	3		|	2443 - 300px (for menu)
'Digital Menus' (2)	|	Meet your customers				|	4		|	3604 - 300px (for menu)
'Order Ahead' (3)	|	Allow Customers to Order Ahead	|	5		|	4923 - 300px (for menu)
'Kitchen Kit' (4)	|	Tools that make business 		|	6		|	5875 - 300px (for menu)
'Connect' (5)		|	Connect with your				|	7		|	7621 - 300px (for menu)
'Dashboard' (6)		|	Track your sales 				|	8		|	8593 - 300px (for menu)
*/


// mobile version page offsets
export const pageSlidesOffset = [1280, 2193, 3300, 4580, 5575, 7300, 8300];

// menu index -> slide index
const menuPresets = [2,3,4,5,6,7,8]; 

/**
 * Get slide index by menu index
 * @param  {Number} index Menu index
 * @return {Number}       Index of slide
 */
export function menuIndexToSlideIndex(menuIndex) {
	const index = menuIndex < 0 || menuIndex >= menuPresets.length ? menuPresets[0] : menuPresets[menuIndex];

	return index;
}

/**
 * Get menu index by slide number
 * @param  {Number} index Slide index
 * @return {Number}       Index of menu, -1 if menu don't assigned
 */
export function slideIndexToMenuIndex(index) {
	// Plan A: only active menu is highlighted
	// return menuPresets.indexOf(index);

	// Plan B: one of menu items is always highlighted
	// const mIndex = menuPresets.map(v => index > v ? 0 : 1).indexOf(1);
	// return mIndex > -1 ? mIndex : menuPresets.length-1;
	
	// Plan C: highlight only for actual slides and slides below
	const mIndex = menuPresets.map(v => index >= v ? 1 : 0).lastIndexOf(1);

	return mIndex;
}


/**
 * Convert index to page offset to scroll page
 * @param  {Number} index Menu index
 * @return {Number}       Window offset
 */
export function indexToOffsetMobile(index) {
	return index >= 0 && index < pageSlidesOffset.length ? (pageSlidesOffset[index] + 5) : pageSlidesOffset[0];
}

/**
 * Convert page offset to menu index
 * @param  {Number} offset Window offset
 * @return {Number}        Index of menu
 */
export function offsetToIndexMobile(offset) {
	const index = pageSlidesOffset.map(v=> v <= offset ? 1 : 0).lastIndexOf(1);
	// const secureIndex = index < 0 ? pageSlidesOffset.length-1 : index;

	return index;
}

/**
 * Style for select active menu box
 * @param  {Number}  menuIndex  Menu index
 * @param  {Number}  slideIndex Current slide index
 * @return {String}             CSS class
 */
export function isActive(menuIndex, slideIndex, isMobile=false) {
	// const active = (isMobile ? slideIndex : slideIndexToMenuIndex(slideIndex)) == menuIndex;
	const index = isMobile
		? offsetToIndexMobile(window.pageYOffset)
		: slideIndexToMenuIndex(slideIndex);

	return index == menuIndex ? 'active' : '';
}

/**
 * Panel offset for slides (only for mobile)
 * @param  {Number}  step     Step number
 * @param  {Boolean} isMobile true if mobile version
 * @return {Number}           Offset in px
 */
export function getLeftOffset(step, isMobile) {
	const offset = (step) * (isMobile ? 256 : 180);

	return isMobile ? offset : 0;
}

/**
 * Run function once, next time in delay msecs
 * @param  {Function} fn    Callback
 * @param  {Number}   delay Apply delay
 * @return {Function}       Calc function
 */
function throttle(fn, delay=100) {
	return function() {
		if(!throttle.blocked) {
			throttle.blocked = true;
			fn.apply(null, arguments);
			setTimeout(()=>{throttle.blocked = false;}, delay);
		}
	}
}

export class Shift {
	/**
	 * Constructor
	 * @param  {Object} ref React ref to element
	 * @param  {Function} onShift Callback on shift
	 * @return {Shift}     Object
	 */
	constructor(ref, onShift = () => {}) {
		this.startOffset = null;
		this.shiftCallback = onShift;
		if(ref.current) {
			this._ref = ref;
			this.action = throttle(this.action.bind(this));
			this.cancel = this.cancel.bind(this);
			// max offset of strip
			this.maxOffset = [...this._ref.current.children].reduce((acc,v,i, arr) => acc + (i == arr.length - 1 ? 0 : 1) * v.clientWidth, 0);

			ref.current.addEventListener('touchstart', this.action);
			ref.current.addEventListener('touchend', this.action);
			ref.current.addEventListener('touchmove', this.action);
			ref.current.addEventListener('touchcancel', this.cancel);
		}

	}

	/**
	 * Remove handlers
	 * @return {[type]} [description]
	 */
	free() {
		if(this._ref && this._ref.current) {
			this._ref.current.removeEventListener('touchstart', this.start);
			this._ref.current.removeEventListener('touchend', this.start);
			this._ref.current.removeEventListener('touchcancel', this.cancel);			
			this._ref.current.removeEventListener('touchmove', this.move);			
		}
	}

	/**
	 * Touch start && finish handler
	 * @param  {Event} evt Touch start event
	 */
	action(evt) {
		const isMoving = evt.type == 'touchmove';
		const isStart = evt.type == 'touchstart';
		const isFinish = evt.type == 'touchend';

		if(isStart) {
			this.startOffset = evt.changedTouches[0].clientX;
		}

		if((isFinish || isMoving) && this.startOffset !== null) {
			const x = evt.changedTouches[0].clientX;
			const delta = x - this.startOffset;
			const percent = delta/innerWidth;
			const _offset = Math.round(parseInt(this._ref.current.style.left) + delta);
			const offset = Math.min(0, Math.max(_offset, -this.maxOffset));

// isMoving && console.log(offset, _offset, this.maxOffset)
			this.shiftCallback({delta, percent, offset});
			this.startOffset = isMoving ? x : null;
		}
	}

	/**
	 * Force cancel handler
	 * @param  {Event} evt Cancel event
	 */
	cancel(evt) {
		this.startOffset = null;
	}
}