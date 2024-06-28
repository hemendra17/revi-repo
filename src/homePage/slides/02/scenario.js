import steps from '../steps.js';
import foods from './objects/foods.js';
import talkingUsers from './objects/users.js';

/// Exported scenatio
export default function(data) {
	const main = {
		b2Order: {
			className: 'hp-1-custom hp-1-order-block',
			steps: [
				{
					range: steps.slide06,
					add: {
						style: (top, pr, $) => ({
							top: `${top + $.pp(900, 300)}px`,
							opacity: pr
						})
					},
					triggers: {
						imgLeftOffset: (top, pr, $) => $.pp(0, -250),
						imgRightOffset: (top, pr, $) => $.pp(0, 400)
					}
				}
			]
		}
	};

	return Object.assign(main, 
			foods(data, steps),
			talkingUsers(data, steps)
		);
}