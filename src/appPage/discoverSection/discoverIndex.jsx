import {useRef, useState} from 'react';

/**
 * Page section discover
 * React && ReactDOM import powered by webpack config
 */

import drawer from './labyrinth.js';
import './discoverStyle.css'

/**
 * Discover app slide
 * @param {Object} options.config   Section config
 * @param {Boolean} options.isMobile is mobile view
 */
export default function AppPageDiscover({config, isMobile}) {
	const ref = useRef(null);
	const canvasWidth = isMobile ? 600 : 763;
	const canvasHeight = isMobile ? 413 : 575;

	useState(() => {
		drawer.install(ref, config.labyrinth, isMobile)

		return () => drawer.uninstall();
	});

	return (<div className="app-page-discover">
				<div className="app-page-discover-info">
					<div className="app-page-discover-location">
						<img src={config.locationImage}/>
					</div>
					<div className="app-page-discover-header">{config.header}</div>
					<div className="app-page-discover-comment">{config.comment}</div>
				</div>
				<div className="app-page-discover-image">
					<canvas ref={ref} width={canvasWidth} height={canvasHeight}/>
				</div>
			</div>)
}

	