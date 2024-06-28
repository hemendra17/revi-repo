import {useState, useEffect, useRef} from 'react';
import Confetty from './confetty.js';

import './confetti.css';

export default function({config, start = false, z = 10}) {
	const canvasRef = useRef(null);
	const [work, updateWork] = useState(false);
	const [confetty, updateConf] = useState(() => new Confetty(config))

	// run when start fired
	if(start && !work) {
		confetty.start();
		updateWork(true);
	}

	// every recreate - attach to canvas
	useEffect(() => {
		canvasRef.current && confetty.attachCanvas(canvasRef.current);

		return () => confetty.detachCanvas();
	});

	// render
	return (<canvas className="confetti-canvas"
			style={{zIndex: z}}
			width={innerWidth}
			height={innerHeight} 
			ref={canvasRef}>
		</canvas>);
}