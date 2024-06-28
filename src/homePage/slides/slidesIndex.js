/**
 * @module HomePage
 * @type Scenarios
 * @description Contains scenarios of elements transitions and slide blocks (handles by theses scenarios)
 */
import Slide1 from './01/slide.jsx';
import Slide2 from './02/slide.jsx';

// scenarios
import slide1Scenario from './01/scenario.js';
import slide2Scenario from './02/scenario.js';
import slide3Scenario from './03/scenario.js';
import slide4Scenario from './04/scenario.js';

// quick transitions - quick transition to border values
// by scrolling to defined direction [<up bound>, <down bound>, <?speed, msecs>]
// const quickTransitionsDesktop = [
// 	[0, 1284, 800], // to restaurants
// 	[1284, 2736, 400],	// to select main restaurant
// 	[2737, 4302, 600],	// to expand main restaurant to screen
// 	[4303, 5700, 600],	// to expand main restaurant to banner
// 	[5701, 6000, 400],	// prepare
// 	[6001, 6500, 600],	// to select main dish
// 	[6501, 8780, 800],	// to user's talk
// 	[8781, 10200, 800],	// to kiosk with dish
// 	[10201, 11100, 800],	// to confetti

// ];

// EXPORT
export default {
	// Slides
	Slide1,
	Slide2,
	
	// gather common scenario
	scenarios: (config, user, qssData) => Object.assign({}, 
			slide1Scenario(user), 
			slide2Scenario(qssData),
			slide3Scenario,
			slide4Scenario),

	// quickTransitions: quickTransitionsDesktop
}
