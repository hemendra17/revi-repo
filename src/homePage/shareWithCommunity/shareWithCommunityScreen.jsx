import HappyFriends from 'Common/happyFriends/friendsIndex.jsx';
import GetStarted from 'Common/getStarted/getStartIndex.jsx'

import './css/shareWithCommunity.css';

/**
 * Sher with community block
 * @param {boolean} options.openStep true, if it's step for displaying first screen
 * @param {Object} options.data     Data for definition of page texts and images
 * @param {Object} options.user     Current user data
 * @param {Footer} options.footer   Footer element to the page's bottom
 */
export default function ShareWithCommunityScreen({openStep, data, user, isMobile}) {
	const mobileClass = isMobile ? 'mobile' : '';
	const activeTrigger = openStep || isMobile;

	// render
	return (<>
				<div className={`share-with-community-top ${mobileClass}`} style={{opacity: activeTrigger ? 1 : .3}}>
					<div className="swc-top-hi">
						<span>{data.hiText}</span>
					</div>
					{/*top user screen*/}
					<div className="swc-top-user">
						<div className="swc-top-user-wrap">
							<img src={isMobile ? user.logo80 : user.logo}/>
							<span>{user.stage.subscription.name}</span>
							<div className={`swc-top-usertalk ${activeTrigger ? 'display-baloon' : ''}`}>
								<div className="swc-top-usertalk-text">
									{data.userTalkAbout} {user.stage.cafes[user.stage.cafes.length-1].title}
								</div>
							</div>
						</div>
					</div>
					{/*random users*/}
					<HappyFriends data={data.happyFriends} isMobile={isMobile} isShort={true} visible={activeTrigger}/>
				</div>
				{/*Get started screen*/}	
				<GetStarted config={data.getStarted} isMobile={isMobile}/>
		</>);
}