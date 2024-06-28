import {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
/**
 * Basics of page for-business-page
 */
import TopSection from './topSection/topSectionIndex.jsx';
import OpenForBusiness from './openForBusinessSection/openForBusinessIndex.jsx';
import SimpleSeamless from './simpleSeamlessSection/simpleSeamlessIndex.jsx';
import Commerce from './commerceSection/commerceIndex.jsx';
import MeetCustomers from './meetCustomersSection/meetCustomersIndex.jsx';
import AllowCustomers from './allowCustomersSection/allowCustomersIndex.jsx';
import Tools from './toolsSection/toolsIndex.jsx';
import ConnectWith from './connectWithSection/connectWithIndex.jsx';
import TrackSales from './trackSalesSection/trackSalesIndex.jsx';

import StickyMenu from './stickyMenu/menuIndex.jsx';

// main css
import './forBusinessPageStyle.css';
// scroller component
import Scm, {initProxy} from 'Hand/scm/scm.jsx';
import GetStarted from 'Common/getStarted/getStartIndex.jsx';
import Motivation from 'Common/motivationCarousele/motivationIndex.jsx';

import getScenario from './scenario.js';

/**
 * For busines page constructor
 * @param {Object} options.appConfig Application config
 * @param {Object} options.config    Section config
 * @param {Boolean} options.isMobile  true if mobile view
 */
export default function ForBusinessPageIndex({appConfig, config, isMobile}) {
	// parse url hook
	const urlParams = useParams();
	// devices index
	const [prodInit, updateProd] = useState(null);

	// set called position once
	useEffect(() => {
		if('addr' in urlParams) {
			let prodIndex = 1;

			switch(urlParams.addr) {
				case 'ctop':
					prodIndex = 0;
					break;
				case 'prod':
				case 'kiosk':
					prodIndex = 1;
					break;
				case 'clamp':
					prodIndex = 2;
					break;
			}

			if(isMobile) {
				setTimeout(() => window.scrollTo(0, 1350), 100);
			} else {
				requestAnimationFrame(() => window.scrollTo(0, 1550));
			}

			updateProd(prodIndex);
		}
	}, []);

	// moving elements positions 
	const [pos, updatePos] = useState(initProxy());
	// current scenario
	const [scenario, updateScenario] = useState(getScenario());
	// page behavior setup
	const pageSetup = {
		isMobile,
		menuLightMode: (offset, isMobile, $) => isMobile
			? offset > 5800
			: $.oneOfRange(offset, [5472, 11000]),
	};
	// triggers 
	const triggers = (pos.main || {}).triggers || {}; 
	// submenu index
	const stickyIndex = triggers[isMobile ? 'stickyIndexMobile' : 'stickyIndex'];
	const stickyOnTop = triggers[isMobile ? 'stickyTopMobile' : 'stickyTop'];
	// step === 1
	const openBusinessActive = triggers[isMobile ? 'openBusinessMobile' : 'openBusiness'];
	// step === 2
	const simpleSeamlessActive = triggers[isMobile ? 'simpleSeamlessMobile' : 'simpleSeamless'];
	// step === 5
	const allowCustomersActive = triggers[isMobile ? 'allowCustomersMobile' : 'allowCustomers'];
	// step === 6
	const toolsActive = triggers[isMobile ? 'toolsMobile' : 'tools'];
	// step === 7
	const connectWithActive = triggers[isMobile ? 'connectMobile' : 'connect'];
	// step === 8
	const trackSalesActive = triggers[isMobile ? 'trackSalesMobile' : 'trackSales'];

	// RENDER
	return (<Scm className="for-business-page" scenarios={scenario} scroll={data => updatePos(data)} appConfig={appConfig} setup={pageSetup}>
		{/*0*/}
		<TopSection config={config.hereToDrive} isMobile={isMobile}/>
		<StickyMenu config={config.stickyMenu} onTop={stickyOnTop} menuIndex={stickyIndex} isMobile={isMobile}/>
		{/*1*/}
		<OpenForBusiness config={config.openForBusiness} isActive={openBusinessActive} isMobile={isMobile}/>
		{/*2*/}
		<SimpleSeamless config={config.simpleSeamless} isActive={simpleSeamlessActive} isMobile={isMobile} initProd={prodInit}/>
		{/*3*/}
		<Commerce config={config.commerce} isMobile={isMobile}/>
		{/*4*/}
		<MeetCustomers config={config.meetCustomers}/>
		{/*5*/}
		<AllowCustomers config={config.allowCustomers} active={allowCustomersActive}/>
		{/*6*/}
		<Tools config={config.tools} active={toolsActive} isMobile={isMobile}/>
		{/*7*/}
		<ConnectWith config={config.connectWith} active={connectWithActive} isMobile={isMobile}/>
		{/*8*/}
		<TrackSales config={config.trackSales} active={trackSalesActive} isMobile={isMobile}/>
		{/*9*/}
		<div className="fbp-pad-menu">
			<Motivation config={config.motivation} isMobile={isMobile}/>
		</div>
		{/*10*/}
		<div className="fbp-pad-menu fbp-pad-menu-darkblue">
			<GetStarted config={config.getBusinessUp} isMobile={isMobile}/>
		</div>
	</Scm>);
}
	