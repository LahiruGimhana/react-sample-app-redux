import { GET_USER_LIST, REMOVE_USER_LIST, EDIT_USER_LIST } from './actionTypes';


export const getUserList = (userList) => {
    return { type: GET_USER_LIST, userList };
}

export const removeUserList = (id) => {
    return { type: REMOVE_USER_LIST, id };
}

export const editUserList = (id) => {
    return { type: EDIT_USER_LIST, id };
}