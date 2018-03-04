export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

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
