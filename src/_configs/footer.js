import page from './_common_configs/pageAddresses.js';

// assets cache
const assets = {};

// import all image assets
(function (r) {
	r.keys().forEach(key => assets[key.replace('./','')] = r(key).default);
})(require.context('./assets/footer/', true, /\.(png|svg)$/));

import socialIconsConfig from './_common_configs/social.js';

export default {
	// hide footer
	hide: false,
	// main logo
	logo: assets['R_white.svg'],
	// logo: 'https://via.placeholder.com/88x88/fff/f00',
	subscript: ['© 2020 Revi','Privacy & Cookies'],
	// menu items
	menus: [
		{
			title: 'Revi',
			items: [
				{caption: 'Revi App', url: page.APP},
				{caption: 'For Business', url: page.BUSINESS},
				// {caption: 'Revi Stories', url: page.STORIES},
			]
		},
		{
			title: 'Products',
			items: [
				{caption: 'The Revi', url: page.BUSINESS_PROD_KIOSK},
				{caption: 'Revi Countertop', url: page.BUSINESS_PROD_COUNTERTOP},
				{caption: 'Revi Clamp', url: page.BUSINESS_PROD_CLAMP},
			]
		},
		{
			title: 'About',
			items: [
				// {caption: 'Team', url: page.ABOUT_TEAM},
				{caption: 'Team', url: page.ABOUT},
				{caption: 'MICRO', url: page.ABOUT_MICRO},
			]
		},
		{
			title: 'Connect',
			items: [
				{caption: 'Contact Us', url: page.CONTACT},
				{caption: 'Press Inquiries', url: page.CONTACT},
				{
					socialIcons: true,
					config: socialIconsConfig
				},
			]
		},
	]
};