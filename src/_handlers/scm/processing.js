/**
 * Module contains scenario processing functionality
 * @module SCM.Processing
 */

/**
 * Calculate numeric proportion
 * @param  {Float}  part   0..1 - percantage
 * @param  {Number}  start  Start value
 * @param  {Number}  finish Finish value
 * @param  {Object} params  params of proportions
 * @return {Number}         Calculated value
 */
function proportions(part, start, finish, params = {}) {
	const _params = {
		round: true,
		interpol: 'linear', // ease-in, ease-out, ...
	};

	const myParams = Object.assign({}, _params, params);
	let calcs = start + (finish - start) * part;

	/**
	 * @todo Add different types of interpolations
	 */

	return myParams.round ? Math.round(calcs) : calcs;
}

/**
 * Calc value from few params
 * === May be interpoatoin types should add here ? ===
 * @param  {Float}    part     0..1 - percentage
 * @param  {...Number} values   2 and more params
 * @return {Number}             Calculated value
 */
function chain(part, ...values) {
	if(values && values.length > 1) {
		const first = Math.floor((values.length-1) * part);
		const last = first + 1;
		const delta = 1 / (values.length-1);

		// linear interpolation
		return first == values.length - 1
			? values[values.length - 1]
			: values[first] + (values[last] - values[first]) * ((part - first * delta) / delta);

	} else {
		throw new Error('Incorrect boundaries');
	}
}

/**
 * Process element's scenarion and calc it's style and class name
 * @param  {Object} scenario 		Scenario definition object
 * @param  {Number} nextOffset   	Y scroll to position
 * @param  {Number} index    		Current block index (optional used)
 * @return {Object}          		Object with data: active, current style and current class name
 */
export default function(scenario, nextOffset, index) {
	let steps = [];
	let className = '';
	let style = {};
	let activeStep = -1;

	// short - array, full - object
	if(Array.isArray(scenario)) {
		steps = scenario;
	} else {
		steps = scenario.steps;
		className = (scenario.always || {}).className || scenario.className || '';
		style = (scenario.always || {}).style || scenario.style || {};
	}

	// check for errors
	if(!Array.isArray(steps) || steps.length < 1) {
		throw new Error('Don\'t enough steps in scenario');
	}

	// calc every scenario
	const stepper = steps.map((step, stepIndex) => {
		let myStyle = Object.assign({}, style);
		let myClassName = className;
		let triggers = {};

		// default for range - 0..body height
		const stepRange = step.range || [0, document.body.clientHeight];
		const range = [Math.min.apply(null, step.range), Math.max.apply(null, step.range)];
		const reverse = stepRange[0] > stepRange[1];

		const stepOffset = Math.min(Math.max(range[0], nextOffset), range[1]);
		const percent = (reverse ? 1 : 0) + (reverse ? -1 : 1) * (stepOffset - range[0]) / (range[1] - range[0]);

		// using every inner fn call
		const fnParams = [
				// y offset
				stepOffset,
				// offset in perecent by range 
				percent,
				// additional params
				{
					// page offset
					pageOffset: nextOffset,
					// slide index
					slideIndex: index,
					// current range
					yFrom: stepRange[0],
					yTo: stepRange[1],
					// prepared proportions calculation
					pp: proportions.bind(null, percent),
					// chain calculations per percentage progress
					chain: chain.bind(null, percent)
				}
			];

		/// overload params (style, className) - replace basic to current

		// style
		myStyle = typeof step.style == 'object' && step.style !== null ? step.style : style;
		// className
		myClassName = typeof step.className == 'string'? step.className : className;

		// additional params
		if(step.add) {
			// style
			if(typeof step.add.style === 'function') {
				const newStyle = step.add.style.apply(null, fnParams);

				myStyle = Object.assign({}, myStyle, newStyle);
			}
			// class name
			if(typeof step.add.className === 'function') {
				const newClassName = step.add.className.apply(null, fnParams);

				myClassName = myClassName + ' ' + newClassName;
			}
		}

		// have triggers
		if(step.triggers && typeof step.triggers == 'object') {
			Object.entries(step.triggers).forEach(([key, fn]) => {
				if(typeof fn == 'function') {
					triggers[key] = fn.apply(null, fnParams);
				}
			});
		}

		// is step is active
		let isActive = nextOffset >= range[0] && nextOffset <= range[1];

		// last active slide
		activeStep = isActive ? stepIndex : activeStep;

		// result
		return {
			active: isActive,
			style: myStyle,
			className: myClassName,
			triggers,
			// service data
			stepRange
		}
	});

	// if no active steps - get closest
	if(activeStep < 0) {
		const fromTom = Math.abs(nextOffset - stepper[0].stepRange[0]);
		const fromBottom = Math.abs(nextOffset - stepper[stepper.length - 1].stepRange[1]);

		activeStep = fromTom > fromBottom ? stepper.length - 1 : 0;
	}

	// active OR first actual OR default params
	return stepper[activeStep] || {style, className, active: true, triggers};
}