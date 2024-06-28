/**
 * Typed text on main page
 */
import {useEffect, useRef} from 'react';
import typeText, {defaultTypeParams, reset} from './typeText.js';


function TypedText({className, retext, mode}) {
	const retextRef = useRef(null);

	// on page init - type text
	useEffect(() => {
		typeText(retextRef, retext.textFrom, retext.textTo, defaultTypeParams, mode);

		return () => reset();
	});	

	return (<div className={className||''} ref={retextRef}></div>);
}

// recreate typing string on user changing only
export default React.memo(TypedText)