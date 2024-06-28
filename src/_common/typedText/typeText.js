// last request
let lastRequest = null;
let typeTimeout = -1;
let typeInterval = -1;

/**
 * Type text as a cursor. Not for sharing.
 * @param  {Ref} ref     Ref to element
 * @param  {String} fromText Start text
 * @param  {String} toText   Finish text
 * @param  {Object} params   Config params (for details look to code)
 * @param  {String} id   	 id of typed text
 * @return {String}          HTML string (not secure)
 */
export default function typeText(ref, fromText='Revi', toText='Reopen', params={}, id = null) {
	if(id != null && lastRequest != id) {
		const charSpeed = params.speed || 60;
		const eraseToSymbol = params.eraseSymbolNo || 0;
		const typeDelay = params.delay || 0;
		// changable text
		const fromTextArray = (fromText + ' ').split('');
		const toTextArray = (toText + ' ').split('');
		// text process
		const processText = params.processHTML || (_=>_);

		// type text
		function type(text='') {
			requestAnimationFrame(()=>{
				if(ref.current) {
					ref.current.innerHTML = processText(text, fromTextArray.length, toTextArray.index || 0);
				}
			});	
		}

		// stop previous drawing
		clearInterval(typeInterval);
		clearTimeout(typeTimeout)

		// no repeat of drawing
		lastRequest = id;
		// first output
		type(fromText);		

		// start output
		typeTimeout = setTimeout(()=>{
				typeInterval = setInterval(()=>{
				if(fromTextArray.length > eraseToSymbol) {
					fromTextArray.pop();
				} else {
					toTextArray.index = (toTextArray.index || 0) + 1; 
				}

				const str = fromTextArray.join('')+(fromTextArray.length <= eraseToSymbol ? toTextArray.slice(0, toTextArray.index || 0).join('') : '');

				// type text
				type(str, fromTextArray.length, toTextArray.index || 0);
				if(toTextArray.index >= toTextArray.length) {
					clearInterval(typeInterval);
				}
			}, charSpeed);
		}, typeDelay);
	}
}

export function reset() {
	lastRequest = null;
}

//  Default params for type text
export const defaultTypeParams = {
			eraseSymbolNo: 2, 
			speed: 50, 
			delay: 1000, 
			processHTML: (text, fromStringPos, toStringPos) => `<u>${text.slice(0,Math.max(fromStringPos, 2))}</u>${text.substr(Math.max(fromStringPos, 2))}`
		};