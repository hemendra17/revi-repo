import page from './_common_configs/pageAddresses.js';

// assets cache
const assets = {};

// import all image assets
(function (r) {
	r.keys().forEach(key => assets[key.replace('./','')] = r(key).default);
})(require.context('./assets/menu/', true, /\.(png|svg)$/));

import socialIconsConfig from './_common_configs/social.js';

export default {
	// main menu logos
	logoUrlMainWhite: assets['R_white_big.svg'],
	logoUrlMainTangerine: assets['R_tangerine_big.svg'],
	// typed text
	logoPrimUrlMainWhite: assets['revi_white.svg'],
	logoPrimUrlMainTangerine: assets['revi_tangerine.svg'],

	// main menu logo (2 color schemes)
	logoUrlTangerine: assets['revi_tangerine.svg'],
	logoUrlWhite: assets['revi_white.svg'],
	// close mobile menu image
	closeMenuImage: assets['close-menu.svg'],
	// get revi link 
	getReviLink: '/schedule',
	getReviLinkLogo: assets['R_white.svg'],
	// menu items
	items: [
			// title, url address and css class name for every link
			{
				tag: 'app',
				title: 'The App',
				url: page.APP,
				className: 'navbar--point',
				usage: ['mobile', 'desktop']
			},
			{
				tag: 'business',
				title: 'For Business',
				url: page.BUSINESS,
				className: 'navbar--point',
				usage: ['mobile', 'desktop']
			},
			/* Hidden from users - WEBDEV-3742
			{
				tag: 'stories',
				title: 'Stories',
				url: page.STORIES,
				className: 'navbar--point',
				usage: ['mobile', 'desktop']
			},
			*/
			{
				tag: 'login',
				title: 'Log in',
				url: page.LOGIN,
				className: 'navbar--point-login',
				link: true,
				usage: ['desktop']
			}
		],
	// mobile menu config
	mobile: {
		logo: assets['revi_white.svg'],
		// temporary hided
		subItems: [
			{title: 'About', url: page.ABOUT, visible: false},
			{socialIcons: true, config: socialIconsConfig, visible: false},
		],
		loginButton: {
			title: 'Login',
			url: page.LOGIN,
			visible: true
		},
		getReviButton: {
			title: 'Get Revi',
			url: page.SCHEDULE,
			visible: true
		}
	},

	// DEV configs (used for homepage only mode)
	hideMenuItems: false
};