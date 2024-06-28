
/**
 * Page section commerce
 * React && ReactDOM import powered by webpack config
 */
import {useState} from 'react';
import Button from 'Common/button/buttonIndex.jsx';

import './commerceStyle.css'


function Benefit({data, bullet, open, tap}) {
	// for mobile devices
	const className = `fbpc-info-benefits-card ${open ? '' : 'closed'}`;

	return (<div className={className} onTouchStart={tap} style={{backgroundImage: `url(${bullet})`}}>
			<div className="fbpc-info-benefits-card-title">{data.title}</div>
			<div className="fbpc-info-benefits-card-comment">{data.comment}</div>
		</div>);
}

export default function ForBusinessPageCommerce({config, isMobile}) {
	const [benefit, update] = useState(0);
	const benefits = config.benefits.map((v,i) => (
			<Benefit key={i} 
				data={v} 
				bullet={config.benefitBullet}
				open={!isMobile || i === benefit}
				tap={() => update(i)}
			/>));
	const grad = `linear-gradient(rgba(0,0,0,.1), rgba(0, 0, 0, .5))`;

	// render
	return (<div className="for-business-page-commerce">
				<div className="fbpc-info">
					<div className="fbpc-info-header header-int">{config.header}</div>
					<div className="fbpc-info-benefits">{benefits}</div>
					<div className="fbpc-info-buttons"><Button config={config.button}/></div>
				</div>
				<div className="fbpc-image" style={{backgroundImage: `${grad}, url(${config.owner.image})`}}>
					<div className="fbpc-image-top">
						<img className="fbpc-image-logo" src={config.owner.logo}/>
						<div className="fbpc-image-title">
							<div className="fbpc-image-name">{config.owner.name}</div>
							<div className="fbpc-image-cafe">{config.owner.cafeTitle}</div>
						</div>
					</div>
					<div className="fbpc-image-comment">{config.owner.comment}</div>
				</div>
				<div className="fbpc-revi-button">
					<Button config={config.button}/>
				</div>
			</div>);
}

	