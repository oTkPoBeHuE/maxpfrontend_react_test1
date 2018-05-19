import React, { PureComponent } from 'react';
import image from './image.png';
import './profile.css';

export default class Profile extends PureComponent {
	render() {
		return (
			<div className={'mxpf1-profile'}>
				<img src={image} alt={'Image'} width={'450px'} />
				{/* <p>Открылась бездна звезд полна; Звездам числа нет, бездне дна.</p> */}
			</div>
		);
	}
}

//
// <p className="App-intro">
// 	To get started, edit <code>src/App.js</code> and save to reload.
// </p>
