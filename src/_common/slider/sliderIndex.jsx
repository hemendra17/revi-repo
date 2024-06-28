/**
 * Mobile slider wrap
 * Uses for items scroll
 */
import {useState, useEffect} from 'react';
import './slider.css';

/**
 * Switcher line handler. Uses only for mobile version
 * @param {Array}    options.cards    Slided card elements
 * @param {Boolean}  options.isMobile true in mobile mode
 * @param {Function} options.click    callback to switch card
 */
function Switcher({cards=[], slide, isMobile = false, click=() =>{}}) {
	const getClassName = (index) => `slider-point ${slide === index ? 'active' : ''}`
	const mapping = cards.map((v,i) => <div key={i} className={getClassName(i)} onClick={() => click(i)}></div>);

	return isMobile ? (<div className="slider-switcher">{mapping}</div>) : null;
}

/**
 * Slider component
 * @param {Array}   options.cards     Array of cards
 * @param {Object}  options.config    Preconfig component
 *                                    sizes = {width: 100, padding: 20} // card sizes (for mobile only)
 *                                    delay = 1000 // delay before slide switch
 *                                    isMobile = false // is mobile view
 *                                    isActive = false // slide is active
 *                                    startSlide = 0 // index of first slide
 *                                    slideInCenter = false // selected slide will be in screen center (mobile only)
 *                                    noActivation = false // items line shift on activation will be disabled
 */
export default function Slider({cards=[], config={}, onChange = (activeIndex) =>{}}) {
	// slider preconfig
	const sizes = Object.assign({width: 100, padding: 20}, config.sizes || {});
	const delay = config.delay || 1000;
	const isMobile = Boolean(config.isMobile);
	const isActive = Boolean(config.isActive);
	const startSlide = config.startSlide || 0;
	const slideInCenter = Boolean(config.slideInCenter);
	const noActivation = Boolean(config.noActivation);

	// slide counter
	const [slide, update] = useState(startSlide);
	const lineClassName = `slider-cards-line ${isActive && !isMobile && !noActivation ? 'active' : ''}`;
	const slideWidth = sizes.width+2*sizes.padding;
	const leftOffset = slideInCenter
		? -slideWidth*slide + Math.round((innerWidth-slideWidth)/2)
		: -slideWidth*slide;
	const lineStyle = isMobile ? {left: `${leftOffset}px`} : {};

	// change slide to NEXT slide
	function changeSlide(next) {
		update(next);
		onChange(next);
	}

	// auto switch
	useEffect(() => {
		const timer = null;
		const startTimerCondition = isMobile && delay > -1;

		if(startTimerCondition) {
			setTimeout(() => changeSlide(slide  >= cards.length-1 ? 0 : slide + 1), delay)
		}
		return () => {
			clearTimeout(timer);
		}
	});

	// check init index set
	// when slide changing - current slide will update
	useEffect(() => {
		if(startSlide != slide) {
			update(startSlide);
		}
	}, [startSlide])

	// wrap for cards
	const wrapStyle = {
		margin: `0 ${sizes.padding}px`, 
		minWidth: isMobile ? `${sizes.width}px` : 'auto',
		maxWidth: isMobile ? `${sizes.width}px` : 'auto',
	};
	const cardsWrap = cards.map((v,i) => <div key={i} style={wrapStyle}>{v}</div>)

	// render
	return (<div className="slider">
			<Switcher cards={cards} isMobile={isMobile} click={changeSlide} slide={slide}/>
			<div className="slider-cards">
				<div className={lineClassName} style={lineStyle}>{cardsWrap}</div>
			</div>
		</div>);
}




	