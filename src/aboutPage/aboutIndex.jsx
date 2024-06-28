import {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";

import Scm from 'Hand/scm/scm.jsx';
import Tabs from 'Common/tabs/tabsIndex.jsx';
import Micro from './micro/microIndex.jsx';
import './about.css';

/**
 * About page 
 * @param {Object} options.config   Config object
 * @param {Object} options.appConfig Application config
 * @param {Boolean} options.isMobile true if mobile mode
 */
export default function AboutPage({config, appConfig, isMobile}) {
	const urlParams = useParams();
	const common = {isMobile};

	// set called position once
	useEffect(() => {
		// scroll to actual slide
		if(urlParams.target) {
			switch(urlParams.target) {
				case 'team':
					// delay needs to avoid scroll to the top on page switching (standart action on switch)
					// setTimeout( () => window.scrollTo(0, isMobile ? 800 : 0), 100);
					setTimeout( () => window.scrollTo(0, 0), 100);
					break;
				case 'micro':
					setTimeout( () => window.scrollTo(0, isMobile ? 0 : 1150), 100);
					break;
			}
		}
	}, []);	

	const images = config.images.map((url,i) => <img key={i} className="about-welcome-images-item" src={url}/>)
	const [peopleData, updatePeople] = useState([]);
	const peopleCards = peopleData.map((v,i) => <div key={i} className="about-people-cards-item">
			<img className="about-people-cards-item-image" src={v.imageURL}/>
			<div className="about-people-cards-item-name">{v.name}</div>
			<div className="about-people-cards-item-pos">{v.position}</div>
			<div className="about-people-cards-item-text">{v.aboutText}</div>
			{v.linkedInUrl && <a className="about-people-cards-item-link" target="_blank" href={v.linkedInUrl}>LinkedIn</a>}
		</div>);

	// render
	return (<Scm className="about" appConfig={appConfig} setup={common}>
				<div className="about-welcome flexcolumn">
					<div className="about-welcome-header header-int">{config.header}</div>
					<div className="about-welcome-images">{images}</div>
				</div>
				<Micro config={config.micro} isMobile={isMobile}/>
				<div className="about-people flexcolumn">
					<div className="about-people-header header-int">{config.people.title}</div>
					<div className="about-people-comment comment">{config.people.comment}</div>
					<Tabs items={config.people.tabs} isMobile={isMobile} onChange={updatePeople}/>
					<div className="about-people-cards">{peopleCards}</div>
				</div>
				<div className="about-careers flexcolumn">
					<div className="about-careers-header header-white">{config.join.title}</div>
					<a className="about-careers-email" href={`mailto:${config.join.email}`}>{config.join.email}</a>
				</div>
			</Scm>);
}