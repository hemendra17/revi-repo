import { useState, useEffect } from 'react';
import Scm, { initProxy } from 'Hand/scm/scm.jsx';
import throttle from 'lodash/throttle';

import './hpCommon.css';

/// Page scrolling scenarios handlers
import slides from './slides/slidesIndex.js';

// use mobile versions only
import SwitchUser from './switchedUser/mobile.jsx';
import QuickSelectScreen from './quickSelect/mobile.jsx';
// use both versions
import LetsCelebrateScreen from './letsCelebrate/letsCelebrateScreen.jsx';
import ShareWithCommunity from './shareWithCommunity/shareWithCommunityScreen.jsx';


/**
 * Home page index (desktop version)
 * @param  {Object}  options.config Home page config
 * @param  {Object}  appConfig      App config (including home page config)
 * @param  {Boolean} isMobile       Is mobile view?
 * @return {Object}                 React element object
 */
export default function ({ config = {}, appConfig = {}, isMobile = false }) {
	// moving elements positions 
	const [pos, updatePos] = useState(initProxy());
	// user id
	const [userId, updateUserId] = useState(() => Math.floor(Math.random() * config.users.length)); // useState(1); //
	// user data
	const user = config.users[userId];
	// quickly select data, order on premise - merged data
	const qssData = Object.assign({}, config.quickSelect, user.toQuickSelect);
	// scenario extraction
	const scenes = (cUser) => slides.scenarios(config, cUser, qssData)
	// current scenario
	const [scenario, updateScenario] = useState(scenes(user));

	// on element create
	useEffect(() => {
		// on user switch this code will run
		// starts only for desktop version
		let interval = setTimeout(() => {
			if (pageYOffset < 100) {
				const nextUserId = userId >= config.users.length - 1 ? 0 : userId + 1;
				const nextUserData = config.users[nextUserId];
				const newScenario = scenes(nextUserData);

				// update user id and scenario
				updateUserId(nextUserId);
				updateScenario(newScenario);
			}
		}, config.userSwitchInterval);

		// destructor
		return () => {
			clearTimeout(interval);
		}
	});

	// update style on scroll
	function onScroll(data) {
		updatePos(data);
	}

	// triggers
	const popConfetti = Boolean(pos.celebrate.triggers && pos.celebrate.triggers.start);
	const openShareBalloons = Boolean(pos.share.triggers && pos.share.triggers.open);
	// page behavior setup
	const pageSetup = {
		isMobile,
		menuLogoClick: () => window.moveTo(0, 0),
		menuCollapseLogo: () => false,
		menuLightMode: (offset, isMobile, $) => isMobile
			? false
			: $.oneOfRange(offset, [3830, 6100], [8120, 10000]),
		menuTransparent: (offset, isMobile, $) => isMobile
			? false
			: $.oneOfRange(offset, [0, 3830], [6700, 9300]),
		transitBoundaries: slides.quickTransitions
	};



	useEffect(() => {
		const handleScroll = throttle(() => {
			let value = window.scrollY;
			document.getElementById('sun').style.top = value * 0.2 + 'px';
			document.getElementById('hillsBg').style.top = value * -0.1 + 'px';
			document.getElementById('lightTree').style.top = value * -0.1 + 'px';
		}, 100); // adjust the delay as needed

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);


	// render
	return (<Scm className="" scenarios={scenario} scroll={onScroll} appConfig={appConfig} setup={pageSetup}>

		<slides.Slide1 config={config} user={user} track={pos} />
		<slides.Slide2 config={config} data={qssData} track={pos} />
		{/* slide 1
		{isMobile
		? <SwitchUser user={user} config={config} />
		:
		{isMobile
		? <QuickSelectScreen data={qssData} />
		: <slides.Slide2 config={config} data={qssData} track={pos} />}
		<LetsCelebrateScreen firstShow={popConfetti} user={user} config={config.letsCelebrate} isMobile={isMobile} />
		<ShareWithCommunity openStep={openShareBalloons} data={config.share} user={user} isMobile={isMobile} /> */}
	</Scm>);
}