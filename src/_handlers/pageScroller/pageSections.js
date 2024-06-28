/**
 * Extract all page sections
 * Calc scroll boundaries
 * include/exclude menu & footer
 *
 * getScrollData - allow define offset of page
 */

/**
 * Get list of block's vertical aligns from custom ref
 * @param  {Object} ref    Ref to React element
 * @param  {Object} params Params of elements removing
 * @return {Array}         Array of html blocks
 */
export function getSectionsOffsets(ref, params = {removeMenuFirst: true, removeFooterLast: false}) {
	let items = ref && ref.current ? [...ref.current.children] : [];

	if(params.removeMenuFirst && items.length > 0) {
		items = items.slice(1);
	}

	if(params.removeFooterLast && items.length > 1) {
		items = items.slice(0, -1);
	}

	return items;	
}

/**
 * Extract every child (except menu) height and top offset
 * @param  {React.Ref} ref Ref to element
 * @return {Array}     Array of items {height, top}
 */
export function getBlocksList(ref) {
	const items = getSectionsOffsets(ref);

	return items.filter(v => v.dataset.scroller !== 'ignore').map(v=>({top: v.offsetTop, height: v.clientHeight}));
}

/**
 * Execute action on scroll data
 * 
 * Supports static mode: queue - is array of condition->index; if condition is true - uses defined step;
 * Supports DYNAMIC mode: instead of array uses STEP number => app uses defined step
 * 
 * @param  {Arary} queue	   {Array: [<function() => true/false>, <active block index>] OR} {step index}
 * @param  {Object}   ref      Ref to element
 * @param  {Object}   params   Params of scrolled elements query
 * @return {Object}            {offset (in pixels), isLast (if it's maximal avialiable offset), totalTitems (blocks count)}
 */
export function getScrollData (queue=[], ref, params = {removeMenuFirst: true, removeFooterLast: false, isMobile: false}) {
	const _items = getSectionsOffsets(ref, params);
	// child nodes, except with attribute data-scroller="ignore"
	const items = _items.filter(v => v.dataset.scroller !== 'ignore');
	// calculations
	const screenHeight = params.isMobile ? screen.availHeight : innerHeight;
	const itemsHeight = _items.reduce((acc, item) => acc + item.clientHeight, 0);
	// max offset = actual items + ignored items
	const maxOffset = Math.max(0, itemsHeight - screenHeight);

	// operational params
	let currentItem = null;
	let offset = 0;
	let isLast = false;

	// queue is array
	if(Array.isArray(queue)) {
		// find offset
		for(let index=0, len=queue.length; index<len; index++) {
			if(queue[index][0]()) {
				currentItem = items[index];
				offset = items[index] ? items[index].offsetTop : 0;
				break;
			}
		}		
	}

	// queue is step index
	if(typeof queue == 'number' && items[queue]) {
		currentItem = items[queue];
		offset = currentItem.offsetTop;
	}

	// offset can't be more then max offset
	if(maxOffset <= offset) {
		isLast = true;
		offset = maxOffset;
	}

	// slide height
	const slideHeight = currentItem ? currentItem.clientHeight : -1;
	// how px from lower border of displayed data till slide bottom border
	const leftHeight = Math.max(0, slideHeight - screenHeight);
	const hysteresis = 50;

	return {
		offset,
		isLast,
		totalItems: items.length,
		// total slide height
		slideHeight,
		// offset to scroll to end of silde
		tailOffset: slideHeight > (screenHeight+hysteresis) ? offset + leftHeight: 0,
	};
}

/**
 * Score slide offset depends on user action
 * @param  {Object} slideData 	Action info
 * @param  {Number} dir       	Value of direction
 * @param  {Number} slideOffset Offset of slide
 * @return {Object}           	Data of offset
 */
export function getSlideOffset(slideData, dir, slideOffset) {
	// movement
	const fromTopAndOnTop = dir == 1 && slideOffset == slideData.offset;
	const fromTopAndOnBottom = dir == 1 && slideOffset == slideData.tailOffset;
	const fromBottomAndOnBottom = dir == -1 && slideOffset == slideData.tailOffset;
	const fromBottomAndOnTop = dir == -1 && slideOffset == slideData.offset;

	// prevent scroll
	const prevent = (slideData.tailOffset > 0) && (fromTopAndOnTop || fromBottomAndOnBottom);
	const offset = fromTopAndOnTop || fromBottomAndOnTop
					? slideData.tailOffset
					: slideData.offset;

	return {
		offset,
		preventStepChange: prevent,
	}
}