export default function(data, steps) {
	return {
		// user left - open balloon first
		b2u1: {
			className: 'hp-1-custom hp-1-talking-user',
			steps: [
				{
					range: steps.slide05,
					add: {
						style: (top, pr, $) => ({
							top: `${top + Math.round(innerHeight / 2)}px`,
							right: `${Math.round(innerWidth / 2) + $.pp(3000, 350)}px`,
							opacity: $.chain(0.5, 1, 1)
						})
					},
					triggers: {
						show: (top, pr, $) => pr > 0.1
					}
				}
			]
		},
		// user left - open balloon next
		b2u2: {
			className: 'hp-1-custom hp-1-talking-user',
			steps: [
				{
					range: steps.slide05,
					add: {
						style: (top, pr, $) => ({
							top: `${top + Math.round(innerHeight / 2)}px`,
							left: `${$.pp(3000 + Math.round(innerWidth / 2), 350 + Math.round(innerWidth / 2))}px`,
							opacity: $.chain(0.5, 1, 1)
						})
					},
					triggers: {
						show: (top, pr, $) => pr > 0.6
					}
				}
			]
		}
	}
}