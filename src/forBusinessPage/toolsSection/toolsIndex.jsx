
/**
 * Page section tools
 * React && ReactDOM import powered by webpack config
 */

import './toolsStyle.css'


export default function ForBusinessPageTools({config, isMobile, active}) {
	// preference bulltes list
	const bullets = (<div className="fbpt-info-ul">
						{config.info.items.map((v,i) => <li key={i} className="fbpt-info-li" style={{backgroundImage: `url(${config.info.bullet})`}}>{v}</li>)}
					</div>);

	// render
	return (<>
				<div className="for-business-page-tools">
				<div className="fbpt-header header-white">{config.header}</div>
				<div className="fbpt-comment comment-white">{config.comment}</div>
				<div className="fbpt-wrap">
					<div className="fbpt-info">
						<div className="fbpt-info-title header-int-white">{config.info.title}</div>
						<div className="fbpt-info-comment comment-white">{config.info.comment}</div>
						{!isMobile && bullets}
					</div>
					<div className={`fbpt-card ${active ? 'active' : ''}`}>
						<img src={config.cardUrl} className="fbpt-card-img"/>
						{isMobile && bullets}
					</div>
				</div>
			</div>
			</>)
}

	