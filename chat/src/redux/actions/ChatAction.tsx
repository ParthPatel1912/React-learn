import { CHAT } from '../../assets/constant/sagaConstant'
import { CHAT_DELETE } from '../../assets/constant/sagaConstant'

export const ChatAction = (data: any) => {
    return {
        type: CHAT,
        payload: data
    };
};

export const ChatDelete = (data: any) => {
    return {
        type: CHAT_DELETE,
        payload: data
    };
};