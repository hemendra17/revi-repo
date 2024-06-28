/**
 * Get started slide for different pages
 */
import {Link} from "react-router-dom";
import './getStarted.css';

export default function GetStarted({config, isMobile}) {
	// link button to schedule demo
	const sceduleDemoButton = <Link to="/schedule"><span onClick={() => setTimeout(() => window.scrollTo(0,0), 100)} className="revi-button revi-button-bold">{config.scheduleDemo}</span></Link>
	// open mobile stores buttons
	const storeButtons = config.store.map((record, index) => (
		<div className="get-started-ondevices-item" key={index}>
			{!record.url && <div className="get-started-ondevices-soon">{config.soonOn}</div>}
			{!record.url && <div className="get-started-ondevices-store">{record.title}</div>}
			{record.url && <a href={record.url} className="get-started-ondevices-store-link">{record.title}</a>}
		</div>)
	);
	const logoClass = config.hideBage ? 'get-started-logo-nobage' : 'get-started-logo';

	return (<div className={`get-started ${isMobile ? 'mobile' : ''}`}>
				<div className={logoClass} style={{backgroundImage: `url(${config.reviLogo})`}}></div>
				<div className="get-started-getstart"><div>{config.getStarted}</div></div>
				<div className="get-started-ondevices">{config.scheduleDemo ? sceduleDemoButton : storeButtons}</div>
			</div>);
}