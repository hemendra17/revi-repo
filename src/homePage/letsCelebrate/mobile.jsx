import ScreenCenter from './screenCenter.jsx';
import './letsCelebrateMobile.css';

export default function LetsCelebtrateMobile({firstShow, user, config}) {
	const celebrateSlide = (<div className={`home-mob-screen-8`}>
			<ScreenCenter config={config} user={user}/>
			<div className="hms-8-confetti" style={{backgroundImage: `url(${config.oneSlideConfettyUrl})`}}></div>
		</div>);

	return celebrateSlide;
}