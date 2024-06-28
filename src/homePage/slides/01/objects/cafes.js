function template(user, index, cnt, x, y, steps) {
	return {
		className: 'hp-0-right-top-user-cafe',
		style: {
			backgroundImage: `url(${user.stage.cafes[index].url})`,
			backgroundPosition: user.stage.cafes[index].position || 'center',
			backgroundSize: user.stage.cafes[index].scale || 'cover',
		},
		steps: [
			{
				range: steps.slide01,
				add: {
					style: (offset, pr, $) => ({
						left: `calc(100% / 2 - ${270*cnt + x + $.pp(1200, 0)}px)`,
						top: `${offset + y}px`,
						opacity: pr
					})
				}
			},
			{
				range: steps.slide02,
				add: {
					style: (offset, pr, $) => ({
						left: `calc(100% / 2 - ${270*cnt + x}px)`,
						top: `${offset + y}px`,
						opacity: Math.max(1-pr, 0.5)
					})
				}
			}
		]		
	}
}

/**
 * Exports befavior for 5 static cafes
 * @param  {Object} user User config
 * @return {Object}      Config
 */
export default function(user, steps) {
	return {
		b1Cafe1: template.apply(null, [user, 0, 3, 0,  145, steps]),
		b1Cafe2: template.apply(null, [user, 1, 2, 0,  145, steps]),
		b1Cafe3: template.apply(null, [user, 2, 1, 0,  145, steps]),
		b1Cafe4: template.apply(null, [user, 3, 3, 20, 470, steps]),
		b1Cafe5: template.apply(null, [user, 4, 2, 20, 470, steps]),
	}
}