
/**
 * Page section trackSales
 * React && ReactDOM import powered by webpack config
 */
import Button from 'Common/button/buttonIndex.jsx';
import './trackSalesStyle.css'


export default function ForBusinessPageTrackSales({config, active, isMobile}) {
	// preference bulltes list
	const bullets = (<div className="fbpt-info-ul">
						{config.items.map((v,i) => <li key={i} className="fbpt-info-li" style={{backgroundImage: `url(${config.bullet})`}}>{v}</li>)}
						<div style={{width: '100%', paddingTop: '50px', textAlign: isMobile ? 'center' : 'left'}}>
							<Button config={config.button}/>
						</div>
					</div>);

	// render
	return (<div className="for-business-page-trackSales">
				<div className="fbpts-wrap">
					<div className={`fbpts-card ${active ? 'active' : ''}`}>
						<img src={config.cardUrl} className="fbpts-card-img"/>
						{isMobile && bullets}
					</div>
					<div className="fbpts-info">
						<div className="fbpts-info-title header-int-white">{config.title}</div>
						<div className="fbpts-info-comment comment-white">{config.comment}</div>
						{!isMobile && bullets}
					</div>
				</div>
			</div>)
}

	