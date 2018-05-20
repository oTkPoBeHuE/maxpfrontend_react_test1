import React, { PureComponent } from 'react';
import Login from './components/pages/login_page/login_page';
import Home from './components/pages/home_page/home_page';
import Profile from './components/pages/profile/profile';
import News from './components/pages/news_page/news_page';

import { Switch, Route } from 'react-router-dom';
import { NavigationLink, Navigation } from './components/navigation/navigation.jsx';
import { withRouter } from 'react-router-dom';

import './style.css';
// Rename Main to Home

class App extends PureComponent {
	render() {
		// console.log('location', this.props.match);
		return (
			<div className={'container bg-light'}>
				<header className="mxpf1-navigation">
					<Navigation>
						<NavigationLink href="/">На главную</NavigationLink>
						<NavigationLink href="/news">Новости</NavigationLink>
						<NavigationLink href="/profile">Профиль</NavigationLink>
						<NavigationLink href="/login">Вход</NavigationLink>
					</Navigation>
				</header>
				<div className={'d-flex justify-content-center  mt-5'}>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/news" component={News} />
						<Route path="/login" component={Login} />
						<Route path="/profile" component={Profile} />
						{/* <Route component={NotFound} /> */}
					</Switch>
				</div>
			</div>
		);
	}
}

export default withRouter(App);
//
// <p className="App-intro">
// 	To get started, edit <code>src/App.js</code> and save to reload.
// </p>
