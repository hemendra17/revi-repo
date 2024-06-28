/**
 * Page section openForBusiness
 * React && ReactDOM import powered by webpack config
 */
import Button from 'Common/button/buttonIndex.jsx';
import Slider from 'Common/slider/sliderIndex.jsx';
import './openForBusinessStyle.css'

/**
 * Simple demo card
 * @param {String} options.title   Main info
 * @param {String} options.comment Comment data
 */
function Card({title, comment}) {
	const matches = comment.match(/\[.+?\]/g);
	const items = [];

	if(matches) {
		let string = comment;

		[...matches].forEach((str, i, arr) => {
			const index = string.indexOf(str);
			const dataBefore = string.slice(0, index);

			// creating msg
			items.push(<span key={i}>{dataBefore}</span>);
			items.push(<strong key={i+100} className="for-business-page-openForBusiness-card-comment-bolder">{str.replace(/[\[\]]/g,'')}</strong>);
			// last string
			string = string.slice(index+str.length);
			// last
			if(arr.length-1 === i) {
				items.push(<span key={i+1}>{string}</span>);
			}
		});
	} else {
		items.push(comment);
	}

	return (<div className="for-business-page-openForBusiness-card">
			<div className="for-business-page-openForBusiness-card-header">{title}</div>
			<div className="for-business-page-openForBusiness-card-comment">{items}</div>
		</div>);
}

/**
 * For business slide
 * @param {Object} options.config   Slide config
 * @param {Boolean} options.isActive Enables when slide is selected
 */
export default function ForBusinessPageOpenForBusiness({config, isActive, isMobile}) {
	// cards items
	const cardsSrc = Array(config.repeatCards).fill(0).map(v=>config.cards).reduce((acc, val) => [...acc, ...val], []);
	// cards elements
	const cards = cardsSrc.map((data, i) => <Card key={i} title={data.title} comment={data.comment}/>);	
	// slider config
	const sliderConfig = {
		delay: config.timeout,
		isMobile, isActive,
		sizes: {width: 310, padding: 10}
	};

	// render
	return (<div className="for-business-page-openForBusiness">
			<div className="for-business-page-openForBusiness-header header-int">{config.header}</div>
			<div className="for-business-page-openForBusiness-comment">{config.comment}</div>
			<Slider cards={cards} config={sliderConfig}/>
			<div className="for-business-page-openForBusiness-buttons">
				<Button config={config.button}/>
			</div>
		</div>);
}

	