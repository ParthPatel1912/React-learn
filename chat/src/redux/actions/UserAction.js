import { USER_SIGNUP, USER_SIGNIN, USER_NAME_UPDATE, USER_PASSWORD_UPDATE } from '../../assets/constant/sagaConstant'

export const UserAdd = (data) => {
	return {
		type: USER_SIGNUP,
		payload: data
	};
};

export const UserCheck = (data) => {
	return {
		type: USER_SIGNIN,
		payload: data
	};
};

export const UserNameUpdate = (data) => {
	return {
		type: USER_NAME_UPDATE,
		payload: data
	};
};

export const UserPasswordUpdate = (data) => {
	return {
		type: USER_PASSWORD_UPDATE,
		payload: data
	};
};