import img1 from './assets/aboutPage/revi team majestea@2x.jpg';//.png';
import img2 from './assets/aboutPage/revi team elliott@2x.jpg';//.png';
import img3 from './assets/aboutPage/revi team milli@2x.jpg';//.png';
import img4 from './assets/aboutPage/revi team customer@2x.jpg';//.png';
import img5 from './assets/aboutPage/revi team Siemone@2x.jpg';//.png';
import img6 from './assets/aboutPage/revi team aakash@2x.jpg';//.png';
import img7 from './assets/aboutPage/Revi Team Bred@2x.jpg';//.png';
import img8 from './assets/aboutPage/revi team soma@2x.jpg';//.png';

import micro_m from './assets/aboutPage/micro/MICRO-Magnetic-525x199@2x.jpg';//.png';
import micro_i from './assets/aboutPage/micro/MICRO-Intuitive-525x199@2x.jpg';//.png';
import micro_c from './assets/aboutPage/micro/MICRO-Concientious-525x199@2x.jpg';//.png';
import micro_r from './assets/aboutPage/micro/MICRO-Responsive-525x199@2x.jpg';//.png';
import micro_o from './assets/aboutPage/micro/MICRO-Optimistic-525x199@2x.jpg';//.png';

import peopleEugene from  './assets/aboutPage/people/Revi-Eugene-CEO.png';
import peopleRavij from  './assets/aboutPage/people/Revi-Ravij-Ops.png';
import peopleJustin from  './assets/aboutPage/people/Revi-Justin-Product.png';
import peopleAakash from  './assets/aboutPage/people/Revi-Aakash-Eng.png';

export default {
	header: 'It takes work. It takes care. It takes massive imagination.',
	images: [
		img1, // 'https://picsum.photos/225/275',
		img2, // 'https://picsum.photos/225/275',
		img3, // 'https://picsum.photos/500/275',
		img4, // 'https://picsum.photos/302/275',
		img5, // 'https://picsum.photos/225/275',
		img6, // 'https://picsum.photos/225/275',
		img7, // 'https://picsum.photos/326/275',
		img8, // 'https://picsum.photos/472/275'
	],
	micro: {
		title: 'Revi. Be MICRO',
		comment: 'Let’s not confuse MICRO with small.',
		switchDelay: 5000,
		items: [
			{
				letter: 'M', 
				header: 'Magnetic', 
				text: 'Being MICRO is a fixation with the details that make the difference between a transaction and an experience that leaves us charmed.\nMICRO takes work.', 
				imageURL: micro_m //'https://picsum.photos/532/199'
			},
			{
				letter: 'I', 
				header: 'Intuitive', 
				text: 'MICRO is a plate of warm olives. It’s a box that glides shut in 3.4 seconds. It’s remembering your name and your drink order. It’s an easter egg that you weren’t expecting and plan to share.', 
				imageURL: micro_i //'https://picsum.photos/532/199'
			},
			{
				letter: 'C', 
				header: 'Conscientious', 
				text: 'MICRO takes massive imagination.\nThe companies we admire, from the most valuable companies in the world to the singular institutions revered for the experiences they create, they all share this obsession with detail.', 
				imageURL: micro_c //'https://picsum.photos/532/199'
			},
			{
				letter: 'R', 
				header: 'Responsive', 
				text: 'And even though they’re fabulously successful, it’s that micro-focus that leaves us besotted with them. They don’t feel looming and generic. They feel like they’re ours.\nMICRO takes care.', 
				imageURL: micro_r //'https://picsum.photos/532/199'
			},
			{
				letter: 'O', 
				header: 'Optimistic', 
				text: 'And in the face of macro trends, sweeping change, and massive disruption, it truly is the little things that keep us going.\nMICRO takes hope.', 
				imageURL: micro_o //'https://picsum.photos/532/199'
			},
		]
	},
	people: {
		title: 'One revolution forward',
		comment: 'It\'s the small things that make a big impact.',
		tabs: {
			'Leadership': [
				{
					name: 'Eugene Johnson', 
					position: 'CEO', 
					imageURL: peopleEugene, //'https://picsum.photos/357/357', 
					aboutText: 'Eugene is a man of faith, a husband, a father, Revi CEO, an investor, and the Author of The Mental Playbook. Eugene\'s desire is to build amazing products and businesses that impact the world. Eugene go-to slogan is “Let no man steal your vision because no man gave it to you"', 
					linkedInUrl: 'https://www.linkedin.com/in/eugenekjohnson1'
				},
				{
					name: 'Raj Katira', 
					position: 'Operations', 
					imageURL: peopleRavij, //'https://picsum.photos/357/357', 
					aboutText: 'Raj is a master operator of growing businesses. He is maniacally focused on delivering best in class Partner and Consumer experience leveraging his e-commerce experience with major brands and Retailers. He winds down listening to music, spinning and playing golf.', 
					linkedInUrl: 'https://www.linkedin.com/in/rajivkatira'
				},
				{
					name: 'Aakash Tyagi', 
					position: 'Engineering', 
					imageURL: peopleAakash, //'https://picsum.photos/357/357', 
					aboutText: 'Aakash is a software developer who is focused on delivering the best solutions for any business problem out there. He’s also very much interested in writing, creating music, and experimenting in the kitchen combining Indian spices with different cuisines.', 
					linkedInUrl: 'https://www.linkedin.com/in/aakash-tyagi-19209210/'
				}
			],
			// 'Board': [
			// 	{
			// 		name: 'User Name-5', 
			// 		position: 'User position', 
			// 		imageURL: 'https://picsum.photos/357/357', 
			// 		aboutText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloribus minima exercitationem ullam enim sunt perferendis in error nostrum? Excepturi earum doloremque ex neque odio iusto nemo eius ipsam sapiente.', 
			// 		linkedInUrl: 'https://linked.in'
			// 	},
			// 	{
			// 		name: 'User Name-6', 
			// 		position: 'User position', 
			// 		imageURL: 'https://picsum.photos/357/357', 
			// 		aboutText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloribus minima exercitationem ullam enim sunt perferendis in error nostrum? Excepturi earum doloremque ex neque odio iusto nemo eius ipsam sapiente.', 
			// 		linkedInUrl: 'https://linked.in'
			// 	}
			// ],
			// 'Advisors': [
			// 	{
			// 		name: 'User Name-7', 
			// 		position: 'User position', 
			// 		imageURL: 'https://picsum.photos/357/357', 
			// 		aboutText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloribus minima exercitationem ullam enim sunt perferendis in error nostrum? Excepturi earum doloremque ex neque odio iusto nemo eius ipsam sapiente.', 
			// 		// linkedInUrl: 'https://linked.in'
			// 	},
			// 	{
			// 		name: 'User Name-8', 
			// 		position: 'User position', 
			// 		imageURL: 'https://picsum.photos/357/357', 
			// 		aboutText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloribus minima exercitationem ullam enim sunt perferendis in error nostrum? Excepturi earum doloremque ex neque odio iusto nemo eius ipsam sapiente.', 
			// 		linkedInUrl: 'https://linked.in'
			// 	},
			// 	{
			// 		name: 'User Name-9', 
			// 		position: 'User position', 
			// 		imageURL: 'https://picsum.photos/357/357', 
			// 		aboutText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloribus minima exercitationem ullam enim sunt perferendis in error nostrum? Excepturi earum doloremque ex neque odio iusto nemo eius ipsam sapiente.', 
			// 		linkedInUrl: 'https://linked.in'
			// 	}
			// ],
		}
	},
	join: {
		title: 'Want to join the team?',
		email: 'careers@getrevi.com'
	}
}