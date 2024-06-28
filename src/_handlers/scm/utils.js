/**
 * Get block index by scroll
 * @param  {ReactRef}   ref            Ref to root element
 * @param  {Number}   offset         Y offset
 * @param  {Function} blocksFilterFn Filter blocks
 * @return {Number}                  Index of slide (block)
 */
export function offsetToSlideIndex(ref, offset, blocksFilterFn = (block, index) => true) {
	let index = -1;
	const enterOffset = offset + Math.round(innerHeight / 4);

	if(ref.current) {
		const blocks = [...ref.current.children].filter(blocksFilterFn);

		for(let i=0; i < blocks.length; i++) {
			const element = blocks[i];

			if(enterOffset >= element.offsetTop && enterOffset < (element.offsetTop + element.clientHeight)) {
				index = i;
				break;
			}
		}
	}

	return index;
}

/**
 * Check value in range
 * @param  {Number} value  Compared value
 * @param  {Number} start  Start pos
 * @param  {Number} finish Finish pos
 * @return {Boolean}       If value in range - true
 */
export function inRange(value, start, finish) {
	return start <= value && value <= finish
}

/**
 * Check value in one of ranges
 * @param  {Number}    value  Compared value
 * @param  {...Array} ranges  Arrays of ranges
 * @return {Boolean}          If value in one of ranges - true
 */
export function oneOfRange(value, ...ranges) {
	const check = ranges.some(range => {
		if(!range || !Array.isArray(range) || range.length < 2) {
			throw new Error('Invalid range, should be like this: [0, 1]');
		}

		return inRange(value, range[0], range[1]);
	});

	return check;
}

/**
 * Enable and disable scrolling styles for body
 * @param  {Boolean} enable true if enabled
 */
export function toggleBodyStyle(enable = true) {
	if(enable) {
		document.body.style.setProperty('overflow-x', 'hidden');
		document.body.style.setProperty('overflow-y', 'auto');
		document.body.style.setProperty('transition', '.2 all');
	} else {
		document.body.style.removeProperty('overflow-x');
		document.body.style.removeProperty('overflow-y');
		document.body.style.removeProperty('transition');
	}
}