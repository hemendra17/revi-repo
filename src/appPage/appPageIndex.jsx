import {useState} from 'react';
import Scm, {initProxy} from 'Hand/scm/scm.jsx';

/**
 * Basics of page app-page
 */
import AppPageRevieve from './revieveSection/revieveIndex.jsx';
import AppPageHelp from './helpSection/helpIndex.jsx';
import AppPageDiscover from './discoverSection/discoverIndex.jsx';
import AppPageSeeAll from './seeAllSection/seeAllIndex.jsx';
import AppPageBecome from './becomeSection/becomeIndex.jsx';
import AppPageShare from './shareSection/shareIndex.jsx';
import GetStarted from 'Common/getStarted/getStartIndex.jsx'

// styles
import './appPageStyle.css';
// scenarios
import scenario from './scenario.js';


/**
 * App page
 * @param {Object} options.appConfig Application config
 * @param {Object} options.config    Section config
 * @param {Boolean} options.isMobile  true if mobile view
 */
export default function({appConfig, config, isMobile}) {
	// moving elements positions 
	const [pos, updatePos] = useState(initProxy());
	// page behavior setup
	const pageSetup = {
		isMobile,
		menuLightMode: (offset, isMobile, $) => true
	};
	// scenarios - as state!
	const [scenarios, updateScenarios] = useState(scenario(config.revieveSection));
	// show middle image on help section
	const midImgActive = isMobile 
		? true
		: Boolean(pos.main.triggers && pos.main.triggers.imageReady);
	// activate see-all slide
	const seeAllActive = !isMobile && Boolean(pos.other.triggers && pos.other.triggers.moveCafes);
	// pop confetti
	const confettiActive = Boolean(pos.other.triggers && pos.other.triggers.popConfetti);
	// activate user's talk baloons
	const balloonsActive = isMobile 
		? Boolean(pos.other.triggers && pos.other.triggers.balloonsMobile)
		: Boolean(pos.other.triggers && pos.other.triggers.balloons);

	// render
	// updateRequest - manual zero scroll for updating layout
	return (
		<Scm className="app-page" scenarios={scenarios} scroll={data => updatePos(data)} appConfig={appConfig} setup={pageSetup}>
			<AppPageRevieve track={pos} config={config.revieveSection} isMobile={isMobile}/>
			<AppPageHelp active={midImgActive} config={config.helpSection} isMobile={isMobile}/>
			<AppPageDiscover config={config.discoverSection} isMobile={isMobile}/>
			<AppPageSeeAll config={config.seeAllSection} isMobile={isMobile} active={seeAllActive}/>
			<AppPageBecome config={config.becomeSection} isMobile={isMobile} init={confettiActive}/>
			<AppPageShare config={config.shareSection} isMobile={isMobile} active={balloonsActive}/>
			<GetStarted config={config.getStartSection} isMobile={isMobile}/>
		</Scm>
	);
}