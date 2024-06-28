import {useState, useEffect, useRef} from 'react';
/**
 * Page section simpleSeamless
 * React && ReactDOM import powered by webpack config
 */
import Slider from 'Common/slider/sliderIndex.jsx';
import Button from 'Common/button/buttonIndex.jsx';
import './simpleSeamlessStyle.css'

/**
 * Card item
 * @param {Object} options.item   Config of card
 * @param {Boolean} options.active if true, slide will be force marked as active
 */
function Card({item, onSelect = () => {}, active = false}) {
	const style = {backgroundImage: `url(${active ? item.urlActive : item.url})${active ? ', linear-gradient(#000648, #000b62)' : ''}`};

	return (<div className={`fbpss-slider-card ${Boolean(active) ? 'main' : ''}`} onClick={onSelect}>
			<div className="fbpss-slider-card-img" style={style}></div>
			<div className="fbpss-slider-card-text">{item.title}</div>
			{active && <div className="fbpss-comment-2 comment">{item.comment}</div>}
		</div>);
}

/**
 * Device line slide component
 * @param {Object} options.config   Slide config
 * @param {Boolean} options.isMobile true for mobile view
 * @param {Boolean} options.isActive true, if slide is active
 * @param {Number} options.initProd Index of active product, null - for auto mode
 */
export default function ({config, isMobile, isActive, initProd = null}) {
	// horizontal offset calcs
	function getOffset(index) {
		const mainWidth = 595 + 36;
		const secWidth = 430 + 36;

		return Math.round((innerWidth - mainWidth)/2 - index*secWidth);
	}

	// active card
	const [cardIndex, updateCardIndex] = useState(initProd === null ? config.initSlide || 0 : initProd);
	// slider configuration
	const sliderConfig = {
		startSlide: cardIndex,
		sizes: {width: 365, padding: 18},
		noActivation: true,
		// for mobile config
		isMobile,
		delay: config.timeout,
		slideInCenter: true,
	};
	// available cards
	const cards = config.items.map((v,i) => <Card key={i} item={v} active={i === cardIndex} onSelect={() => updateCardIndex(i)}/>);
	// on select style (desktop)
	const cardsSliderStyle = isMobile 
			? {}
			: {left: `${getOffset(cardIndex)}px`, position: 'relative', transition: '.2s all'};

	const buttonConfig = Object.assign({}, config.button, {title: config.items[cardIndex].buttonTitle});
	// initProd handler - if initProd will set to slide - it will be reloaded
	useEffect(() => {
		if(typeof initProd == 'number') {
			updateCardIndex(initProd)
		}
	}, [initProd]);

	return (<div className="for-business-page-simpleSeamless">
			<div className="fbpss-header header-int">{config.header}</div>
			<div className="fbpss-comment comment">{config.comment}</div>
			<div className={`fbpss-slider ${(isActive || isMobile) ? '' : 'fbpss-slider-collapsed'}`}>
				<div className={isMobile ? '' : 'fbpss-slider-toleft'} style={cardsSliderStyle}>
					<Slider cards={cards} config={sliderConfig} onChange={updateCardIndex}/>
				</div>
			</div>
			<div className="fbpss-buttons">				
					<Button config={buttonConfig}/>
			</div>
		</div>);
}

	