
/**
 * Page section seeAll
 * React && ReactDOM import powered by webpack config
 */
import FoodLines from 'Common/foodLines/foodLines.jsx';
import './seeAllStyle.css'


export default function AppPageSeeAll({config, active = false, isMobile}) {
	return (<div className="app-page-seeAll">
				<div className="app-page-see-all-img">
					<img src={config.mainImage}/>
				</div>
				<div className="app-page-see-all-header">{config.header}</div>
				<div className="app-page-see-all-comment">{config.comment}</div>
				<div className={`app-page-see-all-images ${active ? 'offset' : ''}`}>
					<FoodLines data={config.foodLine} step={2} isMobile={isMobile} enableCheckbox={true}/>
				</div>
			</div>);
}

	