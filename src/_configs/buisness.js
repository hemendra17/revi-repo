import bullet from 'Comass/icon-check-orange.svg';
import checked from 'Comass/button-selected.svg';
import getStarted from './_common_configs/getStarted.js';
import motivation from './_common_configs/motivationCarousele.js';

// IMAGES
import kiosk from './assets/businessPage/the revi@2x.png';
import clamp from './assets/businessPage/revi clamp@2x.png';
import countertop from './assets/businessPage/revi countertop@2x.png';
import kioskActive from './assets/businessPage/the revi-selected@2x.jpg';
import clampActive from './assets/businessPage/revi clamp-selected@2x.jpg';
import countertopActive from './assets/businessPage/revi countertop-selected@2x.jpg';


import backgroundMobile from './assets/businessPage/Mobile-business-header-nocut.png';
import commerceLogo from './assets/businessPage/Hella-Halal-Logo@2x.png';
import commerceFace from './assets/businessPage/Owner Image.png';
import custQR from './assets/businessPage/QR.png';
import custQRMenu from './assets/businessPage/menu QR.png';
import custQRScan from './assets/businessPage/QR scan.png';
import custQRScanHalal from './assets/businessPage/Qr-Scan-Halal.png';
import custQRWeb from './assets/businessPage/WebOA-QR-REvi.png';
import custQRWindow from './assets/businessPage/Window-QR-Revi.png';

import itemOrdered from './assets/businessPage/item-ordered.png';
import itemLocation121 from './assets/businessPage/Location 121px.png';

import screenKitchen from './assets/businessPage/Kit-Revi-Business@2x.jpg';

import happyFaceLeft from './assets/businessPage/Left-HappyFaces-clean.png';
import happyFaceRight from './assets/businessPage/Right-HappyFaces-Clean.png';
import happyFaceMobile from './assets/businessPage/Mobile-HappyFaces-Clean.png';

import screenDashboard from './assets/businessPage/Dash-Revi-Business@2x.jpg';

export default {
	hereToDrive: {
		header: 'Bring your business into the future 🚀',
		comment: 'Revi is a Simple, Seamless and Safe ordering system that doesn’t just take orders but also drives revenue.',
		buttons: {
			main: {
				title: 'Get Started with Revi',
				link: '/schedule'
			},
			sec: {
				title: 'Get Revi',
				link: '/schedule'
			}
		},
		background: backgroundMobile,
		videoId: 'GDUId6NljYA',
		videoParams: {
			autoplay: 1,
			loop: 1,
			playlist: 'GDUId6NljYA',
			controls: 0,
			// origin: 'http://getrevi.com',
			modestbranding: 1,
			showinfo:0,
			mute:1
		} 
	},
	stickyMenu: ['On Premise', 'Benefits', 'Digital Menus', 'Order Ahead', 'Kitchen Kit', 'Connect', 'Dashboard'], 
	openForBusiness: {
		header: 'Open for business',
		comment: 'A seamless experience for your customers, Revi allows you to deepen engagement while keeping your business efficient and safe.',
		button: {
			title: 'Get Started with Revi ',
			link: '/schedule'
		},
		cards: [
			{title: '+20%', comment: 'Increase average ticket size by [20%]'},
			{title: '+40k', comment: 'Average [$40,000/year] in labor cost savings per locations.'},
			{title: '+22%', comment: 'Grow repeat customer visits by [22%]'},
		],
		repeatCards: 2,
		timeout: 3000
	},
	simpleSeamless: {
		header: 'Here to drive and revive business',
		comment: 'Our app-based customer experience combined with on-premise Revi devices allow you to safely reconnect, interact, and reward your customers.',
		items: [
			{
				url: countertop, //'https://picsum.photos/360/290', 
				urlActive: countertopActive, 
				title: 'Revi Countertop',
				comment: 'Simplify and connect order processing for your employees with Revi Countertop',
				buttonTitle: 'Get Revi Countertop',
			},
			{
				url: kiosk, //'https://picsum.photos/360/290', 
				urlActive: kioskActive, 
				title: 'The Revi',
				comment: 'Allow your customers to order safely and enjoyably with The Revi',
				buttonTitle: 'Get Revi Standing',
			},
			{
				url: clamp, //'https://picsum.photos/360/290', 
				urlActive: clampActive, 
				title: 'Revi Clamp',
				comment: 'A lightweight self-ordering solution for food business that are on-the-go, the Revi Clamp',
				buttonTitle: 'Get Revi Clamp',
			}
		],
		timeout: 10000,
		initSlide: 1,
		button: {
			title: 'Get Revi',
			link: '/schedule'
		}
	},
	commerce: {
		header: 'Commerce Revolutionized',
		benefitBullet: bullet,
		benefits: [
			{title: 'Efficiency', comment: 'Streamline every step of your process with Revi by connecting front of house to back of house.'},	
			{title: 'Scalability', comment: 'Every day you work hard to grow your business. From a new menu item to a new employee to an entirely new location, our solution grows along with you.'},	
			{title: 'Safety', comment: 'The safety of your customers and employees is your top priority. We help you serve your customers at a safe distance, with security features that protect your business.'},	
			{title: 'Connectivity', comment: 'Reach new customers, re-connect with past customers, and make regulars feel extra special more often with Revi.'},	
		],
		button: {
			title: 'Get Started with Revi',
			link: '/schedule'
		},
		owner: {
			logo: commerceLogo,
			image: commerceFace,
			name: 'Jae',
			cafeTitle: 'Owner, Hella Hallal',
			comment: '“Revi’ really does help us out greatly! I can focus my time on building up the business.”'
		}
	},
	meetCustomers: {
		qrURL: custQR,
		header: 'Meet your customers where they are',
		comment: 'Easy-access virtual menus wherever your customers discover you. We\'ll even make sure you capture your offerings in beautiful photos.',
		imgs: [
			custQRMenu, //'https://picsum.photos/225/275',
			custQRWindow, //'https://picsum.photos/473/275'
			custQRScan, //'https://picsum.photos/225/275',
			custQRScanHalal, //'https://picsum.photos/588/574',
			custQRWeb, //'https://picsum.photos/473/275',
		]
	},
	allowCustomers: {
		header: 'Allow customers to safely order ahead',
		comment: 'Our app-based customer experience combined with on-premise Revi devices allow you to safely reconnect, interact, and reward your customers.',
		card1Url: itemOrdered, //'https://picsum.photos/420/550',
		card2Url: custQRMenu, //'https://picsum.photos/298/364',
		card3Url: itemLocation121, //'https://picsum.photos/121/248',
		card1Title: 'Jill, your drink is ready!',
		titleBullet: checked
	},
	tools: {
		header: 'Tools that make business operations breezy',
		comment: 'The Revi platform includes a suite of behind the scenes tools that make managing your business and serving your customers a breeze.',
		info: {
			title: 'Seamless integration to complete orders',
			comment: 'Revi Kitchen Kit creates a seamless experience for your team, allowing you to quickly process orders',
			items: [
				'Track orders easily with integrated front-of-house',
				'Notify customers on the spot via text message',
				'Update availability live with Revi menu features',
				'Organize customers, orders, tables, and kitchen stations',
				'Simple receipt and refund functionality'
			],
			bullet
		},
		cardUrl: screenKitchen //'https://picsum.photos/700/540',
	},
	connectWith: {
		baloonText: 'Tell a friend for 20% off!',
		logoUrl: commerceLogo, //'https://picsum.photos/60/60',
		header: 'Connect with your customers and acquire new ones',
		comment: 'As a Revi business partner, you gain access to Revi’s entire ecosystem of customers. Revi can automate messaging on your behalf, enticing repeat business from your current customers and helping you reach thousands of new ones!',
		leftGroupUrl: happyFaceLeft, //'https://picsum.photos/360/490',
		rightGroupUrl: happyFaceRight, //'https://picsum.photos/360/490',
		mobileGroupUrl: happyFaceMobile, //'https://picsum.photos/400/295',
		baloonDelay: 2500,
		user1Text: 'Try the Chicken sandwich 😋',
		user2Text: '🌍\'s Best Chicken sandwich 😊',
		user3Text: 'Can\'t wait to try at lunch 🍽',
		user4Text: 'Me too! 🥳. 🙌',
	},
	trackSales: {
		cardUrl: screenDashboard, //'https://picsum.photos/700/540',
		title: 'Track your sales, orders, top items and more',
		items: [
			'Access sales information real-time',
			'Identify top performing items',
			'Track Revi upsell and marketing impact',
			'Edit restaurant menu at any time',
			'Export data for seamless accounting'
		],
		bullet,
		button: {
			title: 'Schedule a Demo',
			link: '/schedule'
		}
	},
	motivation,
	getBusinessUp: Object.assign({}, getStarted, {
		getStarted: 'Get your business up and running on Revi',
		scheduleDemo: 'Schedule a demo',
		hideBage: true
	})
}
