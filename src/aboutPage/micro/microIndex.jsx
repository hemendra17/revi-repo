import {useState} from 'react';
/**
 * MICRO slide
 */
import Slider from 'Common/cardSlider/sliderIndex.jsx';

import './micro.css';

/**
 * Uno card
 * @param {Object} options.data Item data
 * @param {Number} options.pos  0 if current, -1 if before current, +1 if after current
 */
function Card({data, pos}) {
	// update text data
	function improve(text) {
		return {
			__html: text.replace(/MICRO/g, '<b>MICRO</b>').replace(/\n/g, '<br/><br/>')
		}
	}

	const letterBox = pos == 0 
			? null
			: <div className={`micro-card-body-hidden ${pos > 0 ? 'to-right' : 'to-left'}`}>{data.letter}</div>;
	const primBox = pos == 0 
			? (<div className="micro-card-body-prim">
					<div className="micro-card-body-prim-header header-int">{data.header}</div>
					<img className="micro-card-body-prim-image" src={data.imageURL}/>
					<div className="micro-card-body-prim-comment" dangerouslySetInnerHTML={improve(data.text)}></div>
				</div>)
			: null;

	return (<div className="micro-card-body">{letterBox}{primBox}</div>);
}

/**
 * MICRO slider with cards - element
 * @param {Object} options.config   Common config
 * @param {Boolean} options.isMobile true if mobile device
 */
export default function Micro({config, isMobile}) {
	const [slide, update] = useState(0);
	const myCards = config.items.map((v,i) => <Card key={i} data={v} pos={i-slide}/>);
	const sliderConfig = {
		cards: myCards,
		onCardChange: (index) => {update(index)},
		scaleInactiveK: 0.8,
		height: 508,
		width: 609,
		noOpacity: true,
		showArrows: false,
		switchDelay: config.switchDelay,
		margin: 115,
		view: 'deck-progressive',
		toggleOnClick: true
	};

	return isMobile ? null : (<div className="micro flexcolumn">
			<div className="micro-title header-int">{config.title}</div>
			<div className="micro-comment comment">{config.comment}</div>
			<Slider config={sliderConfig}/>
		</div>);
}