/**
 * Footer external component
 */
import {Link} from "react-router-dom";
import SocialButtons from 'Common/socialButtons/socialIndex.jsx';
import './footer.css';

/**
 * Link of different types according to stype
 * @param {Object} options.item Item data
 */
function LinkItem({item}) {
	// for current page links will be normal link
	const pageHash = location.hash.split('/').filter((v,i) => i < 2).join('/').substr(1); // remove # and tail
	// closest links
	const force = item.url.indexOf(pageHash) > -1;
	const url = item.url;
	const isInnerLink = item.url.startsWith('/');
	const forceReload = () => force && (location.replace(`#${url}`), location.reload());

	// inner or outer link
	return isInnerLink
		? <Link className="footer-menu-item-point" to={url} onClick={forceReload}>{item.caption}</Link>
		: <a className="footer-menu-item-point" href={url}>{item.caption}</a>
}

/**
 * One menu record/link
 * @param {Object} options.item Params of item
 */
function MenuItem({item}) {
	let element = null;

	// header
	if(item.caption && !item.url) {
		element = <div className="footer-menu-item-header">{item.caption}</div>;
	}
	// menu
	if(item.caption && item.url) {
		{/*element = <a className="footer-menu-item-point" href={item.url}>{item.caption}</a>;*/}
		element = <LinkItem item={item}/>;
	}
	// social images
	if(item.socialIcons) {
		element = <SocialButtons config={item.config}/>;
	}
	
	return element;	
}

/**
 * One column of menu items
 * @param {Object} options.menu Mesu section config
 */
function MenuSection({menu}) {
	const src = [{caption: menu.title}, ...menu.items];
	const menuItems = src.map((item, index) => <MenuItem key={index} item={item}/>);

	return (<div className="footer-menu-item">{menuItems}</div>);
}

/**
 * A couple of items columns 
 * @param {Object} options.menus Config of all items
 */
function MenuBlock({menus}) {
	return menus.map((menu, menuIndex) => <MenuSection key={menuIndex} menu={menu}/>);
}

/**
 * Footer block
 * @param {Object} options.data config data
 */
export default function Footer({data}) {
	// footer subsctiption
	const subscription = data.subscript.map((v,i) => <span key={i}>{v.replace('2020', (new Date).getFullYear().toString())}</span>);
	// hide footer according settings
	if(data.hide) {
		return (<div></div>);
	}

	// render
	return (<div className="footer">
			<div className="footer-main">
				<div className="footer-main-info">
					<img className="footer-main-logo" src={data.logo}/>
					<div className="footer-subscript">{subscription}</div>
				</div>
				<div className="footer-menu">
					<MenuBlock menus={data.menus}/>
					<div className="footer-subscript-mobile">{(data.subscript[0] || '').replace('2020', (new Date).getFullYear().toString())}</div>
					<div className="footer-subscript-mobile">{data.subscript[1] || ''}</div>
				</div>
			</div>
		</div>);
}