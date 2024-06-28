/**
 * #revivedbyrevi block
 */
import './revieved.css';

export default function RevivedByRevi({config, isMobile}) {
	const lineSrc = isMobile ? config.line.slice(0, config.mobileCount) : config.line;
	const line = lineSrc.map((v,i) => <div key={i} className="revieved-line-item" style={{backgroundImage: `url(${v.url})`}}>
					<div className="revieved-line-item-channel">{v.channel}</div>
				</div>);

	return (<div className="revieved">
				<img className="revieved-img" src={config.instLogo} />
				<div className="revieved-hashtag">{config.hashTag}</div>
				<div className="revieved-comment">{config.comment}</div>
				<div className="revieved-line">{line}</div>
			</div>);
}