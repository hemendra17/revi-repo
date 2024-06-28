
/**
 * Page section meetCustomers
 * React && ReactDOM import powered by webpack config
 */

import './meetCustomersStyle.css'


export default function ForBusinessPageMeetCustomers({config}) {
	return (<div className="for-business-page-meetCustomers">
				<div className="fbpmc-up">
					<img className="fbpmc-up-qr" src={config.qrURL}/>
					<div className="fbpmc-up-header header-int">{config.header}</div>
					<div className="fbpmc-up-comment comment">{config.comment}</div>
				</div>
				<div className="fbpmc-up-photo-wrap">
					<div className="fbpmc-up-photo fbpmc-up-img1" style={{backgroundImage: `url(${config.imgs[0]})`}}></div>
					<div className="fbpmc-up-photo fbpmc-up-img2" style={{backgroundImage: `url(${config.imgs[1]})`}}></div>
					<div className="fbpmc-up-photo fbpmc-up-img3" style={{backgroundImage: `url(${config.imgs[2]})`}}></div>
					<div className="fbpmc-up-photo fbpmc-up-img4" style={{backgroundImage: `url(${config.imgs[3]})`}}></div>
					<div className="fbpmc-up-photo fbpmc-up-img5" style={{backgroundImage: `url(${config.imgs[4]})`}}></div>
				</div>
			</div>);
}

	