export default class {
	constructor(isMobile) {
		// default scrolling params
		this.defaults = {
			step: isMobile ? 20 : 5,
			offset: 150,
			iterations: 30
		}
		// quick transition boundaries
		this.boundaries = [];
		// priority label
		this.priority = 0;
		// current scroll params
		this._scroll_ = null;
		// caller callback notifier
		this.notifier = (param) => {console.warn(`Offset to ${param}`)};
	}

	/**
	 * Find quick transition valid boundary
	 * @param  {Number} nextStep Additional offset
	 * @return {Array}          [from, to, ?timing] or null
	 */
	findBoundary(nextStep = 0) {
		let boundary = null;

		for(let i=0; i < this.boundaries.length; i++) {
			const bounds = this.boundaries[i];
			const checkValue = window.pageYOffset + nextStep;

			if(Array.isArray(bounds) && bounds[0] <= checkValue && checkValue <= bounds[1]) {
				boundary = bounds;
				break;
			} 
		}

		return boundary;
	}

	/**
	 * Check for too many scroll requests was performed
	 * @return {Boolean} true if allow
	 */
	getActualScrollOffset(event) {
		let yOffset = 0;

		switch(event.deltaMode) {
			// for touchpad scroll wil be shorter
			case event.DOM_DELTA_PIXEL:
				yOffset = Math.min(Math.abs(event.deltaY), this.defaults.offset);
				break;

			// mouse scroll in firefox
			case event.DOM_DELTA_LINE:
				yOffset = this.defaults.offset;
				break;

			case event.DOM_DELTA_PAGE:
				yOffset = innerHeight;
				break;

			default:
				yOffset = this.defaults.offset;
		}

		return yOffset;
	}

	/**
	 * Add request to scroll page
	 * @param  {Number} dir 			1 - move down, -1 - move up
	 * @param  {Event} event 			event object
	 * @param  {Number} mobileOffset 	Value of mobile offset
	 * @param  {Function} callback 		Function calls on scroll
	 * @param  {Array} boundaries 		Quick transition boundaries
	 */
	scrollRequest(dir, event, mobileOffset = 0, callback = this.notifier, boundaries=[]) {
		// [1] update callback
		if(typeof callback == 'function') {
			this.notifier = callback;
		} else {
			throw new Error('Reference error: callback param should be a function.');
		}

		// [2] update boundaries
		if(Array.isArray(boundaries)) {
			this.boundaries = boundaries;
		} else {
			throw new Error('Boundaries param should be [[int,int] ... or ... [int, int, int]]');
		}

		// cases for ignore request - border values
		const ignoreCall = (pageYOffset == 0 && dir < 0) || 
							(dir > 0 && pageYOffset > (document.body.scrollHeight - innerHeight) - 10);

		if(!ignoreCall) {
			// next position offset value
			const nextOffset = mobileOffset || this.getActualScrollOffset(event) || 0;
			// get bounds of turn end
			const actualBounds = this.findBoundary(nextOffset * dir);
			// flag for moving to on of the bounds
			const boundMoving = Array.isArray(actualBounds) && actualBounds.length >= 2;
			// if we have bounds - scroll to nearest pos
			// otherwise scroll to defined value
			const scrollDelta = boundMoving
				? actualBounds[dir > 0 ? 1 : 0] - window.pageYOffset
				: nextOffset * dir;
			// get operation timing
			const timing = boundMoving && actualBounds.length > 2 ? actualBounds[2] : 200;

			/// -->	attempt to start scroll
			this.go(scrollDelta, timing, boundMoving ? Date.now() : 0);
		}
	}

	/**
	 * Init scroll process. While prioritized (with `priority` != 0) 
	 * process is executed - other processes are ignores.
	 * @param  {Number} value  Next position
	 * @param  {Number} timing Desirable time to complete operation
	 * @param  {Number} priority  Priority label: 0 for simple scroll, !=0 - for prioritized call
	 */
	go(value, timing, priority = 0) {
		// check to start scrolling process or it already in progress
		const paused = this._scroll_ == null;

		// could be reseted or appended
		if(this.priority == 0 || this.priority == priority) {
			this._scroll_ = {
				value : this._scroll_ && this.priority == 0 ? this._scroll_.value + value : value,
				timing, 
				timestamp: Date.now()
			};
		
			this.priority = priority;
		}

		// if process was paused - start it
		// otherwise it already in process
		if(paused) {
			this.__scrolling();
		}
	}

	/**
	 * Private scrolling function;
	 * Process page scrolling according `_scroll_` param.
	 */
	__scrolling() {
		// scroll could process only if we have any scroll params
		if(this._scroll_ && 'value' in this._scroll_) {
			// -1/0/1 sign of current value
			const initSign = Math.sign(this._scroll_.value);
			// in timing cases offset should recalc every call for speed actuality (16 msec per request)
			const timingSteps = isFinite(this._scroll_.timing) ? Math.max(1, Math.round((this._scroll_.timing - (Date.now() - this._scroll_.timestamp)) / 16)) : 0;
			const recomendedOffset = isFinite(this._scroll_.timing) ? Math.round(this._scroll_.value / timingSteps) : this.defaults.step;
			// scroll offset could not be more then left offset value
			// for smooth, maximal offset could not be > 50 px
			const scrollOffset = initSign * Math.min(50, Math.abs(recomendedOffset), Math.abs(this._scroll_.value));
			const beforeScrollOffset = Math.round(window.pageYOffset);

			// next scroll position
			this._scroll_.value = Math.round(this._scroll_.value - scrollOffset);

			// notify caller
			this.notifier(window.pageYOffset + scrollOffset);
			// move screen to next pos
			window.scrollBy(0, scrollOffset);

			// if Y offset was not changed - screen reached borders
			if(beforeScrollOffset == Math.round(window.pageYOffset)) {
				this._scroll_.value = 0;
			}

			// check for next turn
			if(this._scroll_.value != 0) {
				requestAnimationFrame(() => this.__scrolling());
			} else {
				// reset engagement params
				this._scroll_ = null;
				this.priority = 0;
			}
		}
	}
}