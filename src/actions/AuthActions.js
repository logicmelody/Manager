import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER_ING,
} from './types';

export const emailChanged = (text) => ({
	type: EMAIL_CHANGED,
	payload: text,
});

export const passwordChanged = (text) => ({
	type: PASSWORD_CHANGED,
	payload: text,
});

export const loginUser = ({ email, password }) => {
	return (dispatch) => {
		loginUserIng(dispatch);

		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(user => loginUserSuccess(dispatch, user))
			.catch((error) => {
				console.log(error);

				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(user => loginUserSuccess(dispatch, user))
					.catch(() => loginUserFail(dispatch));
			});
	};
};

function loginUserSuccess(dispatch, user) {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user,
	});

	Actions.main();
}

function loginUserFail(dispatch) {
	dispatch({
		type: LOGIN_USER_FAIL,
	});
}

function loginUserIng(dispatch) {
	dispatch({
		type: LOGIN_USER_ING,
	});
}
