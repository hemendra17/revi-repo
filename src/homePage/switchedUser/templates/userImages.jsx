import {useState} from 'react';

/**
 * User images items and subscriptions
 */
export default function UserImages({images, subscript, pos, size, step, userId}) {
	const [user, updateUser] = useState(null);
	const [ani, updateAni] = useState(false);
	/// stylize image
	function imageStyleBg(index) {
		const base = {
			backgroundImage: `url(${images[index]})`,
			// logo image (5) moved and scaled on stages 2,3
			backgroundPosition: (index == 4 && (step || 0) > 0) ? pos : 'center',
			backgroundSize: (index == 4 && (step || 0) > 0) ? size : 'auto',			
		};
		// animation
		base.animation = index != 4 && ani ? `moveImage${index+1} 1s ease-out` : 'unset';

		return base;
	}	
	// user images nodes generation
	const genImages = [1,2,3,4,5,6]
					.map(index => <div key={index} 
										className={`ussr-img ussr-img${index}`} 
										style={imageStyleBg(index-1)}>
									</div>);

	// when user changes = remove animation
	// and update it later
	if(userId != user) {
		updateUser(userId);
		updateAni(false);
		setTimeout(() => updateAni(true));
	}

	return (<>
		{/*gen 6 images: image 5 - is logo*/}
		{genImages}
		{/*<!-- subscription -->*/}
		<div className="userswitcher--stage-right-subscript">
			<span className="userswitcher--stage-right-subscript-name">{subscript.name}</span>, 
			<span className="userswitcher--stage-right-subscript-city"> {subscript.city}</span>
		</div>
	</>);
}