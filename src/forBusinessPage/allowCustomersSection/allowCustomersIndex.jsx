
/**
 * Page section allowCustomers
 * React && ReactDOM import powered by webpack config
 */

import './allowCustomersStyle.css'


export default function ForBusinessPageAllowCustomers({config, active}) {
	return (<div className="for-business-page-allowCustomers">
				<div className="fbpac-info">
					<div className="fbpac-header header-int">{config.header}</div>
					<div className="fbpac-comment comment">{config.comment}</div>
				</div>
				<div className={`fbpac-cards-wrap ${active ? 'active' : ''}`}>
					<div className="fbpac-card fbpac-card1" style={{backgroundImage: `url(${config.card1Url})`}}>
						<div className="fbpac-card1-jill">
							<div className="fbpac-card1-jill-label" style={{backgroundImage: `url(${config.titleBullet})`}}>{config.card1Title}</div>
						</div>
					</div>
					<div className="fbpac-card fbpac-card2" style={{backgroundImage: `url(${config.card2Url})`}}></div>
					<div className="fbpac-card fbpac-card3" style={{backgroundImage: `url(${config.card3Url})`}}></div>
				</div>
			</div>);
}

	