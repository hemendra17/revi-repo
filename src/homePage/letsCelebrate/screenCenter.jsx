/**
 * Screen center dialog
 * @param {Object} options.config Slide config
 * @param {Object} options.user   Selected user config
 */
export default function ScreenCenter({config, user}) {
	return (
		<div className="lets-celebrate-center">
			<div className="lc-page-title">{config.title}</div>
			<div className="lc-box-wrap">
				<div className="lc-box-prim">
					<img src={user.logo}/> <span>{user.stage.subscription.name}</span>
					<div>{config.bonusTitle} {user.stage.cafes[user.stage.cafes.length-1].title}</div>
				</div>
			</div>
		</div>);
}