import React, { Component } from 'react';

//		return [{ text: 'На главную', href: '' }, { text: 'Новости', href: '' }, { text: 'Профиль', href: '' }];

export const Navigation = props => <ul>{props.children}</ul>;

export const NavigationLink = ({ children, href }) => (
	<li>
		<a href={href}>{children}</a>
	</li>
);
