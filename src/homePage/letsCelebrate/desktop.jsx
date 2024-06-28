import {useState} from 'react';
import ScreenCenter from './screenCenter.jsx';
import Confetti from 'Common/confetti/indexConfetti.jsx';

import './letsCelebrate.css';

export default function LetsCelebtrateDesktop({firstShow, user, config}) {
	const [show, updateShow] = useState(false);

	if(firstShow && !show) {
		updateShow(true);
	}

	return (<div className={`lets-celebrate ${show ? 'lc-first-show' : ''}`}>
			<ScreenCenter config={config} user={user}/>
			<Confetti config={config.confetti} start={show} z={10}/>
		</div>)
}