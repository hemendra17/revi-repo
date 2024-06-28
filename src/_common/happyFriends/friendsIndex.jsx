/**
 * Provide a couple of portraits of users in a couple of rounds
 * Add: show text baloons on demand
 */
import './happyFriends.css';

export default function HappyFriends({data, isMobile=false, isShort=true, visible=false}) {
	const texts = (data.texts || []);
	const imagesCount = isShort ? 13 : 20;
	const srcImages  = data.images.slice(0, imagesCount); 
	const friends = data.clientsInOneImage 
			? <img className="happy-friends-image-grouped" src={data.clientsOneImageUrl}/>
			: srcImages.map((item, index) => (<img 
				key={index}
				className={`happy-friends-image happy-friends-img-${index+1}`}
				src={item}/>));

	return (<div className={`happy-friends ${isMobile ? 'mobile' : ''}`} style={{height: isShort ? 'inherit' : '490px'}}>
				<div className="happy-friends-wrap">
					{friends}
					<div className={`happy-friends-talk-1 ${data.showBaloons && visible ? 'display-baloon' : ''}`}>
						<div>{texts[0] || '⬤ ⬤ ⬤'}</div>
					</div>
					<div className={`happy-friends-talk-2 ${data.showBaloons && visible ? 'display-baloon' : ''}`}>
						<div>{texts[1] || '⬤ ⬤ ⬤'}</div>
					</div>
				</div>
			</div>);
}