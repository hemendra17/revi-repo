import React from 'react'
import { useEffect } from 'react'
import screen4 from '../images/SVG/all_svg_imagea/tree_son_screen/screen_4_bg_hills.svg'
import screen1 from '../images/SVG/all_svg_imagea/tree_son_screen/screen_1_sun.svg'
import screen3 from '../images/SVG/all_svg_imagea/tree_son_screen/screen_3_lighttrees.svg'
import screen2 from '../images/SVG/all_svg_imagea/tree_son_screen/screen_2_blue_trees.svg'
import { throttle } from 'lodash'
export default function Sunbanner() {
     
	useEffect(() => {
		const handleScroll = throttle(() => {
			let value = window.scrollY;
			document.getElementById('sun').style.top = value * 0.2 + 'px';
			document.getElementById('hillsBg').style.top = value * -0.1 + 'px';
			document.getElementById('lightTree').style.top = value * -0.1 + 'px';
		}, 100); // adjust the delay as needed

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
  return (
    <>
    <section className="sunBannersec">
  <img src={screen4} id="hillsBg" className="hillsBg" />
  <img src={screen1} id="sun" className="sun" />
  <img src={screen3} id="lightTree" className="lightTree" />
  <img src={screen2} id="blueTree" className="blueTree" />
</section>

    </>
  )
}
