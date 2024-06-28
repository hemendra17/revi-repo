
/**
 * Page section become
 * React && ReactDOM import powered by webpack config
 */

import Confetti from 'Common/confetti/indexConfetti.jsx';
import './becomeStyle.css'

export default function AppPageBecome({config, isMobile, init=false}) {
	const confettiStyle = {
		width: `${config.confettiSize[0]}px`,
		height: `${config.confettiSize[1]}px`,
		left: `-${Math.round(config.confettiSize[0]/4)}px`,
		top: `-${Math.round(config.confettiSize[1]/7)}px`,
		//backgroundImage: isMobile ? `url(${config.confetti})` : 'none'
	};

	const mobileConfettiStyle = Object.assign({}, confettiStyle, {
		display: isMobile ? 'inherit' : 'none',
		top: '-56px',
		left: '-625px',
		height: '800px',
		overflow: 'hidden'
	});

	// using SVG image to provide custom rounded text
	const r1StyleImage = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="150" height="150" viewBox="0 0 150 150"><path id="curve" d="M20,70 A50,50 0 0 1 130,70" fill="rgba(0,0,0,0)"/> <text width="400" font-size="12" font-family="Arial" fill="#fefefe"><textPath xlink:href="#curve">${config.achiveText}</textPath></text></svg>`;
	const r1Style = {
		backgroundImage: `url(data:image/svg+xml;base64,${btoa(r1StyleImage)})`
	};

	// render
	return (<div className="app-page-become">
			<div className="app-page-become-info">
				<div className="app-page-become-info-heart" style={{backgroundImage: `url(${config.heartImage})`}}>
					<div className="app-page-become-medal-confetti" style={mobileConfettiStyle}></div>
				</div>
				<div className="app-page-become-info-header">{config.header}</div>
				<ul className="app-page-become-info-list">
					{config.rewardsList.map((text, index) => <li key={index} style={{backgroundImage: `url(${config.bulletImage})`}}>{text}</li>)}
				</ul>
			</div>

			<div className="app-page-become-medal">
				<div className="app-page-become-medal-prim">
					<div style={{position: 'absolute'}}>
						<div className="app-page-become-medal-prim-ribbon ribbon-1">1</div>
						<div className="app-page-become-medal-prim-ribbon ribbon-2">2</div>
						<div className="app-page-become-medal-prim-r1" style={r1Style}>
							<div 
								className="app-page-become-medal-prim-r2"
								style={{backgroundImage: `url(${config.heartImage})`}}>
							</div>
						</div>
					</div>
				</div>
				<div className="app-page-become-medal-sec">
					<div style={{backgroundImage: `url(${config.selectedItem})`}}></div>
				</div>
				<div className="app-page-become-medal-third">
					<div style={{backgroundImage: `url(${config.selectedItem})`}}></div>
				</div>
				<div className="app-page-become-medal-confetti" style={confettiStyle}></div>
			</div>
			<Confetti config={config.confettiConfig} start={init} z={100}/>			
		</div>);
}

	