import {
    RECEIVE_POSTS,
    ADD_POST,
    EDIT_POST,
    DELETE_POST,
    UPDATE_POST_VOTE_COUNT,
    ADD_COMMENT,
} from '../actions/types';

function posts(state = [], action) {
    switch (action.type) {
        case RECEIVE_POSTS:
            return action.posts;
        case ADD_POST:
            console.log(action.post);
            return [
                action.post,
                ...state,
            ];
        case UPDATE_POST_VOTE_COUNT:
            return state.map((item) => {
                if (item.id === action.id) {
                    const voteScore = action.option === 'downVote' ? item.voteScore - 1 : item.voteScore + 1;
                    return { ...item, voteScore };
                }
                return item;
            });
        case ADD_COMMENT:
            return [];
        case EDIT_POST:
            return [];
        case DELETE_POST:
            return state.map((item) => {
                if (item.id === action.id) {
                    return { ...item, deleted: true };
                }
                return item;
            });
        default:
            return state;
    }
}

export default posts;
