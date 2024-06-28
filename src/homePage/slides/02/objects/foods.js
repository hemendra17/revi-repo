// block size
const blockWidth = 236;
const blockHeight = 306;

// add new
function add(xDelta, left, data, i, steps) {
	return {
		className: 'hp-1-custom hp-1-food-block',
		steps: [
			{
				range: steps.slide05,
				add: {
					style: (top, pr, $) => ({
						top: `${$.yFrom + 750}px`,
						left: `${left + Math.round(xDelta * Math.min(1, pr+0.8))}px`,
						backgroundImage: `linear-gradient(rgba(0,0,0,.5), transparent), url(${data.food[i].url})`,
						opacity: $.chain(1, .5, .5, .5)
					})
				}		
			}
		]
	}
}


function par() {
	const xPrimInit = 768;
	const xPrim = Math.round((innerWidth - blockWidth)/ 2 );
	const xDelta = xPrim - xPrimInit;
	const primTop = Math.round((innerHeight - blockHeight) / 2);

	return {
		xPrimInit,
		xDelta,
		primTop
	}	
}

// b2foods[0..N]
export default function(data, steps) {
	// prim item center x pos


	return {
		b2food1: add(par().xDelta, 0, data, 0, steps),
		b2food2: add(par().xDelta, 256, data, 1, steps),
		b2food3: add(par().xDelta, 512, data, 2, steps),

		// MAIN FOOD
		b2food4: {
			className: 'hp-1-custom hp-1-food-block',
			style: {
				backgroundImage: `linear-gradient(rgba(0,0,0,.5), transparent), url(${data.food[3].url})`			
			},
			steps: [
				// go to the center, select, start move down
				// move down together with talking users
				{
					range: steps.slide05,
					add: {
						style: (top, pr, $) => ({
							top: `${$.chain($.yFrom + 750, $.yFrom + 750, top + par().primTop, top + par().primTop)}px`,
							left: `${par().xPrimInit + Math.round(par().xDelta * Math.min(1, pr+0.8))}px`,
						})
					},
					triggers: {
						selected: (top, pr, $) => pr > 0.3
					}	
				},
				// transform to kiosk screen
				{
					range: steps.slide06,
					add: {
						style: (top, pr, $) => ({
							top: `${top + $.pp(par().primTop, 495)}px`,
							left: `${par().xPrimInit + par().xDelta}px`,
							width: `${$.pp(blockWidth, 264)}px`,
							height: `${$.pp(blockHeight, 180)}px`,
						}),
						className: () => 'hp-1-food-block-kiosk'					
					},
					triggers: {
						selected: (top, pr, $) => true
					}
				}
			]
		},

		b2food5: add(par().xDelta, 1024, data, 4, steps),
		b2food6: add(par().xDelta, 1280, data, 5, steps),
		b2food7: add(par().xDelta, 1536, data, 6, steps),
	}
}