import React, { Component } from 'react';
import Login from './components/login/login.jsx';
import Main from './components/main/main.jsx';
import Profile from './components/profile/profile.jsx';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.renderHref = this.renderHref.bind(this);
	}
	getNavigationList() {
		return [{ text: 'На главную', href: '' }, { text: 'Новости', href: '' }, { text: 'Профиль', href: '' }];
	}
	renderHref({ href, text }, key) {
		return (
			<li key={text}>
				<a href={href}>{text}</a>
			</li>
		);
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<ul>{this.getNavigationList().map(this.renderHref)}</ul>
				</header>
				<Main />
			</div>
		);
	}
}

//
// <p className="App-intro">
// 	To get started, edit <code>src/App.js</code> and save to reload.
// </p>
