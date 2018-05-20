import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

//		return [{ text: 'На главную', href: '' }, { text: 'Новости', href: '' }, { text: 'Профиль', href: '' }];

export const Navigation = props => <nav className="nav">{props.children}</nav>;

export const NavigationLink = ({ children, href }) => (
	<NavLink
		className="nav-link"
		exact
		activeStyle={{
			color: 'red'
		}}
		to={href}>
		{children}
	</NavLink>
);
