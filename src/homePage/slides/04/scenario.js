import steps from '../steps.js';

export default {
	share: [
		{
			range: steps.slide08,
			triggers: {
				open: (top, pr, $) => pr > 0
			}
		}
	]
}