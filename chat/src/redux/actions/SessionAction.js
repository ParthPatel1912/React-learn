import { SESSION } from '../../assets/constant/sagaConstant'

export const UserSession = (data) => {
	return {
		type: SESSION,
		payload: data
	};
};