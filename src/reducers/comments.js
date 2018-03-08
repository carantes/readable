import {
    ADD_COMMENT,
    EDIT_COMMENT,
    DELETE_COMMENT,
} from '../actions/types';

function comments(state = [], action) {
    const { payload } = action;
    switch (action.type) {
        case ADD_COMMENT:
            return [
                ...state,
                payload,
            ];
        case EDIT_COMMENT:
            return [];
        case DELETE_COMMENT:
            return state.splice(payload, 1);
        default:
            break;
    }

    return state;
}

export default comments;
