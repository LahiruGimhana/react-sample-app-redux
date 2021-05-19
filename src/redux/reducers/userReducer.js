import { GET_USER_LIST, REMOVE_USER_LIST ,EDIT_USER_LIST} from '../actions/actionTypes';

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_USER_LIST:
            if (action.userList) {
                let usrList = Object.keys(action.userList).reduce((acc, key) => {
                    action.userList[key].userId = key;
                    acc[key] = action.userList[key];

                    return acc;

                }, {})
                state = { ...usrList };

            }
            return state;

        case REMOVE_USER_LIST:
            let tempPrev = { ...state };
            delete tempPrev[action.id];
            state = tempPrev;
            return state;
            
        case EDIT_USER_LIST:
            // let tempPrev = { ...state };
            // delete tempPrev[action.id];
            // state = tempPrev;
            return state;
            
        default:
            return state
    }
}

export default userReducer;