/**
 * Create baloon with defined direction and text
 * Baloon position should to set with css coords
 */

import './baloon.css';
/**
 * Type text emulation
 */
function Typed({}) {
	return (<div className="balloon-typed-anim">
		<span style={{animation: `balloon-typed-anim 2.4s 0s infinite`}}>⬤ </span> 
		<span style={{animation: `balloon-typed-anim 2.4s 0.8s infinite`}}>⬤ </span> 
		<span style={{animation: `balloon-typed-anim 2.4s 1.6s infinite`}}>⬤ </span> 
	 </div>);
}

/**
 * Custom baloon with some data
 * @param {Boolean} options.show     true for baloon show
 * @param {Boolean} options.fromLeft Tali from left side if true
 * @param {Boolean} options.fromTop  Tail look to top if true
 * @param {Object}  options.style    Custom style
 */
export default function Baloon({show = true, fromLeft = true, fromTop = true, typed = false, style={}, children=null}) {
	const tailClass = `baloon-${fromLeft ? 'left' : 'right'}-${fromTop ? 'top' : 'bottom'}`;
	const bodyData = typed ? <Typed/> : children;

	// render
	return <div style={style} className={`baloon-item ${tailClass} ${show ? 'baloon-visible' : 'baloon-hidden'}`}>
				<div className="baloon-item-text">{bodyData}</div>
			</div>;
}