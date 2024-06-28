import './storiesPage.css';
import Motivation from 'Common/motivationCarousele/motivationIndex.jsx';
import RevievedByRevi from 'Common/revievedByRevi/revievedIndex.jsx';
// scroller component
import Scm from 'Hand/scm/scm.jsx';

/**
 * Stories page
 * @param {Object} options.config   Main config of page
 * @param {Object} options.appConfig Application config
 * @param {Boolean} options.isMobile true on mobile mode
 */
export default function StoriesPage({config, appConfig, isMobile}) {
	const common = {
		isMobile,
		menuLightMode: (offset, isMobile, $) => true,
	};

	return (<Scm className="stories-page" appConfig={appConfig} setup={common}>
			<Motivation config={config.motivation} isMobile={isMobile}/>
			<RevievedByRevi config={config.revievedConfig} isMobile={isMobile}/>
		</Scm>);
}