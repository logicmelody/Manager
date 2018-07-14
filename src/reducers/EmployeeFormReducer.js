import {
	EMPLOYEE_UPDATE,
} from '../actions/types';

const INITIAL_STATE = {
	name: "",
	phone: "",
	shift: "",
};

// 永遠都要 return 一個新的 object
export default (state = INITIAL_STATE, action) => {
	console.log(action);

	switch (action.type) {
		case EMPLOYEE_UPDATE:
			// For example:
			// action.payload = { prop: "name", value: "Jane" }
			return { 
				...state, 
				[action.payload.prop]: action.payload.value,
			};

		default:
			return state;
	}
};
