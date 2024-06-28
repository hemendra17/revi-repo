import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect, useMemo } from 'react';
// lazy loading
import { Suspense, lazy } from 'react';
// Functionality imports
import { isMobile, setAppPresets } from 'Common/functionality.js';
// addresses
import page from './_configs/_common_configs/pageAddresses.js';
import './css/main.css';
import './css/bootstrap.min.css';
import './_static/base.css';

/*
	App pages
 */

const HomePage = lazy(() => import('./homePage/homeIndex.jsx'));
const ForBusinessPage = lazy(() => import('./forBusinessPage/forBusinessPageIndex.jsx'));
const AppPage = lazy(() => import('./appPage/appPageIndex.jsx'));
const StoriesPage = lazy(() => import('./storiesPage/storiesIndex.jsx'));
const AboutPage = lazy(() => import('./aboutPage/aboutIndex.jsx'));
const ScheduleDemoPage = lazy(() => import('./scheduleDemo/scheduleDemoIndex.jsx'));
const ContactPage = lazy(() => import('./contactsPage/contactIndex.jsx'));
const PrivacyPolicyPage = lazy(() => import('./privacyPolicyPage/PrivacyPolicyPage.jsx'));

/*
	App preferences
 */

// App Configuration
const configuration = import('./config.js');
// styles
// Root element
const ROOT = document.querySelector('.appwrap');


/**
 * Create routing list of components.
 * Every ROUTED component have 2 params: menu && footer (primary components).
 * It's because some components should not display on of theese primary components.
 * @param  {Object} appConfig Application config
 * @return {Switch}           Switch element
 */
function createRouting(appConfig) {
	// every page config
	const everyPageConfig = {
		isMobile: isMobile(),
		appConfig
	};
	// page index array
	const pageIndex = [
		// home
		{ element: HomePage, url: page.HOME, configKey: 'homePage' },

		// for business
		{ element: ForBusinessPage, url: page.BUSINESS, configKey: 'buisness' },
		{ element: ForBusinessPage, url: page.BUSINESS_PROD_MASK, configKey: 'buisness' },
		// app
		{ element: AppPage, url: page.APP, configKey: 'app' },
		// stories
		{ element: StoriesPage, url: page.STORIES, configKey: 'stories' },
		// about
		{ element: AboutPage, url: page.ABOUT, configKey: 'about' },
		{ element: AboutPage, url: page.ABOUT_MASK, configKey: 'about' },
		// contacts
		{ element: ContactPage, url: page.CONTACT, configKey: 'contacts' },
		// schedule demo
		{ element: ScheduleDemoPage, url: page.SCHEDULE, configKey: 'scheduleDemo' },
		// privacy policy
		{ element: PrivacyPolicyPage, url: page.PRIVACY, configKey: 'privacyPolicy' },
	];

	// create pages for app
	const pages = pageIndex.map((item, index) => {
		const elementConfig = Object.assign({}, everyPageConfig, { config: appConfig[item.configKey] });
		const element = React.createElement(item.element, elementConfig, null);

		return item.url === page.home
			? <Route key={index} path={item.url}>{element}</Route>
			: <Route exact key={index} path={item.url}>{element}</Route>;
	});

	return (<Switch>{pages}</Switch>);
}

/**
 * Main function. Handle routs.
 */
function App() {
	// waiting for configs and styles loading
	const [config, updateConfig] = useState(null);
	// create child elements; will not recreated because of config will change only once
	const routing = useMemo(() => config ? createRouting(config) : null, [config]);

	// app init - RUN ONCE
	// set all presets and init mobile view if needed
	useEffect(() => {
		setAppPresets(ROOT, true);
		// config will load once
		configuration.then(data => updateConfig(data.default))
	}, []);

	// every screen resize - recheck app
	useEffect(() => {
		function onResize(evt) {
			// first ON-RESIZE - could be failed (before config loaded)
			if (config) {
				updateConfig(Object.assign({ _resizeOn: Date.now() }, config));
			}
			// every resize app should be updated
			setAppPresets(ROOT);
		}

		window.addEventListener('resize', onResize);
		return () => {
			window.removeEventListener('resize', onResize);
		}
	}, [config]);

	// render
	return (
		<Router>
			<Suspense fallback={<div>Loading...</div>}>
				{routing}
			</Suspense>
		</Router>
	);
}

// render the app
ReactDOM.render(<App />, ROOT);