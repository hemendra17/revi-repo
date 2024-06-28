// Scenarios
export default function(revive) {
	return {
		main: [
			{
				range: [0, 500],
				className: 'app-page-revieve',
				add: {
					style: (top, pr, $) => ({						
							backgroundImage: `linear-gradient(rgba(0,0,0,.5), transparent), url(${revive.background})`,
							width: `${$.chain(innerWidth, innerWidth, 326)}px`,
							height: `${$.pp(553, 573)}px`,
							// left: `${$.pp(0, Math.round((innerWidth - 326) / 2))}px`,
							top: `${$.pp(0, 762)}px`,
							borderRadius: `${$.pp(0, 10)}px`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							display: `${pr < 1 ? 'block' : 'none'}`
						})
				},

				triggers: {
					// show middle image
					imageReady: (top, pr, $) => pr == 1,
					// main banner content opacity
					bannerOpacity: (top, pr, $) => $.chain(1,1,0)
				}
			}
		],

		// other triggers
		other: [
			{
				range: [2000, 4500],
				triggers: {
					moveCafes: (top, pr, $) => pr > 0,
					popConfetti: (top, pr, $) => top >= 3000,
					balloons: (top, pr, $) => top >= 4000,
					balloonsMobile: (top, pr, $) => pr == 1
				}
			},
		]
	}
}