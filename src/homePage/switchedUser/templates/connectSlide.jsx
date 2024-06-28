import {Link} from "react-router-dom";
/**
 * And connect with local buissnes block
 * @param {String} options.likeUrl    url to heart image
 * @param {Array} options.texts      Array of strings
 * @param {String} options.followLink link to follow button
 * @param {String} options.followText Text in follow button
 */
export default function ConnectSlide({likeUrl, texts, followLink, followText}) {
	const link = (followLink || '').startsWith('/') 
			? <Link to={followLink}><span className="revi-button">{followText}</span></Link>
			: <a className="revi-button" href={followLink}>{followText}</a>;
			
	return (<>
			<img src={likeUrl}/>
			<div className="uss4-right-data">
				{texts.map((text,ndx) => <div key={ndx}>{text}</div>)}
				{followLink && link}
			</div>
		</>);
}