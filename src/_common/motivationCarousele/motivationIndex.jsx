import {useState} from 'react';
/**
 * Page section reviNotOnlyHelpers
 * React && ReactDOM import powered by webpack config
 */
import CardSlider from 'Common/cardSlider/sliderIndex.jsx';
import './motivation.css'

function Card({config, active=false, isMobile}) {
	let element = null;

	switch(config.cardType) {
		case 'image':
			element = <img src={isMobile ? config.urlMobile : config.url} className="motivation-carousele-slider-image"/>
			break;
		case 'video':
			const size = isMobile ? config.data.mobile : config.data.desktop;
			// https://developers.google.com/youtube/player_parameters
			const url = `//www.youtube.com/embed/${config.data.code}?rel=0&modestbranding=1&fs=0&wmode=opaque&origin=http://getrevi.com`;
			const html = {__html: `<iframe class="motivation-carousele-slider-image" type="text/html" width="${size[0] || 100}" height="${size[1] || 100}" src="${url}" frameborder="0"/>`};

			element = <div className="flexcolumn" dangerouslySetInnerHTML={html}></div>
			break;
	}
	return (<div>
				{element}
				{(active && config.comment && config.comment.length) && <div className="motivation-carousele-slider-comment">{config.comment}</div>}
			</div>);
}


/**
 * Create motivation carousel slider
 * @param {Object} options.config   Config of items
 * @param {Boolean} options.isMobile true if mobile
 */
export default function MotivationCarousele({config, isMobile}) {
	const initIndex = config.initItemIndex || 0;
	const [index, update] = useState(initIndex);
	// current item 
	const item = config.items[index];
	// have we some comments ?
	const haveComments = config.items.some(v => v.comment && v.comment.length > 0);
	// slider config 
	const csConfig = {
		cards: config.items.map((v,i) => <Card key={i} config={v} active={i==index} isMobile={isMobile}/>),
		height: isMobile ? 300 : 380,
		width: isMobile ? 390 : 571,
		margin: isMobile ? 0 : 20,
		scaleInactiveK: 0.8,
		isMobile,
		initIndex,
		onCardChange: (no) => update(no),
		minimalHeight: haveComments ? (isMobile ? 380 : 420) : 'auto'
	};

	// render
	return (<div className="motivation-carousele flexcolumn">
			<div className="motivation-carousele-header header-int-white">{item.header}</div>
			<div className="motivation-carousele-owner">
				<div className="motivation-carousele-owner-logo">
					<img className="motivation-carousele-owner-logo-image" src={item.owner.logo}/>
				</div>
				<div className="motivation-carousele-owner-titles flexcolumn">
					<div className="motivation-carousele-owner-titles-name">{item.owner.name}</div>
					<div className="motivation-carousele-owner-titles-cafe">{item.owner.cafe}</div>
				</div>
			</div>
			<div className="motivation-carousele-slider">
				<CardSlider config={csConfig}/>
			</div>
		</div>);
}

	