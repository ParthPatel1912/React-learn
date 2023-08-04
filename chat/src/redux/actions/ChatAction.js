import { CHAT } from '../../assets/constant/sagaConstant'
import { CHAT_DELETE } from '../../assets/constant/sagaConstant'

export const ChatAction = (data) => {
    return {
        type: CHAT,
        payload: data
    };
};

export const ChatDelete = (data) => {
    return {
        type: CHAT_DELETE,
        payload: data
    };
};