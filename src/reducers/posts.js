import {
    RECEIVE_POSTS,
    RECEIVE_COMMENTS,
    ADD_POST,
    UPDATE_POST,
    DELETE_POST,
    UPDATE_POST_VOTE_COUNT,
} from '../actions/types';

function posts(state = [], action) {
    switch (action.type) {
        case RECEIVE_POSTS:
            return action.posts;
        case RECEIVE_COMMENTS:
            return state.map((item) => {
                if (item.id === action.postId) {
                    return {
                        ...item,
                        comments: action.comments,
                    };
                }
                return item;
            });
        case ADD_POST:
            return [
                action.post,
                ...state,
            ];
        case UPDATE_POST:
            return state.map((item) => {
                if (item.id === action.post.id) {
                    const { title, body } = action.post;
                    return { ...item, title, body };
                }
                return item;
            });
        case UPDATE_POST_VOTE_COUNT:
            return state.map((item) => {
                if (item.id === action.id) {
                    const voteScore = action.option === 'downVote' ? item.voteScore - 1 : item.voteScore + 1;
                    return { ...item, voteScore };
                }
                return item;
            });
        case DELETE_POST:
            return state.map((item) => {
                if (item.id === action.id) {
                    return { ...item, deleted: true };
                }
                return item;
            }).filter(post => !post.deleted);
        default:
            return state;
    }
}

export default posts;
