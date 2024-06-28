import {useState, useEffect} from 'react';
/**
 * Page section connectWith
 * React && ReactDOM import powered by webpack config
 */
import Baloon from 'Common/baloon/baloonIndex.jsx';
import './connectWithStyle.css'


export default function ForBusinessPageConnectWith({config, active, isMobile=false}) {
	const offset = active ? 0 : 200;
	const [step, update] = useState(0);

	const show10 = step == 1;
	const show11 = step > 1;
	const show20 = step == 3;
	const show21 = step > 3;
	const show30 = step == 5;
	const show31 = step > 5;
	const show40 = step == 7;
	const show41 = step > 7;

	/// Baloon blocks
	const balloonsLeftDesktop = isMobile
		? null
		: (<>
			<Baloon show={show30 || show31} typed={show30} fromLeft={true} fromTop={false} style={{left: '150px', top: '50px'}}>{config.user3Text}</Baloon>
			<Baloon show={show40 || show41} typed={show40} fromLeft={true} fromTop={false} style={{left: '120px', top: '210px'}}>{config.user4Text}</Baloon>		
		</>);
	const balloonsRightDesktop = isMobile
		? null
		: (<>
			<Baloon show={show20 || show21} typed={show20} fromLeft={false} fromTop={false} style={{right: '100px', top: '380px'}}>{config.user2Text}</Baloon>
			<Baloon show={show10 || show11} typed={show10} fromLeft={false} fromTop={false} style={{right: '150px', top: '150px'}}>{config.user1Text}</Baloon>
		</>);
	const balloonsMobile = isMobile
		? (<>
				<Baloon show={show10 || show11} typed={show10} fromLeft={true} fromTop={false} style={{left: '60px', top: '-60px'}}>{config.user1Text}</Baloon>
				<Baloon show={show20 || show21} typed={show20} fromLeft={false} fromTop={false} style={{right: '20px', top: '10px'}}>{config.user2Text}</Baloon>
				<Baloon show={show30 || show31} typed={show30} fromLeft={true} fromTop={false} style={{left: '120px', top: '100px'}}>{config.user3Text}</Baloon>
				<Baloon show={show40 || show41} typed={show40} fromLeft={false} fromTop={true} style={{right: '130px', top: '270px'}}>{config.user4Text}</Baloon>		
			</>)
		: null;


	// init balloons
	useEffect(() => {
		setTimeout(() => update(active ? 1 : 0), config.baloonDelay || 2000);
	}, [active]);

	// start ballonns show
	useEffect(() => {
		if(step > 0 && step < 8) {
			setTimeout(() => update(step + 1), config.baloonDelay || 2000);
		}
	});

	// -RENDER-
	return (<div className={`for-business-page-connectWith ${active ? 'active' : ''}`}>
				<div className="fbpcw-left" style={{marginRight: `${offset}px`}}>
					<img src={config.leftGroupUrl}/>
					{balloonsLeftDesktop}
				</div>
				<div className="fbpcw-center">
					<div className="fbpcw-baloon">{config.baloonText}</div>
					<img className="fbpcw-logo" src={config.logoUrl}/>
					<div className="fbpcw-header header-int-white">{config.header}</div>
					<div className="fbpcw-comment comment-white">{config.comment}</div>
				</div>
				<div className="fbpcw-right" style={{marginLeft: `${offset}px`}}>
					{balloonsRightDesktop}
					{balloonsMobile}
					<img src={isMobile ? config.mobileGroupUrl : config.rightGroupUrl}/>
				</div>
			</div>)
}

	