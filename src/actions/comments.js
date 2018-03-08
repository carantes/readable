import { ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT } from './types';

export function addComment({ comment }) {
    return {
        type: ADD_COMMENT,
        payload: comment,
    };
}

export function editComment({ id, newComment }) {
    return {
        type: EDIT_COMMENT,
        payload: {
            id,
            newComment,
        },
    };
}

export function deleteComment({ id }) {
    return {
        type: DELETE_COMMENT,
        payload: id,
    };
}
