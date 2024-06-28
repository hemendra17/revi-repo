import billy from 'Comass/owners/falafelland-billy_owner.png';
import adam from 'Comass/owners/Owner-AdamsGrubTruck-75px.png';
import sophie from 'Comass/owners/Sophie-Toasty-75px.png';

export default {
	items: [
		{	
			comment: '', // '“Revi not only helps me drive operations, it has revived my business”',
			header: 'Because it\'s me, myself and I working here in Falafelland. ‘Revi’ allows for me to serve 20+ customers even by myself.',
			owner: {
				logo: billy, //'https://picsum.photos/74/74',
				name: 'Billy',
				cafe: 'Owner of Fallafelland',
			},
			// cardType: 'image', 
			// url: 'https://picsum.photos/571/380',
			// urlMobile: 'https://picsum.photos/390/300',
			cardType: 'video',
			data: {
				url: 'https://youtu.be/zfzzAftSbRs', // not uses
				code: 'zfzzAftSbRs',
				desktop: [571, 322],
				mobile: [390, 220]
			}
		},
		{	
			comment: '', // '“Revi not only helps me drive operations, it has revived my business”',
			// header: 'I have seen my tips and per ticket items go up and it is exciting to make more money through the Revi System, I make sure my cashiers push people to use the kiosk because I make more money that way.',
			header: 'I have seen my tips and per ticket items go up and it is exciting to make more money through the Revi System.',
			owner: {
				logo: sophie, //'https://picsum.photos/74/74',
				name: 'Sophie',
				cafe: 'Owner of Toasty',
			},
			// cardType: 'image', 
			// url: 'https://picsum.photos/571/380',
			// urlMobile: 'https://picsum.photos/390/300',
			cardType: 'video',
			data: {
				url: 'https://youtu.be/0tvnXbjs9SY',
				code: '0tvnXbjs9SY',
				desktop: [571, 322],
				mobile: [390, 220]
			}
		},
		{	
			comment: '', // '“Revi not only helps me drive operations, it has revived my business”',
			header: 'I really love it! It gives us another outlet for revenue. The photos really helps entice customers to order from the Kiosk.',
			owner: {
				logo: adam, //'https://picsum.photos/74/74',
				name: 'Adam',
				cafe: 'Owner of Adams Grub Truck',
			},
			// cardType: 'image', 
			// url: 'https://picsum.photos/571/380',
			// urlMobile: 'https://picsum.photos/390/300',
			cardType: 'video',
			data: {
				url: 'https://youtu.be/-6ibxGX9LfE',
				code: '-6ibxGX9LfE',
				desktop: [571, 322],
				mobile: [390, 220]
			}
		}
	],
	initItemIndex: 1	
}