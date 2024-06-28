
/**
 * Page section share
 * React && ReactDOM import powered by webpack config
 */
import {useState, useEffect} from 'react';
import HappyFriends from 'Common/happyFriends/friendsIndex.jsx';
import './shareStyle.css'

import Balloon from 'Common/baloon/baloonIndex.jsx';

function Balloons({config = {}, step = 0, isMobile=false}) {
	return (<div className="app-page-share-balloons">
			<Balloon show={step > 0} typed={step == 1} 
				fromLeft={true} fromTop={false} 
				style={{left: isMobile ? '505px' : '485px', top: '-545px'}}>
				{config.user1Text}
			</Balloon>
			<Balloon show={step > 2} typed={step == 3} 
				fromLeft={false} fromTop={false} 
				style={{right: '510px', top: '-370px'}}>
				{config.user2Text}
			</Balloon>
			<Balloon show={step > 4} typed={step == 5} 
				fromLeft={true} fromTop={true} 
				style={{left: isMobile ? '540px' : '320px', top: '-190px'}}>
				{config.user3Text}
			</Balloon>
			<Balloon show={step > 6} typed={step == 7} 
				fromLeft={false} fromTop={true} 
				style={{right: isMobile ? '690px' : '270px', top: isMobile ? '-30px' : '-160px'}}>
				{config.user4Text}
			</Balloon>
		</div>);
}

///
export default function AppPageShare({config, active = false, isMobile}) {
	const [step, update] = useState(0);

	// init
	useEffect(() => {
		update(active ? 1 : 0)
	}, [active]);

	// ballonns switch
	useEffect(() => {
		if(step > 0 && active) {
			setTimeout(() => update(step + 1), config.delay || 2000)	
		}
	});

	return (<>
			<div className="app-page-share-prev"></div>
			<div className="app-page-share">
				<div className="app-page-share-logo">
					<img src={config.logoUrl}/>
				</div>
				<div className="app-page-share-header">{config.header}</div>
				<div className="app-page-share-comment">{config.comment}</div>
				<HappyFriends data={config.friends} isMobile={isMobile} isShort={false}/>
				<div><Balloons config={config} step={step} isMobile={isMobile}/></div>
			</div>
		</>);
}

	