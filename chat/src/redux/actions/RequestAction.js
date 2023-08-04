import { REQUEST, REQUEST_UPDATE } from '../../assets/constant/sagaConstant'

export const FriendRequest = (data) => {
	return {
		type: REQUEST,
		payload: data
	};
};

export const UpdateFriendRequest = (data) => {
	return {
		type: REQUEST_UPDATE,
		payload: data
	};
};