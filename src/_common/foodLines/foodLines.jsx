import './foodLines.css';

/**
 * Exports food pictures in 1 (desktop) or 2 (mobile) lines
 */
export default function FoodLines({data, step, isMobile, enableCheckbox}) {
	let foodItems = data.food.map((item, 	index) => {
		const centeralImage = index == data.selectedFoodIndex;
		const selectedItem = centeralImage && ((step||0) >= 2 || enableCheckbox);
		const imgSrc = selectedItem ? data.selectedFoodPointUrl : data.foodPointUrl;
		const classNames = `qws-food-item ${centeralImage ? 'qws-food-item-selected' : ''}`;

		return (<div key={item.title+index} className={classNames} style={{backgroundImage: `url(${item.url})`}}>
				<img src={imgSrc}/><span>{item.title}</span>
			</div>);
	});

	if(isMobile) {
		const splitIndex = Math.floor(foodItems.length / 2);
		const centerItem = foodItems.slice(splitIndex, splitIndex+1);
		const replaceItemIndex = Math.floor(splitIndex / 2);
		const itemSwitch = foodItems[replaceItemIndex];

		// change item's places
		foodItems[replaceItemIndex] = foodItems[splitIndex];
		foodItems[splitIndex] = itemSwitch;

		foodItems = (<>
				<div className="qws-food-item-line">{foodItems.slice(0, splitIndex)}</div>
				<div className="qws-food-item-line">{foodItems.slice(splitIndex)}</div>
			</>)
	}

	// render
	return (<div className="qws-food-item-container">{foodItems}</div>);
}