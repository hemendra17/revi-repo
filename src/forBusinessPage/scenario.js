import {desktop} from './stickyMenu/offsets.js';

export default function() {
	return {
		main: [
			{
				range: [0, 10000],
				triggers: {
					stickyTop: (top, pr, $) => top >= 770,
					stickyTopMobile: (top, pr, $) => 0,//top > 770 ? top + 60 : 0,
					stickyIndex: (top, pr, $) => desktop.filter(offset => offset <= top).length - 1,
					stickyIndexMobile: (top, pr, $) => -1,

					openBusiness: (top, pr, $) => top > 500,
					openBusinessMobile: (top, pr, $) => false,

					simpleSeamless: (top, pr, $) => top > 1100,
					simpleSeamlessMobile: (top, pr, $) => false,

					allowCustomers: (top, pr, $) => top > 4100,
					allowCustomersMobile: (top, pr, $) => false,

					tools: (top, pr, $) => top > 5300,
					toolsMobile: (top, pr, $) => false,

					connect: (top, pr, $) => top > 6400,
					connectMobile: (top, pr, $) => top > 7300,

					trackSales: (top, pr, $) => top > 7300,
					trackSalesMobile: (top, pr, $) => false,
				}				
			}
		]
	}
}
