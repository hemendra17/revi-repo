import steps from '../steps.js';
// Starts confetti falling only
export default {
	celebrate: [
		{
			range: steps.slide07,
			triggers: {
				start: (top, pr, $) => pr > .2
			}
		}
	]
}