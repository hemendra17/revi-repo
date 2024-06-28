/**
 * Scenarios (movement of blocks on the screen)!
 */
import steps from '../steps.js';

// Different blocks handlers
import cafeScene from './objects/cafes.js';
import topImages from './objects/topImages.js';
import mainCafe from './objects/mainCafe.js';

export default function(user) {
	const base = {
		// USER LOGO TRANSITION
		userLogo: {
			className: 'hp-0-right-top-image-5',
			style: {
				backgroundImage: `url(${user.stage.images[4]})`,
				backgroundRepeat: 'no-repeat',
				left: 'calc(100% / 2  + 315px)',
				top: '200px'
			},
			steps: [
				{
					range: steps.slide01,
					add: {
						style: (offset, perc, par) => ({
							left: `${Math.round(innerWidth / 2  + par.pp(315, 93))}px`,
							top: `${offset + par.pp(220,273)}px`,
							width: `${par.pp(400, 75)}px`,
							height: `${par.pp(489, 75)}px`,
							borderRadius: `${par.pp(10,50)}%`,
							backgroundSize: `${par.pp(100, user.stage.logoTransform.scale)}%`,
							packgroundPosition: `${par.pp(0, user.stage.logoTransform.bgPos[0])}px ${par.pp(0, user.stage.logoTransform.bgPos[1])}px`
						})
					}
				},
				{
					range: steps.slide02,
					add: {
						style: (offset, perc, par) => ({
							left: `calc(100% / 2  + 93px)`,
							width: `75px`,
							height: `75px`,
							borderRadius: `50%`,
							backgroundSize: `${user.stage.logoTransform.scale}%`,
							backgroundPosition: `${user.stage.logoTransform.bgPos[0]}px ${user.stage.logoTransform.bgPos[1]}px`,
							top: `${offset + 273}px`,
						})
					}
				}
			]
		},

		// block 1, user name place
		b1UserPlace: {
			className: 'hp-0-right-top-user-place',
			style: {opacity: 0},
			steps: [
				{
					range: steps.slide01, 
					add: {
						style: (offset, perc, $) => ({
							top: `${offset + 300}px`,
							left: `calc(100% / 2 + ${$.chain(1000, 800, 190)}px)`,
							opacity: Math.min(1, perc + 0.5*(perc))
						})
					}
				},
				{
					range: steps.slide02, 
					add: {
						style: (offset, perc, $) => ({
							top: `${offset + 300}px`,
							left: `calc(100% / 2 + 190px)`,
							opacity: 1
						})
					}
				}
			]
		},

		// block 1, user place comment (discover...) 
		b1UserPlaceComment: {
			className: 'hp-0-right-top-user-place-comment',
			steps: [
				{
					range: steps.slide01, 
					add: {
						style: (offset, perc, $) => ({
							top: `${offset + 420}px`,
							left: `calc(100% / 2 + ${$.pp(1000, 95)}px)`,
							opacity: Math.min(1, perc + 0.5*(perc))
						})
					}
				},				{
				range: steps.slide02, 
					add: {
						style: (offset, perc, $) => ({
							top: `${offset + 420}px`,
							left: `calc(100% / 2 + 95px)`,
							opacity: 1
						})
					}
				}
			]
		},
	};


	// add imported scenarios
	return Object.assign(base, 
		topImages(user, steps.slide01),
		/// block 1
		// secondary cafes
		cafeScene(user, steps),
		// main cafe
		mainCafe(user, steps)
	)	
}