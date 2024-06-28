/**
 * Gen cafes block
 * @param {Array} options.config Array of items
 */
export default function CafesBlock({config}) {
	const cafes = config.cafes || [];
	const items = [];

	// break to columns
	for(let i=0, len=cafes.length; i < len; i++) {
		const item = cafes[i];
		const last = i > 0 ? items[items.length-1] : null;
		const next = last && !last.finished ? last : [];
		const newItem = (<div key={i} 
							className="app-page-help-cafe-column-item" 
							style={{backgroundImage: `linear-gradient(rgba(0,0,0,.3), transparent), url(${item.url})`}}>
							<img className="app-page-help-column-item-location" src={config.locationImage}/>
							<div className="app-page-help-column-item-title">{item.title}</div>
						</div>);

		next.push(newItem);
		next.finished = next.length > 1 || item.double;

		if(next != items[items.length-1]) {
			items.push(next);
		}
	}

	// render
	return (<div className="app-page-help-cafes">
			{items.map((v,index) => <div key={index*100} className={`app-page-help-cafe-column ${v.length > 1 ? '' : 'double'}`}>{v}</div>)}
		</div>);
}