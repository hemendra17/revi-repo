export default function (user, steps) {
	// Main cafe
	return {
		b1CafeMain: {
			className: 'hp-0-right-top-user-cafe',
			style: {
				backgroundImage: `url(${user.stage.cafes[5].url})`,
				backgroundPosition: user.stage.cafes[5].position || 'center',
				backgroundSize: user.stage.cafes[5].scale || 'cover',
				backgroundRepeat: 'no-repeat',
			},
			steps: [
				// move to the init position
				{
					range: steps.slide01,
					add: {
						style: (offset, pr, $) => ({
							left: `calc(100% / 2 - ${270 + 20 + $.pp(1200, 0)}px)`,
							top: `${offset + 470}px`,
							opacity: pr
						})
					}
				},
				// stay, while other get transparent
				{
					range: steps.slide02,
					add: {
						style: (offset, pr, $) => ({
							left: `calc(100% / 2 - ${290}px)`,
							top: `${offset + 470}px`,
							opacity: 1
						})
					}
				},
				// expand to the whole screen with text
				{
					range: steps.slide03,
					add: {
						style: (offset, pr, $) => ({
							backgroundSize: `${$.pp(parseInt(user.stage.cafes[5].scale || 100), 100)}%`,
							backgroundPosition: 'center top',
							top: `${offset + $.pp(470,140)}px`,
							left: `${Math.round($.pp(innerWidth/2 - 290, (innerWidth - 1280)/2))}px`,
							width: `${$.pp(249, 1280)}px`,
							height: `${$.pp(304, 656)}px`,
							backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.${$.pp(0,5, {round: true})}), transparent), url(${user.stage.cafes[5].url})`,
						})
					}
				},
				// expand to the next slide baner
				{
					range: steps.slide04,
					style: {
						backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), transparent), url(${user.stage.cafes[5].url})`,
					},					
					add: {
						style: (offset, pr, $) => ({
							backgroundSize: 'cover',
							backgroundPosition: 'center top',
							top: `${offset + $.chain(140, 140, 0)}px`,
							left: `${Math.round($.chain((innerWidth - 1280)/2, (innerWidth - 1280)/2, 0))}px`,
							width: `${$.chain(1280, 1280, innerWidth)}px`,
							height: `${$.chain(656, 656, 434)}px`,
							borderRadius: `${$.pp(10, 0)}px`,
						})
					}
				}
			]
		},

		// --> in cafe blocks: title
		b1CafeMainPoint: {
			className: 'hp-0-custom-block hp-0-cafe-title',
			steps: [
				{
					range: steps.slide02,
					style: {
						opacity: 1,
					}
				},
				{
					range: steps.slide03,
					add: {
						style: (offset, perc, $) => ({
							paddingLeft: `${$.pp(20, 60)}px`,
							paddingTop: `${$.pp(20, 50)}px`,
							fontSize: `${$.pp(16, 18)}px`
						})
					}
				},
				{
					range: steps.slide04,
					add: {
						style: (offset, perc, $) => ({
							paddingLeft: `60px`,
							paddingTop: `50px`,
							fontSize: `18px`,
							opacity: $.pp(1,0)
						})
					}					
				}
			]
		},
		b1CafeMainLeft: {
			className: 'hp-0-custom-block hp-0-cafe-main-left',
			steps: [
				{
					range: steps.slide03,
					style: {
						width: '600px', 
						height: '500px', 
					},
					add: {
						style: (offset, perc, $) => ({
							opacity: $.pp(0.5, 1),
							left: `${$.pp(-1000, 0)}px`,
							top: `100px`
						})
					}
				},
				{
					range: steps.slide04,
					style: {
						width: '600px', 
						height: '500px', 
					},
					add: {
						style: (offset, perc, $) => ({
							opacity: $.pp(1, 0.5),
							left: `${$.chain(0, 0, 0, 0, 0, -1000)}px`,
							top: `100px`
						})
					}
				}				
			]
		},
		b1CafeMainRight: {
			className: 'hp-0-custom-block hp-0-cafe-main-right',
			steps: [
				{
					range: steps.slide03,
					style: {
						width: '600px', 
						height: '500px', 
						top: '100px'
					},
					add: {
						style: (offset, perc, $) => ({
							opacity: perc,
							right: `${$.pp(-1000, 0)}px`,
						})
					}
				},
				{
					range: steps.slide04,
					style: {
						width: '600px', 
						height: '500px', 
						top: '100px'
					},
					add: {
						style: (offset, perc, $) => ({
							opacity: $.chain(1,1,1,0.5),
							right: `${$.chain(0, 0, 0, 0, 0, -1000)}px`,
						})
					}
				}				
			]
		}
	}
}
