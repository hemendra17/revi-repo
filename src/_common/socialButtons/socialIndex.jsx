import './social.css';

/**
 * Social icons line
 * @return {Function} React creator
 */
export default function({config}) {
	const items = config.items.filter(v=>!v.disabled);
	const inner = items && items.length 
					? items.map((v, vIndex) => (<a key={vIndex} target="_blank" href={v.url}><img src={v.src}/></a>))
					: null;

	// render
	return (<div className="social-icons">{inner}</div>);
}