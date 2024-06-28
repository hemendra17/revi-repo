/**
 * Page section hereToDrive
 * React && ReactDOM import powered by webpack config
 */
import Button from 'Common/button/buttonIndex.jsx'
import './topStyle.css'

function VideoProto({config}) {
	const videoWidth = innerWidth;
	const videoHeight = Math.round(innerWidth * 9 / 16);
	const videoParams = Object.entries(config.videoParams || {}).map(v=>`${v[0]}=${v[1]}`).join('&');
	const videoUrl = `//www.youtube.com/embed/${config.videoId}?${videoParams}`;

	// render
	return (<>
			<div className="for-business-page-hereToDrive-bg-player">
				<iframe  id="ytplayer-fbp" type="text/html" width={videoWidth} height={videoHeight} src={videoUrl} frameBorder="0"/>
			</div>
			<div className="for-business-page-hereToDrive-bg-player-cover"></div>
		</>);
}

// video element
const Video = React.memo(VideoProto);

/**
 * First slide element
 * @param {Object} options.config   Slide config
 * @param {Boolean} options.isMobile true for mobile view
 */
export default function ForBusinessPageHereToDrive({config, isMobile}) {
	const video = isMobile ? null : <Video config={config}/>;
	const bgStyle = config.videoId && !isMobile ? {} : {backgroundImage: `url(${config.background})`};
	const buttonStyle = {
		padding: '14px 30px',
		fontSize: '13px',
		fontFamily: 'ObjectSansBold'
	};

	return (<div className="for-business-page-hereToDrive">
			<div className="for-business-page-hereToDrive-top">
				<div className="for-business-page-hereToDrive-top-header header">{config.header}</div>
				<div className="for-business-page-hereToDrive-top-comment comment">{config.comment}</div>
				<div className="for-business-page-hereToDrive-top-buttons">
					{/*<div><Button config={config.buttons.main}/></div>*/}
					<div><Button style={buttonStyle} config={config.buttons.sec} isWhite={false}/></div>
				</div>
			</div>
			<div className="for-business-page-hereToDrive-bg" style={bgStyle}>
				{video}
				
			</div>
		</div>);
}