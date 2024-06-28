import {useState, useEffect} from 'react';
import './cardSlider.css';

/**
 * Этот прокрутчик сделан с прицелом на листалку MICRO
 * Однако, его надо будет доработать
 * Добавить режим колоды карт - она пока опущена за ненадобностью
 */

/**
 * Switcher line handler. Uses only for mobile version
 * @param {Array}    options.cards    Slided card elements
 * @param {Boolean}  options.isMobile true in mobile mode
 * @param {Function} options.click    callback to switch card
 */
function Switcher({cards=[], slide, isMobile = false, click=() =>{}}) {
	const getClassName = (index) => `card-slider-point ${slide === index ? 'active' : ''}`
	const mapping = cards.map((v,i) => <div key={i} className={getClassName(i)} onClick={() => click(i)}></div>);

	return isMobile ? (<div className="card-slider-switcher">{mapping}</div>) : null;
}


/// Default config of card slider
const configDefault = {
	cards: [], // items, react elements
	initIndex: 0, // index of first card which should to display
	showArrows: true, // show arrows on sides
	trackLine: 'bottom', // ['top','bottom','none'] - only for mobile version
	onCardChange: (cardIndex) => {}, // callback on card change
	isMobile: false, // enable mobile version
	scaleInactiveK: 1, // size of every inactive element will be smaller from previous in K times
	noOpacity: false, // inactive cards have no opacity
	height: 200, // slider height in px
	width: 200, // length of card in px
	margin: 10, // margins between cards (left && right)
	cardSubscriptElement: null, // element will be displayed under picture
	switchDelay: -1, // cards will switch to next in <switchDelay> msec, -1 == disable
	view: 'line', // ['line', 'deck', 'deck-progressive'] - types of items organization; margin is defining in <margin>
	toggleOnClick: false, // toggle slide clicking card
	minimalHeight: -1, // minimal card height, px; -1 - auto
}

/**
 * Card slider element. Good for display any cards and slide them
 * @param {Object} options.config Config (look configDefault for params)
 */
export default function CardSlider({config={}}) {
	// config of slider
	const data = Object.assign({}, configDefault, config);
	// start index
	const initIndex = data.initIndex || 0;
	// slide controll state
	const [index, update] = useState(initIndex >= data.cards.length || initIndex < 0 ? 0 : initIndex);

	// card click callback
	function cardClick(i) {
		return function(evt) {
			if(data.toggleOnClick) {
				update(i);
				config.onCardChange(i);
			}
		}
	}

	// card switcher for mobile mode
	const switcher = <Switcher cards={data.cards} slide={index} isMobile={data.isMobile} click={i => {update(i); config.onCardChange(i);}}/>;
	// current items
	const items = data.cards.map((v,i,arr) => {
		const offset = Math.abs(index - i);
		const sK = data.scaleInactiveK;
		const k = +(Math.pow(sK, offset)).toFixed(3);
		const prevOffset = Math.round(offset > 0 ? Array(offset).fill(0).reduce((acc, val, _i) => acc + data.width*Math.pow(sK, _i+1),0) : 0);
		const prevsLeftK = offset < 1
				? 0
				: +Array(offset-1).fill(0).reduce((acc, val, kx) => acc + 1-Math.pow(sK, kx+1),0).toFixed(3);

		// +(Math.pow(sK, Math.max(0, offset-1))).toFixed(3); 
		const style = {
			transform: `scale(${k})`,
			transformOrigin: `${index == i ? 'center' : index < i ? 'left' : 'right'} center`,
			zIndex: data.cards.length - offset,
			opacity: (i == index || data.noOpacity) ? 1 : k,
			width: `${data.width}px`,
			cursor: data.toggleOnClick ? 'pointer' : 'default',
			minHeight: data.minimalHeight >= 0 ? `${data.minimalHeight}px` : 'auto',
			// 
			overflow: 'hidden'
		};

		// align card's wrappers
		if(index != i) {
			let vOffset = 0;

			switch(data.view) {
				case 'deck':
					vOffset = Math.round(data.width*prevsLeftK) + prevOffset - data.margin*offset;
					break;
				case 'deck-progressive':
					vOffset = Math.round(data.width*prevsLeftK + prevOffset - data.margin*offset*Math.pow(0.9, offset-1));
					break;
				// line
				default:
					vOffset = Math.round(data.width*prevsLeftK) - data.margin*offset;
			}

			style[index < i ? 'left' : 'right'] = `${-vOffset}px`;
		}

		// render
		return (<div key={i} onClick={cardClick(i)} className={`card-slider-card-wrap`} style={style}>{v}</div>);
	});
	// center offset
	const offsetLeft = Math.round(innerWidth/2 - data.width * (index + 0.5));
	
	// toggle next silde
	const next = (e) => {
		const ndx = index >= data.cards.length - 1 ? 0 : index + 1; 

		update(ndx);
		config.onCardChange(ndx);
	};
	// toggle prev slide
	const previous = () => {
		const ndx = index > 0 ? index - 1 : data.cards.length - 1; 

		update(ndx);
		config.onCardChange(ndx);
	};

	// autoswitch
	useEffect(() => {
		const timeout = Number.isFinite(data.switchDelay) && data.switchDelay > -1 
				? setTimeout(next, data.switchDelay)
				: 0;

		return () => {
			clearTimeout(timeout);
		}
	});

	// render
	return (<div className="card-slider-wrap" style={{height: `${data.height}px`}}>
				{data.trackLine === 'top' && switcher}
				<div className={`card-slider`} style={{marginLeft: `${offsetLeft}px`}}>
					{items}
				</div>
				{data.cardSubscriptElement}
				{data.trackLine === 'bottom' && switcher}
				{data.showArrows && <div className="card-slider-btn card-slider-btn-left" onClick={previous}></div>}
				{data.showArrows && <div className="card-slider-btn card-slider-btn-right" onClick={next}></div>}
			</div>);
}