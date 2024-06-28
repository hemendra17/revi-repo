/**
 * Quick select... section slides
 * Proudly provide mobile version
 */
import {useState, useEffect} from 'react';
import FoodLines from 'Common/foodLines/foodLines.jsx';

import './quickSelectMobile.css';
// import './css/stages.common.css';

/**
 * Gen a block with native data
 * @param  {Object} data Configuration
 * @param  {Boolean} opacity Opacity of most components by adding screen 5 css
 * @return {ReactComponent}      Component
 */
function getQuickSelectBlock(data, opacity=false) {
	return (<div className={`home-mob-screen home-mob-screen-4 ${opacity ? 'home-mob-screen-5' : ''}`}>
			<div className="hms-4-title">{data.mainText}</div>
			<div className="hms-4-cafes">
				<FoodLines data={data} isMobile={true} enableCheckbox={opacity}/>
			</div>
		</div>);
}

/**
 * Get mobile quick select component
 * @param {Object} options.data Configuration data
 * @param {Number} options.step Current step
 */
export default function QuickSelectMobile({data, step}) {
	// subcomponents
	const quicklySelectSlideA = null; //getQuickSelectBlock(data);
	const quicklySelectSlideB = getQuickSelectBlock(data, true);

	const chatSlide = (<div className="home-mob-screen home-mob-screen-6">
			<div className="hms-6-alyssa">
				<div className="hms-6-logo-image" style={{backgroundImage: `url(${data.logoFriend1})`}}/>
				<div>
					<div className="hms-6-baloon"><div>{data.textFriend1}</div></div>
				</div>
			</div>

			<div className="hms-6-food">
				<div className="hms-6-food-image" style={{backgroundImage: `url(${data.mobileFoodImage})`}}>
					<img src={data.selectedFoodPointUrl}/>
					<span>{data.mobileFoodTitle}</span>
				</div>
			</div>

			<div className="hms-6-niami">
				<div>
					<div className="hms-6-baloon"><div>{data.textFriend2}</div></div>
				</div>
				<div className="hms-6-logo-image" style={{backgroundImage: `url(${data.logoFriend2})`}}/>
			</div>
		</div>);

	const [imageIndex, update] = useState(0);
	const mimgs = data.mobileImages;
	const orderWaySlide = (<div className="home-mob-screen home-mob-screen-7">
			<div className="hms-7-title">{data.wayOrderText}</div>
			<div className="hms-7-slider">
				<div className="hms-7-slider-top">
					{mimgs.map((v,index) => <div 
						key={index}
						className={`hms-7-slider-top-bullet ${index == imageIndex ? 'selected' : ''}`}
						onClick={() => update(index)}
						onTouchStart={() => update(index)}></div>)}
				</div>
				<div className="hms-7-slider-revi">The Revi</div>
				<div className="hms-7-slider-wrap">
					<div className="hms-7-slider-wrap-slide" style={{left: `-${imageIndex*(90*2+225)}px`}}>
						{mimgs.map(({url, yOffset, scale}) => <img key={url} 
							className="hms-7-slider-image" 
							src={url} 
							style={{top: `${yOffset||0}px`, transform: `scale(${scale || 1})`}}/>)}
					</div>
				</div>
			</div>
		</div>);

	// autoswitch images
	useEffect(() => {
		const interval = setTimeout(() => update(v=>v >= mimgs.length - 1 ? 0 : v + 1), data.switchDelay);

		return () => {
			clearTimeout(interval);
		}
	});
	
	return (<>
		{quicklySelectSlideA} 
		{quicklySelectSlideB}
		{chatSlide}
		{orderWaySlide}
	</>);
}