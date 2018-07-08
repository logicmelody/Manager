import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import {
	Card,
	CardSection,
	Input,
	Button,
	Spinner,
} from './common';
import {
	emailChanged,
	passwordChanged,
	loginUser,
} from '../actions';

class LoginForm extends Component {
	_onEmailChange(text) {
		this.props.emailChanged(text);
	}
	_onPasswordChange(text) {
		this.props.passwordChanged(text);
	}
	_onButtonPress() {
		const { email, password } = this.props;

		this.props.loginUser({ email, password });
	}
	_renderError() {
		const { error } = this.props;

		if (error) {
			return (
				<View style={{ backgroundColor: 'white' }}>
					<Text style={styles.errorTextStyle}>{error}</Text>
				</View>
			);
		}
	}
	_renderButton() {
		return this.props.loading ?
			<Spinner size={'large'} /> :
			<Button onPress={this._onButtonPress.bind(this)}>
				Login
		  	</Button>;
	}
	render() {
		return (
			<Card>
				<CardSection>
					<Input
						label='Email'
						placeholder='email@gmail.com'
						onChangeText={this._onEmailChange.bind(this)}
						value={this.props.email}
					/>
				</CardSection>

				<CardSection>
					<Input
						label='Password'
						placeholder='password'
						secureTextEntry
						onChangeText={this._onPasswordChange.bind(this)}
						value={this.props.password}
					/>
				</CardSection>

				{this._renderError()}

				<CardSection>
					{this._renderButton()}
				</CardSection>
			</Card>
		);
	}
}

const styles = StyleSheet.create({
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red',
	},
});

const mapStateToProps = state => {
	const { email, password, error, loading } = state.auth;

	return { email, password, error, loading };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
