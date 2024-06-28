/**
 * Caffe blocks
 */

export default function CaffeBlock({cafes, cafePointUrl, size, processFn, isMobile}) {
	// cafe images generation
	const startItems = processFn ? processFn([...cafes]) : cafes;
	const cafeBlocks = startItems
					.map((value, index, arr) => {
						const style = {backgroundImage: `linear-gradient(rgba(0,0,0,.5), transparent), url(${value.url})`};
						const className = `uscafee ${index==arr.length-1 ? '' : 'uscafe-shaded'}`;

						if(value.position) {
							style.backgroundPosition = (isMobile && value.mobile && 'position' in value.mobile) 
									? value.mobile.position 
									: value.position;
						}

						if(value.scale) {
							style.backgroundSize = (isMobile && value.mobile && 'scale' in value.mobile) 
									? value.mobile.scale 
									: value.scale;
						}

						if(Array.isArray(size)) {
							style.width = `${size[0]}px`;
							style.height = `${size[1] || size[0]}px`;
							style.marginLeft = Math.round(size[0]/20);
							style.marginBottom = Math.round(size[0]/21);
						}

						return <div key={index}
									className={className} 
									style={style}>
									<img className="uscafee-title-location" src={cafePointUrl}/>
									<div className="uscafee-title">{value.title}</div>
								</div>});
	const sliceIndex = Math.round(cafeBlocks.length/2);

	return (<div className="userswitcher--cafes">
				<div className="userswitcher--cafes-line">{cafeBlocks.slice(0, sliceIndex)}</div>
				<div className="userswitcher--cafes-line">{cafeBlocks.slice(sliceIndex)}</div>								
			</div>);
}