/**
 * Page section help
 * React && ReactDOM import powered by webpack config
 */
import CafesBlock from './cafes.jsx';
import './helpStyle.css'

/**
 * The Revi App is help... section
 * @param {Object} options.config Config
 */
export default function AppPageHelp({config, active=false, isMobile}) {
	return (<div className={`app-page-help ${isMobile || active ? "" : 'app-page-help-nonactive'}`}>
			<div className="app-page-help-header">{config.header}</div>
				<CafesBlock config={config}/>
		</div>);
}

	