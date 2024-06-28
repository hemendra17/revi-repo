const config = {
	HOME: '/',
	APP: '/app',
	BUSINESS: '/business',
	BUSINESS_PROD: '/business/prod',
	BUSINESS_PROD_MASK: '/business/:addr',
	BUSINESS_PROD_COUNTERTOP: '/business/ctop',
	BUSINESS_PROD_KIOSK: '/business/kiosk',
	BUSINESS_PROD_CLAMP: '/business/clamp',
	STORIES: '/stories',
	LOGIN: 'https://dashboard.zyrl.us/#/',
	
	ABOUT: '/about',
	ABOUT_MASK: '/about/:target',
	ABOUT_TEAM: '/about/team',
	ABOUT_MICRO: '/about/micro',
	
	SCHEDULE: '/schedule',
	CONTACT: '/contacts',

	PRIVACY: '/privacy',

};

Object.freeze(config);

export default config;