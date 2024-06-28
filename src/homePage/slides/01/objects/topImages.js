/**
 * Create handlers for top elements
 * @param  {Object} user Config
 * @param  {Array} range  Action range
 * @return {Object}      Prepared data
 */
export default function(user, range) {
	return {
			// block 1, image 1
		b1i1: {
			className: 'hp-0-right-top-image-1',
			style: {
				top: '165px'
			},
			steps: [
				{
					range: range,
					add: {
						style: (offset, perc, par) => ({
							left: `${Math.round(innerWidth / 2  + 544 * Math.max(0.5, 1-perc))}px`,
							opacity: par.chain(1, 0.8, 0.5)
						})
					}
				}
			]
		},
		// block 1, image 2
		b1i2: {
			className: 'hp-0-right-top-image-2',
			style: {
				top: '306px'
			},
			steps: [
				{
					range: range,
					add: {
						style: (offset, perc, par) => ({
							left: `${Math.round(innerWidth / 2  + 180 * (0.5 + perc))}px`,
							opacity: par.chain(1, 0.8, 0.5)
						})
					}
				}
			]
		},
		// block 1, image 3
		b1i3: {
			className: 'hp-0-right-top-image-3',
			style: {
				top: '315px'
			},
			steps: [
				{
					range: range,
					add: {
						style: (offset, perc, par) => ({
							left: `${Math.round(innerWidth / 2  + 451 * Math.max(0.5, 1-perc))}px`,
							opacity: par.chain(1, 0, 0, 0)
						})
					}
				}
			]
		},
		// block 1, image 4
		b1i4: {
			className: 'hp-0-right-top-image-4',
			style: {
				top: '277px'
			},
			steps: [
				{
					range: range,
					add: {
						style: (offset, perc, par) => ({
							left: `${Math.round(innerWidth / 2  + 433 * Math.max(0.5, 1-perc))}px`,
							opacity: par.chain(1, 0, 0, 0)
						})
					}
				}
			]
		},
		// block 1, image 6
		b1i6: {
			className: 'hp-0-right-top-image-6',
			style: {
				top: '560px'
			},
			steps: [
				{
					range: range,
					add: {
						style: (offset, perc, par) => ({
							left: `${Math.round(innerWidth / 2  + 233 * Math.max(0.5, 1-perc))}px`,
							opacity: par.chain(1, 0.8, 0.5)
						})
					}
				}
			]
		},	
	}
}