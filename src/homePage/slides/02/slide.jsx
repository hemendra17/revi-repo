import Balloon from 'Common/baloon/baloonIndex.jsx';
import './slide.css';

function Food({data, track}) {
	return data.food.map((v,i) => <div key={i} className={track[`b2food${i+1}`].className} style={track[`b2food${i+1}`].style}>
								<div>
									<img className="hp-1-food-block-img" src={track[`b2food${i+1}`].triggers && track[`b2food${i+1}`].triggers.selected ? data.selectedFoodPointUrl : data.foodPointUrl}/>
									<span className="hp-1-food-block-title">{v.title}</span>
								</div>
							</div>);
}

export default function({config, data, track}) {
	// computed styles
	const phoneStyle = {
		top: '80px',
		width: '142px',
		position: 'relative',
		left: `${track.b2Order.triggers && track.b2Order.triggers.imgLeftOffset ? track.b2Order.triggers.imgLeftOffset : 0}px`
	};
	const compStyle = {
		top: '40px',
		width: '266px',
		position: 'relative',
		left: `${track.b2Order.triggers && track.b2Order.triggers.imgRightOffset ? track.b2Order.triggers.imgRightOffset : 0}px`
	};

	return (<div className="hp-1-slide">
			<div className="hp-1-slide-welcome header-white">{data.mainText}</div>
			<Food data={data} track={track}/>
			{/*sliding out users*/}
			<div className={track.b2u1.className} style={track.b2u1.style}>
				<img src={data.logoFriend1}/>
				<Balloon fromLeft={true} fromTop={false} style={{left: '200px', top: '-80px'}} show={Boolean(track.b2u1.triggers && track.b2u1.triggers.show)}>{data.textFriend1}</Balloon>
			</div>
			<div className={track.b2u2.className} style={track.b2u2.style}>
				<img src={data.logoFriend2}/>
				<Balloon fromLeft={false} fromTop={true} style={{right: '190px', top: '140px', zIndex: 2}} show={Boolean(track.b2u2.triggers && track.b2u2.triggers.show)}>{data.textFriend2}</Balloon>
			</div>
			{/*Order on premise or from your pocket*/}
			<div className={track.b2Order.className} style={track.b2Order.style}>
				<div className="header-white">{data.wayOrderText}</div>
				<div className="hp-1-order-block-devices">
					<div className="hp-1-order-block-devices-main" style={{backgroundImage: `url(${data.kioskImageUrl})`}}>
						<img style={phoneStyle} src={data.smartphoneImageUrl}/>
						<img style={compStyle} src={data.laptopImageUrl}/>
					</div>
				</div>
			</div>
		</div>)
}