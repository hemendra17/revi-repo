import Button from 'Common/button/buttonIndex.jsx';
import TypedText from 'Common/typedText/typeTextIndex.jsx';
import './slide.css';

/// cafe title
function CafeTitle({track, logo, title}) {
	return (<div className={track.className} style={track.style}>
				<img src={logo}/>
				<span>{title}</span>
			</div>);
}

/// slided right item with info
function ReviHelpInfo({track, data}) {
	return (<div className={track.className} style={track.style}>
				<img className="hp-0-cafe-main-right-heart" src={data.likePointUrl}/>
				<div className="hp-0-cafe-main-right-about">
					{data.explainTexts.map((text, i) => <div key={i} className="hp-0-cafe-main-right-text">{text}</div>)}
					<Button config={{link: data.followLink, title: data.followLinkText}}/>
				</div>
			</div>);
}

/// Slide #1 -> typing text, images deck
export default function Slide1({track, user={}, config={}}) {
	return (<div className={`hp-0 ${user.mode || ''}`} data-scm-id="slide-01">
				<div className="hp-0-left-top-0">
					<TypedText className="hp-0-retext" retext={user.stage.retext} mode={user.mode}/>
					<div className="hp-0-scroll-down">
						<img 
							className="hp-0-scroll-down-btn"
							src={config.rollDownImage} 
							alt="discover revi"
						/>
						Discover Revi
					</div>					
				</div>
				<img src={user.stage.images[0]} className={track.b1i1.className} style={track.b1i1.style}/>
				<img src={user.stage.images[1]} className={track.b1i2.className} style={track.b1i2.style}/>
				<img src={user.stage.images[2]} className={track.b1i3.className} style={track.b1i3.style}/>
				<img src={user.stage.images[3]} className={track.b1i4.className} style={track.b1i4.style}/>
				<img src={user.stage.images[5]} className={track.b1i6.className} style={track.b1i6.style}/>
				{/*main image*/}
				<div className={track.userLogo.className} style={track.userLogo.style}></div>
				{/*subscryption*/}
				<div className="hp-0-right-top-subscrypt">
					<span>{user.stage.subscription.name}</span>, 
					<span style={{fontFamily: 'ObjectSansRegular'}}>{user.stage.subscription.city}</span>
				</div>

				{/*-------------*/}

				{/*User name block*/}
				<div className={track.b1UserPlace.className} style={track.b1UserPlace.style}>{user.stage.subscription.name.split(' ')[0]}'s Places</div>
				<div className={track.b1UserPlaceComment.className} style={track.b1UserPlaceComment.style}>{user.stage.discoverTitle}</div>

				{/*Cafe images*/}
				<div className={track.b1Cafe1.className} style={track.b1Cafe1.style}>
					<CafeTitle track={track.b1CafeMainPoint} logo={config.connectWithBusiness.cafePointUrl} title={user.stage.cafes[0].title}/>
				</div>
				<div className={track.b1Cafe2.className} style={track.b1Cafe2.style}>
					<CafeTitle track={track.b1CafeMainPoint} logo={config.connectWithBusiness.cafePointUrl} title={user.stage.cafes[1].title}/>
				</div>
				<div className={track.b1Cafe3.className} style={track.b1Cafe3.style}>
					<CafeTitle track={track.b1CafeMainPoint} logo={config.connectWithBusiness.cafePointUrl} title={user.stage.cafes[2].title}/>
				</div>
				<div className={track.b1Cafe4.className} style={track.b1Cafe4.style}>
					<CafeTitle track={track.b1CafeMainPoint} logo={config.connectWithBusiness.cafePointUrl} title={user.stage.cafes[3].title}/>
				</div>
				<div className={track.b1Cafe5.className} style={track.b1Cafe5.style}>
					<CafeTitle track={track.b1CafeMainPoint} logo={config.connectWithBusiness.cafePointUrl} title={user.stage.cafes[4].title}/>
				</div>
				{/*main logo image*/}
				<div className={track.b1CafeMain.className} style={track.b1CafeMain.style}>
					<CafeTitle track={track.b1CafeMainPoint} logo={config.connectWithBusiness.cafePointUrl} title={user.stage.cafes[5].title}/>
					{/* Connect with your ... */}
					<div className={track.b1CafeMainLeft.className} style={track.b1CafeMainLeft.style}>{config.connectWithBusiness.mainText}</div>
					{/* Revi help... */}
					<ReviHelpInfo track={track.b1CafeMainRight} data={config.connectWithBusiness}/>
				</div>
			</div>);
}