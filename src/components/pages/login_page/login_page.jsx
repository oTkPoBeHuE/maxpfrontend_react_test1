import React, { PureComponent } from 'react';

export default class Login extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange({ target: { name, value } }) {
		this.setState({
			[name]: value
		});
	}

	handleSubmit(event) {
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input placeholder="Имя" type="text" name="username" value={this.state.username} onChange={this.handleChange} />
				<input
					placeholder="Пароль"
					type="password"
					name="password"
					value={this.state.password}
					onChange={this.handleChange}
				/>
				<input name="submit" type="submit" value="Войти" />
			</form>
		);
	}
}
