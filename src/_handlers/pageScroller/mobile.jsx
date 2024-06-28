/**
 * Handler for mobile view
 */
import {useEffect, useRef} from 'react';
import {getBlocksList} from './pageSections.js';

// offset for detect slide start
const SLIDE_START_OFFSET = -200;

/**
 * Mobile view for scrolled data
 * @param {String}   options.className  Basic class name
 * @param {Function} options.onScrolled Fires with true, when page Y offset > 0 and false on 0
 * @param {Array}   children            Nested elements
 * @param {ReactElement}   menu         Menu
 * @param {ReactElement}   footer       Footer
 * @param {Function} options.onFirstSlide Fires, when page offset < screen height / 2;
 */
export default function Mobile({className, onScrolled = () => {}, children=null, menu=null, footer=null, onFirstSlide=() => {}, onStepChange = () => {}}) {
	const ref = useRef(null);
	const scrollValue = 50;//Math.round(innerHeight/2);
	// on create
	useEffect(() => {
		const availableSlides = getBlocksList(ref);
		let storedSlideIndex = -1;

		function onScroll(evt) {
			// don't keep state
			let currentSlide = -1;
			const scrolled = window.pageYOffset <= scrollValue;

			// check position, search active slide
			// update slide index according offset
			for(let index=0; index < availableSlides.length; index++) {
				const block = availableSlides[index];
				const startValue = block.top + SLIDE_START_OFFSET;
				const finishValue = block.top + block.height + SLIDE_START_OFFSET;

				if(window.pageYOffset >= startValue && window.pageYOffset < finishValue) {
					currentSlide = index;
					break;
				}
			}
			
			// is on top
			onFirstSlide(scrolled);
			// if slide checked
			if(currentSlide > -1 && storedSlideIndex != currentSlide) {
				onStepChange(currentSlide);
				storedSlideIndex = currentSlide;
			}
		}

		window.addEventListener('scroll', onScroll);
		return () => {
			window.removeEventListener('scroll', onScroll);
		}
	});

	return (<section ref={ref} className={className}>
			{menu}
			{children}
			{footer}
		</section>);
}