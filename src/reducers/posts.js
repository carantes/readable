import {
    RECEIVE_POSTS,
    ADD_POST,
    EDIT_POST,
    DELETE_POST,
} from '../actions/posts';

import { ADD_COMMENT } from '../actions/comments';

function posts(state = [], action) {
    const { payload } = action;
    switch (action.type) {
        case RECEIVE_POSTS:
            return action.posts;
        case ADD_POST:
            return [
                ...state,
                payload,
            ];
        case ADD_COMMENT:
            return [];
        case EDIT_POST:
            return [];
        case DELETE_POST:
            return state.splice(payload, 1);
        default:
            break;
    }

    return state;
}

export default posts;
