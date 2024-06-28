import {useState, useEffect} from 'react';

/**
 * Tabs and dropdown control
 * Filter included data
 */
import './tabs.css';

/**
 * Desktop present
 * @param {Array}    options.items           Items
 * @param {Number}   options.selectedIndex   Selected item
 * @param {Function} options.onClickCallback Fires on select another item
 */
function InlineTabs({items=[], selectedIndex = 0, onClickCallback = () => {}}) {
	const tabs = items.map((v,i) => <div key={i} className={`tabs-inline-item ${i == selectedIndex ? 'active' : ''}`} onClick={() => onClickCallback(v)}>{v}</div>);

	return (<div className="tabs-inline">{tabs}</div>);
}

/**
 * Mobile present
 * @param {Array}    options.items           Items
 * @param {Number}   options.selectedIndex   Selected item
 * @param {Function} options.onChangeCallback Fires on select another item
 */
function DropdownTabs({items=[], selectedIndex = 0, onChangeCallback = () => {}}) {
	const [value, update] = useState(items[selectedIndex]);
	const options = items.map((v,i) => <option key={i} value={v}>{v}</option>);

	function onChange(evt) {
		const val = evt.target.value;

		onChangeCallback(val);
		update(val);
	}

	return (<select className="tabs-select" value={value} onChange={onChange}>{options}</select>);
}

/**
 * Tab select component
 * @param {Object}   options.items Object key-array 
 * @param {Boolean}  isMobile      true for mobile version
 * @param {Function} onChange      fires on tab change
 * @param {Number}   initIndex     active key index by default
 */
export default function Tabs({items = {}, isMobile = false, onChange = () => {}, initIndex = 0}) {
	const [index, update] = useState(initIndex);
	const keys = Reflect.ownKeys(items);
	const click = (key) => {onChange(items[key]); update(keys.indexOf(key))};
	const input = isMobile
			? <DropdownTabs items={keys} onChangeCallback={click} selectedIndex={index}/>
			: <InlineTabs items={keys} onClickCallback={click} selectedIndex={index}/>;

	// first init - callback
	useEffect(() => {onChange(items[keys[index]])}, []);

	// render
	return (<div className="tabs">{input}</div>);
}