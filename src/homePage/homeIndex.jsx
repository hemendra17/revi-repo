import React, { useState, useEffect, lazy, Suspense } from 'react';
import Scm, { initProxy } from 'Hand/scm/scm.jsx';

import './hpCommon.css';

/// Page scrolling scenarios handlers
import slides from './slides/slidesIndex.js';
import Sunbanner from './Sunbanner.jsx';
// import HomePage from './HomePage.jsx';
// import Revenue from './Revenue.jsx';
// import Sectionbutton from './Sectionbutton.jsx';
// import BackOnCome from './BackOnCome.jsx';
// import Buttongrp from './Buttongrp.jsx';
// import Team from './Team.jsx';
// import CircleSection from './CircleSection.jsx';
// import Boxsection from './Boxsection.jsx';
// import Checkout from './Checkout.jsx';
// import Carousel from './Carousel.jsx';
// import Calltoaction from './Calltoaction.jsx';

// Lazy load components
const SwitchUser = lazy(() => import('./switchedUser/mobile.jsx'));
const QuickSelectScreen = lazy(() => import('./quickSelect/mobile.jsx'));
const LetsCelebrateScreen = lazy(() => import('./letsCelebrate/letsCelebrateScreen.jsx'));
const ShareWithCommunity = lazy(() => import('./shareWithCommunity/shareWithCommunityScreen.jsx'));
const HomePage = lazy(() => import('./HomePage.jsx'));
const Revenue = lazy(() => import('./Revenue.jsx'));
const Calltoaction = lazy(() => import('./Calltoaction.jsx'));
const Checkout = lazy(() => import('./Checkout.jsx'));
const Carousel = lazy(() => import('./Carousel.jsx'));
const CircleSection = lazy(() => import('./CircleSection.jsx'));
const Boxsection = lazy(() => import('./Boxsection.jsx'));
const Sectionbutton = lazy(() => import('./Sectionbutton.jsx'));

const Team = lazy(() => import('./Team.jsx'));

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
  const [userId, updateUserId] = useState(() =>
    Math.floor(Math.random() * config.users.length)
  );
  // user data
  const user = config.users[userId];
  // quickly select data, order on premise - merged data
  const qssData = Object.assign({}, config.quickSelect, user.toQuickSelect);
  // scenario extraction
  const scenes = (cUser) => slides.scenarios(config, cUser, qssData);
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
    };
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
    menuLightMode: (offset, isMobile, $) =>
      isMobile ? false : $.oneOfRange(offset, [3830, 6100], [8120, 10000]),
    menuTransparent: (offset, isMobile, $) =>
      isMobile ? false : $.oneOfRange(offset, [0, 3830], [6700, 9300]),
    transitBoundaries: slides.quickTransitions,
  };

  // render
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Scm
        className="hp--wrap"
        scenarios={scenario}
        scroll={onScroll}
        appConfig={appConfig}
        setup={pageSetup}
      >
        <HomePage isMobile={isMobile} />
        <Sunbanner />
        <Revenue isMobile={isMobile} />
        <Sectionbutton />
        <Team />
        <CircleSection />
        <Boxsection />
        <Checkout />
        <Carousel />
        <Calltoaction isMobile={isMobile} />
        {/* {isMobile ? (
          <QuickSelectScreen data={qssData} />
        ) : (
          <slides.Slide2 config={config} data={qssData} track={pos} />
        )} */}
        {/* <LetsCelebrateScreen
          firstShow={popConfetti}
          user={user}
          config={config.letsCelebrate}
          isMobile={isMobile}
        />
        <ShareWithCommunity
          openStep={openShareBalloons}
          data={config.share}
          user={user}
          isMobile={isMobile}
        /> */}
      </Scm>
    </Suspense>
  );
}