/**
 * export dishes images
 */

const dishes = {};

(function (r) {
	r.keys().forEach(key => dishes[key.replace('./','')] = r(key).default);
})(require.context('./dishes', true, /\.(png|svg)$/));

export default dishes;
