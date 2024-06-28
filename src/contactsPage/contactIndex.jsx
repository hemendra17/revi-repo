// scroller component
import Scm from 'Hand/scm/scm.jsx';
import RevievedByRevi from 'Common/revievedByRevi/revievedIndex.jsx';
import './contacts.css';

/**
 * Contacts page
 * @param {Object} options.config   Main config of page
 * @param {Object} options.appConfig Application config
 * @param {Boolean} options.isMobile true on mobile mode
 */
export default function Contacts({config, appConfig, isMobile}) {
	const bgImgStyle = {backgroundImage: `url(${config.sendIcon})`};
	const common = {isMobile};
	const cards = config.cards.map((v,i) => <div key={i} className="contacts-top-cards-item" style={bgImgStyle}>
			<div className="contacts-top-cards-item-title">{v.title}</div>
			<div className="contacts-top-cards-item-comment">{v.comment}</div>
			<div className="contacts-top-cards-item-email">{v.email}</div>
		</div>);

	// render
	return (<Scm className="contacts-page" appConfig={appConfig} setup={common}>
				<div className="contacts-top">
					<div className="contacts-top-hello">{config.email}</div>
					<div className="contacts-top-cards">{cards}</div>
				</div>
				<RevievedByRevi config={config.revievedConfig} isMobile={isMobile}/>
			</Scm>);
}