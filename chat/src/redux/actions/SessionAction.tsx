import { SESSION } from '../../assets/constant/sagaConstant'

export const UserSession = (data: any) => {
	return {
		type: SESSION,
		payload: data
	};
};