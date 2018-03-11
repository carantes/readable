import { fetchHandler, getEndpoint } from '../helpers/fetchHandler';
import { ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT, REQUEST_COMMENTS, RECEIVE_COMMENTS } from './types';

const RESOURCE = 'comments';

function requestComments(postId) {
    return {
        type: REQUEST_COMMENTS,
        postId,
    };
}

function receiveComments(postId, comments) {
    return {
        type: RECEIVE_COMMENTS,
        postId,
        comments,
        receivedAt: Date.now(),
    };
}

function addComment({ comment }) {
    return {
        type: ADD_COMMENT,
        payload: comment,
    };
}

function editComment({ id, newComment }) {
    return {
        type: EDIT_COMMENT,
        payload: {
            id,
            newComment,
        },
    };
}

function deleteComment({ id }) {
    return {
        type: DELETE_COMMENT,
        payload: id,
    };
}

export default function fetchGetComments(postId) {
    return (dispatch) => {
        dispatch(requestComments(postId));
        const onReceiveComments = comments => dispatch(receiveComments(postId, comments));
        return fetchHandler(`http://localhost:3001/posts/${postId}/${RESOURCE}`, {}, onReceiveComments);
    };
}