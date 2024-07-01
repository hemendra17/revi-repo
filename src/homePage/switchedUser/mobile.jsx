/**
 * It's an user switches screen.
 * Shows different users for a while.
 * Defined by interval
 */
import {useState, useEffect, useRef} from 'react';

import TypedText from 'Common/typedText/typeTextIndex.jsx';
import UserImages from './templates/userImages.jsx';
import CafeBlocks from './templates/cafeBlocks.jsx';
import ConnectSlide from './templates/connectSlide.jsx';

// styles
import './stage.common.css';
import './userSwitchMobile.css';

/**
 * Switchable user screen
 * @param {Object} props.user  Current user data
 * @param {Object} props.step  	 Current step
 * @param {Object} props.config	Config of home page
 */
export default function  SwitchUserMobile({user, step, config}) {
	// for checking if we on "and connect" element
	const [inConnect, updateInConnect] = useState(false);
	
	const userWelcomeSlide = (
		<div className={`userswitcher--wrap-mobile ${user.mode} home-mob-screen home-mob-screen-1`}>
			<TypedText className="userswitcher--stage-left-retext" retext={user.stage.retext} mode={user.mode}/>
			<div className="home-mob-screen-1-images">
				<UserImages images={user.stage.images} 
										subscript={user.stage.subscription} 
										pos={user.stage.onStage2LogoOffset}
										size={user.stage.onStage2LogoScale}
										step={0}/>
			</div>
		</div>);

	const discoverSlide = (<>
			<div className={`userswitcher--wrap-mobile ${user.mode} home-mob-screen home-mob-screen-2`}>
				<div className="hms-2-title">{user.stage.discoverTitle}</div>
			</div>
			<div className={`userswitcher--wrap-mobile ${user.mode} home-mob-screen home-mob-screen-2`}>
				<img className="hms-2-logo" src={user.logo}/>
				<div className="hms-2-logo-title">{user.stage.subscription.name.split(' ')[0]}'s Places</div>
				<div className="hms-2-cafes">
					<CafeBlocks cafes={user.stage.cafes} 
						isMobile={true}
						cafePointUrl={config.connectWithBusiness.cafePointUrl} 
						size={[187,228]}
						processFn={items => [...items.slice(0,-2), ...items.slice(-1), ...items.slice(-2,-1)]}/>
				</div>
			</div>
		</>);

	const andConnectSlideClassName = `userswitcher--wrap-mobile ${user.mode} home-mob-screen home-mob-screen-3 ${inConnect ? 'expand': ''}`;
	const andConnectSlide = (<div className={andConnectSlideClassName}>
			<div className={`hms-3-bg`} style={{backgroundImage: `linear-gradient(rgba(0,0,0,.5), transparent), url(${user.stage.cafes[user.stage.cafes.length-1].url})`}}>
				<div className="hms-3-bg-header">
					<img className="hms-3-bg-header-logo" src={config.connectWithBusiness.cafePointUrl}/>
					<span className="hms-3-bg-header-title">{user.stage.cafes[user.stage.cafes.length-1].title}</span>
				</div>

				<div className="hms-3-bg-welcome-text">{config.connectWithBusiness.mainText}</div>

				<ConnectSlide likeUrl={config.connectWithBusiness.likePointUrl} 
					texts={config.connectWithBusiness.explainTexts} 
					followLink={config.connectWithBusiness.followLink} 
					followText={config.connectWithBusiness.followLinkText}/>
			</div>
		</div>);

	const checkHeight = Math.round(screen.availHeight/2);
	// window scroll event
	function onScroll(event) {
		const items = [...(document.elementsFromPoint(100, checkHeight) || [])];
		const inViewPort = items.some(item => item.className.includes('home-mob-screen-3'))

		updateInConnect(inViewPort)
	}

	useEffect(() =>{
		window.addEventListener('scroll', onScroll);

		return () => {
			window.removeEventListener('scroll', onScroll);
		}
	});

	// render
	return (<>
			{userWelcomeSlide}
			{discoverSlide}
			{andConnectSlide}
		</>);
}