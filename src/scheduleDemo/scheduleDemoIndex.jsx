/**
 * Schedule demo page
 * Upgrade your buisness today
 */
import {useState} from "react";

import './sceduleDemo.css';


function SceduleDemoButton({params}) {
	// Submit data and redirect to home page
	async function onSubmit(evt) {
	console.log(params.data)	
		const body = Object.entries(params.data).map(v=>`${v[0]} - ${v[1]}`).join(', \n');
		const url = params.dispatch.url
						.replace('%EMAIL%', params.dispatch.email)
						.replace('%SUBJECT%', params.dispatch.subject)
						.replace('%BODY%', body);
		// before send handler
		params.onStart();
		const response = await fetch(encodeURI(url));

		// when request is finished
		if(response.ok) {
			params.onFinish();
		} else {
			params.onError();
		}
	}

	return (<button className="revi-button" onClick={onSubmit} disabled={params.nonFilled}>{params.title || '?'}</button>)
}


function ScheduleDemoBox({config, data, filled, onProcess=() => {}}) {
	// 0 - before send
	// 1 - sending
	// 2 - send success
	// 3 - send failed
	const [frame, update] = useState(0);
	// params for button
	const demoButtonPrams = {
		title: config.buttonTitle,
		dispatch: config.sendData,
		data,
		nonFilled: !filled,
		onStart: () => {update(1); onProcess(true);},
		onFinish: () => update(2),
		onError: () => update(3),
	};

	// link click
	function onTryAgainClick(evt) {
		update(0);
		onProcess(false);
		evt.preventDefault();
	}

	let element = null;

	switch(frame) {
		case 0:
			element = <SceduleDemoButton params={demoButtonPrams}/>;
			break;
		case 1: 
			element = <div className="schedule-demo-form-submit-body">{config.onSubmitText}</div>;
			break;
		case 2: 
			element = (<div className="schedule-demo-form-submit-body">
					<div>{config.onSuccessText}</div>
					<a href="/">{config.homePageRedirectTitle}</a>
				</div>);
			break;
		case 3: 
			element = (<div className="schedule-demo-form-submit-body error-color">
					<div>{config.onFailText}</div>
					<a href="#" onClick={onTryAgainClick}>{config.tryAgainText}</a>
				</div>);
			break;
	}

	// render
	return (<div className="schedule-demo-form-submit">{element}</div>);
}

// create object
function getEmptyData(src, initValue = null) {
	return Object.fromEntries(src.map(v=>[v.name, initValue === null ? v.type == 'select' ? v.title : '' : initValue]));
}

// Check input value
function checkInputField(record, value) {
	const maskCheck = ('mask' in record && (value || '').length > 0)? record.mask.test(value) : true;
	const typeCheck = true;

	return maskCheck && typeCheck ? '': 'value-incorrect';
}


/**
 * Schedule demo page
 * @param {Object} options.config Configuration
 * @param {Object} options.isMobile true if mobile view
 */
export default function ScheduleDemo({config, isMobile}) {
	const [data, update] = useState(getEmptyData(config.fields));
	const [hideForm, updateHideForm] = useState(false);
	const filled = Object.entries(data).every(v=>v[1] && v[1].length && v[1].length > 0);

	// data changing
	function dataChanged(name) {
		return function(evt) {
			const newData = Object.assign({}, data);

			newData[name] = evt.target.value;
			update(newData);
		}
	}

	// promo data lines
	const promoLines = config.points.map((point, index) => 
			<div key={index} className="schedule-demo-info-promo-line">
				<div className="schedule-demo-info-promo-line-title">{point.title}</div>
				<div className="schedule-demo-info-promo-line-price">{point.price}</div>
				<div className="schedule-demo-info-promo-line-bonus">{point.bonus}</div>
			</div>);

	const fields = config.fields.map((field, index) =>
			field.type == 'string' || field.type == 'number'
				? <input id={field.name} 
						className={checkInputField(field, data[field.name])}
						key={index} 
						value={data[field.name]}
						onChange={dataChanged(field.name)}
						placeholder={field.title} 
						maxLength={field.maxLength} 
						style={{width: `${field.width*100}%`}}/>

				: <select id={field.name} 
						key={index}
						value={data[field.name]}
						onChange={dataChanged(field.name)}>
					{[field.title, ...field.list].map((v,i) => <option key={i} value={v}>{v}</option>)}
				</select>);

	// render
	return (<div className={`schedule-demo ${isMobile ? 'mobile' : ''}`}>
				<img className="schedule-demo-logo" src={config.appLogo}/>
				<span className="schedule-demo-close" onClick={() => history.back()}>×</span>
				
				<div className="schedule-demo-data">
					{/* hi there */}
					<div className="schedule-demo-info">
						<div className="schedule-demo-info-header">{config.title}</div>
						<div className="schedule-demo-info-promo">{promoLines}</div>
					</div>
					{/* form */}
					<div className={hideForm ? 'schedule-demo-form-short' : 'schedule-demo-form'}>
						<div className="schedule-demo-form-wrap">
							{!hideForm && <p className="schedule-demo-form-title">{config.scheduleTitle}</p>}
							{!hideForm && <div className="schedule-demo-form-fields">{fields}</div>}
							{/*finish block*/}
							<ScheduleDemoBox config={config} data={data} filled={filled} onProcess={updateHideForm}/>
						</div>
					</div>
				</div>
			</div>);
}