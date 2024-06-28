import {Link} from "react-router-dom";

/**
 * Desktop menu block
 */
export default function DesktopMenuBlock({config}) {
	const items = (config.items || []).filter(v=>v && v.usage && v.usage.includes('desktop'));
	// menu items' list
	const menuItems = items.map((menu, index) =>
				<div key={`i${index}`} className={menu.className}>
					{menu.link 
						? <a href={menu.url}>{menu.title}</a>
						: <Link to={menu.url}>{menu.title}</Link>}
				</div>);

	// menu items block
	const getReviLink = config.getReviLink.startsWith('/')
							? <Link to={config.getReviLink}>Get Revi</Link>
							: <a href={config.getReviLink}>Get Revi</a>;

	// desktop menu block
	return (<div className="navbar--actions">
				{!config.hideMenuItems && menuItems}
				<div className="navbar--getrevi" style={{backgroundImage: `url(${config.getReviLinkLogo})`}}>
					{getReviLink}
				</div>
			</div>);
}