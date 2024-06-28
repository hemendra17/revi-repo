/**
 * Happy friends common config
 */

// friends images import
import friends from 'Comass/friends.js';
// import allFriends from 'Comass/friends/all-friends.png';

export default function({showBaloons=true, texts=[], short=true}) {
	const data = {
		// friends on 1 image together
		clientsInOneImage: false,
		// clientsOneImageUrl: allFriends, // comment for pack size optimization
		images: [
			friends.friendSmall02,
			friends.friendLarge03,
			friends.friendSmall01,
			friends.friendLarge02,
			friends.friendMedium01,
			friends.friendSmall04,
			friends.friendLarge05,
			friends.friendSmall05,
			friends.friendLarge04,
			friends.friendSmall03,
			friends.friendSmall06,
			friends.friendSmall07,
			friends.friendLarge01,
		],
		// show baloons
		showBaloons,
		// baloon's texts
		texts
	};

	if(!short) {
		const subImages = [
			friends.friendSmall08,
			friends.friendSmall09,
			friends.friendSmall10,

			friends.friendSmall11,
			friends.friendSmall12,
			friends.friendSmall13,

			friends.friendMedium02
		];

		data.images = [...data.images, ...subImages];
	}

	return data;
}