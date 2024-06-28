const assets = {};
// import all image assets
(function (r) {
	r.keys().forEach(key => assets[key.replace('./','')] = r(key).default);
})(require.context('./assets/appPage/', true, /\.(png|svg|jpg)$/));

import locationImage from 'Comass/icon-location.svg';
import selectedItem from 'Comass/button-selected.svg';
import foodPoint from 'Comass/button-unselected.png';
import dishes from 'Comass/dishes.js';
import heartImage from 'Comass/icon-heart-white.svg';
import confetti from 'Comass/confetti.png';
import bullet from 'Comass/icon-check-orange.svg';
import sendIcon from 'Comass/send-icon.svg';

import happyFriends from './_common_configs/happyFriends.js';
import getStarted from './_common_configs/getStarted.js';
import confettiConfig from './_common_configs/confetti.js';

export default {
	revieveSection: {
		background: assets['Revi-Bred-Hold-1366px.png'],
		header: 'Revive your connections to the community',
		buttonText: 'Download the Revi App',
		buttonLink: 'https://apps.apple.com/app/zyrl-order-ahead/id1518287410'
		// buttonLink: false
	},

	helpSection: {
		header: 'The Revi App is here to help you safely connect to your community and the businesses you love.',
		locationImage,
		cafes: [
			// 'https://via.placeholder.com/225x275'
			{title: 'Factory Tea Bar', url: assets['Factory Tea Bar.png']},
			{title: 'Toasty', url: assets['Toasty-App.png']},
			{title: 'Majestea', url: assets['Majestea-App.png']},
			{title: 'Louisiana Charlie’s', url: assets['Louisiana-Charlies-App.png']},
			// center
			// need 326x527, but it's too small -> 'https://via.placeholder.com/326x587'
			{double: true, title: 'Bred Hot Chicken', url: assets['BredHot_Hold.jpg']},
			
			{title: 'Tonys Cable Car', url: assets['Tonys-App.png']},
			{title: 'Steep Creamery', url: assets['Steep-App.png']},
			{title: 'Lucca Deli', url: assets['Lucca-Deli-App.png']},
			{title: 'Station Burger', url: assets['Station Burger.png']},
		]
	},

	discoverSection: {
		locationImage,
		header: 'Discover your new go-to spot',
		comment: 'Revi let’s you connect seamlessly and safely with the businesses you love to support (and find your next favorites!)',
		labyrinth : {
			locationImage,
			// animation speed
			speed: 40,
			// user path line colors
			lineColorFrom: '#000851',
			lineColorTo: '#ff3b00',
			// street widths for mobile & desktop
			streetWidth: 20,
			streetWidthMobile: 10,
			// map roads gradient
			mapOutColor: 'rgba(0,6,74,.6)',
			mapInColor: 'rgba(255,255,255,.6)',
			// colors of shop bg
			shopColor: 'rgba(255,255,255,.2)',
			// active shop color
			activeShopColor: '#ff3b00',
			// shop sizes
			shopBoxSize: 60,			
			shopBoxSizeMobile: 50,			
		}
	},

	seeAllSection: {
		mainImage: selectedItem,
		header: 'See all there is to enjoy or quickly reorder your favorites',
		comment: 'Revi is here to help you safely reconnect to your community and the businesses you love. See the full menus, customize your preferences, fill your cart, and pay, wherever you are.',
		foodLine: {
			food: [
				{
					title: 'American Breakfast', 
					url: dishes['American-Breakfast.png']
				},
				{
					title: 'Hot Cocoa', 
					url: dishes['Hot-Cocoa.png']
				},
				{
					title: 'Breakfast Burrito', 
					url: dishes['Breakfast-Burrito.png']
				},
				{
					title: 'Latte', 
					url: dishes['Latte.png']
				},
				{
					title: 'Nutella Bagel', 
					url: dishes['Nuttela-Bagel.png']
				},
				{
					title: 'Lox Bagel', 
					url: dishes['Lox-Bagel.png']
				},
				{
					title: 'Pancakes', 
					url: dishes['Pancakes-Select.png']
				}
			],
			foodPointUrl: foodPoint,
			selectedFoodIndex: 3,
			selectedFoodPointUrl: selectedItem,
		}
	},

	becomeSection: {
		heartImage,
		confettiConfig: Object.assign({}, confettiConfig, {delayBeforeConfetty: 700}),
		header: 'Become a regular and earn rewards as part of the Revi community',
		rewardsList: [
			'Track visits and points',
			'Score free treats',
			'Earn Revi community exclusives'
		],
		selectedItem,
		bulletImage: bullet,
		confetti,
		confettiSize: [1298,950],
		achiveText: '<tspan fill="transparent">.xxxxx</tspan>REWARD ACHIVED',
	},
	shareSection: {
		logoUrl: sendIcon,//'https://via.placeholder.com/43x43/000/fff',
		header: 'Share the best with your community',
		comment: 'Connect with friends, neighbors, and local mavens to share your favorites and discover everything the community around you has to offer.',
		friends: happyFriends({showBaloons: false,short: false}),
		user1Text: 'Try the Chicken sandwich 😋',
		user2Text: '🌍\'s Best Chicken sandwich 😊',
		user3Text: 'Can\'t wait to try at lunch 🍽',
		user4Text: 'Me too! 🥳. 🙌',
		delay: 2000,
	},
	getStartSection: getStarted
}
