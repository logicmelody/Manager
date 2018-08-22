import firebase from "firebase";
import { Actions } from "react-native-router-flux";
import {
	EMPLOYEE_UPDATE,
	EMPLOYEE_CREATE,
} from './types';

export function employeeUpdate({ prop, value }) {
	return {
		type: EMPLOYEE_UPDATE,
		payload: { prop, value },
	};
}

export function employeeCreate({ name, phone, shift }) {
	const { currentUser } = firebase.auth();

	return (dispatch) => {
		// 在firebase中，可以用 /users/${currentUser.uid}/employees
		// 這種像url的方式去reference json格式的data
		firebase.database().ref(`/users/${currentUser.uid}/employees`)
			.push({ name, phone, shift })
			.then(() => {
				dispatch({
					type: EMPLOYEE_CREATE
				});
				Actions.pop();
			});
	};
}
