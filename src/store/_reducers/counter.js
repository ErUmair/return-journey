import {
    REGISTER_USER,
} from '../_actions/type';

const initialState = {
    users: []
}

const counterReducer = (state = initialState, action) => {

    switch (action.type) {
        case REGISTER_USER:
            console.log("state", state);
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        default:
            return state;
    }
}

export default counterReducer;