import appLogo from './assets/menu/revi_tangerine.svg';

export default {
	appLogo,
	title: 'Upgrade your business today!',
	points: [
		{title: 'Implementation', price: '$1,397', bonus: 'Free'},
		{title: 'Hardware', price: '$1,500', bonus: 'Free'},
		{title: 'Software', price: '$3,000', bonus: 'Free'},
		{title: 'Marketing', price: '$697/month', bonus: 'Free'}
	],

	scheduleTitle: 'I’m ready to grow my business, schedule a live demo.',
	fields: [
		{
			title: 'First Name*',
			name: 'firstName',
			type: 'string',
			maxLength: 100,
		},
		{
			title: 'Last Name*',
			name: 'lastName',
			type: 'string',
			maxLength: 100,
		},
		{
			title: 'Business Name*',
			name: 'businessName',
			type: 'string',
			maxLength: 255,
		},
		{
			title: '# of Locations*',
			name: 'location',
			type: 'list',
			list: [...Array(21).keys(), ">20"],
		},
		{
			title: 'Phone Number*',
			name: 'phoneNumber',
			type: 'string',
			mask: /^\+?[\d|\s]+$/,
			maxLength: 12,
		},
		{
			title: 'Email*',
			name: 'Email',
			type: 'string',
			mask: /^.+\@.+\..+$/,
			maxLength: 100,
		},
		{
			title: 'Reason Interested*',
			name: 'reasonInterested',
			type: 'list',
			list: [
				'Employee efficiency',
				'Labor cost',
				'Autonomous marketing',
				'Increase per ticket item',
				'Automated Upselling on Kiosk',
				'Increase Order Accuracy',
				'Decrease your Lines',
				'Showcase Promotions',
				'Create the Optimal Guest Experience',
			],
		},
		{
			title: 'How did you hear about us?*',
			name: 'trafficSource',
			type: 'list',
			list: [
				'Facebook',
				'Instagram',
				'Referral',
				'Revi Website',
				'Revi Account Rep'
			],
		},
	],
	buttonTitle: 'Schedule a demo',
	onSubmitText: 'Please, wait...',
	onSuccessText: 'Thanks for reaching out! We’ll be in touch soon!',
	homePageRedirectTitle: 'Go to the home page',
	onFailText: 'Something goes wrong :-(',
	tryAgainText: 'Try again',
	// to send data
	sendData: {
		subject: 'New customer',
		email: 'aakash@zyrl.us',
		url: 'https://zmail.zyrl.us/kit-email?sendTo=%EMAIL%&subject=%SUBJECT%&body=%BODY%'
	}
};
