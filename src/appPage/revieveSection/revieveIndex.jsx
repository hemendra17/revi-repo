
/**
 * Page section revieve
 * React && ReactDOM import powered by webpack config
 */

import './revieveStyle.css'


export default function({config={}, track={}, isMobile}) {
	const mobileStyle = {
		backgroundImage: `linear-gradient(rgba(0,0,0,.5), transparent), url(${config.background})`
	};
	const onProcessStyle = {
		opacity: 'bannerOpacity' in (track.main.triggers || {}) && !isMobile ? track.main.triggers.bannerOpacity : 1
	};

	return (<div className="app-page-revieve-wrap flexcolumn">
		<div className={track.main.className} style={isMobile ? mobileStyle : track.main.style}>		
			<div style={onProcessStyle} className="app-page-revieve-header">{config.header}</div>
			<div style={onProcessStyle} className="app-page-revieve-download">
				<a href={config.buttonLink} className="revi-button button-bold" target="_blank">{config.buttonText}</a>
			</div>
		</div>
	</div>);
}

	