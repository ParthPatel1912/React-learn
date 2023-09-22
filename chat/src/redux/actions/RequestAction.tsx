import { REQUEST, REQUEST_UPDATE } from '../../assets/constant/sagaConstant'

export const FriendRequest = (data: any) => {
	return {
		type: REQUEST,
		payload: data
	};
};

export const UpdateFriendRequest = (data: any) => {
	return {
		type: REQUEST_UPDATE,
		payload: data
	};
};