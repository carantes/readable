import uuidv1 from 'uuid/v1';
import { fetchHandler, getEndpoint, getEndpointByCategory } from '../helpers/fetchHandler';

import {
    REQUEST_POSTS,
    RECEIVE_POSTS,
    UPDATE_POST_VOTE_COUNT,
    ADD_POST,
    UPDATE_POST,
    DELETE_POST,
} from './types';

const RESOURCE = 'posts';

function requestPosts(category) {
    return {
        type: REQUEST_POSTS,
        payload: category,
    };
}

function receivePosts(posts) {
    return {
        type: RECEIVE_POSTS,
        posts,
        receivedAt: Date.now(),
    };
}

function updatePostVoteCount(id, option) {
    return {
        type: UPDATE_POST_VOTE_COUNT,
        id,
        option,
        receivedAt: Date.now(),
    };
}

function addPost(post) {
    return {
        type: ADD_POST,
        post,
    };
}

function updatePost(post) {
    return {
        type: UPDATE_POST,
        post,
    };
}

function deletePost(id) {
    return {
        type: DELETE_POST,
        id,
    };
}

export function fetchGetPosts(category) {
    return (dispatch) => {
        dispatch(requestPosts(category));
        const onReceiveposts = posts => dispatch(receivePosts(posts));
        return fetchHandler(getEndpointByCategory(category, RESOURCE), {}, onReceiveposts);
    };
}

export function fetchUpdatePostVotes(postId, option) {
    return (dispatch) => {
        const onUpdatePostVoteCount = () => dispatch(updatePostVoteCount(postId, option));
        return fetchHandler(getEndpoint(RESOURCE, postId), { method: 'POST', body: { option } }, onUpdatePostVoteCount);
    };
}

export function fetchDeletePost(postId) {
    return (dispatch) => {
        const onDeletePost = () => dispatch(deletePost(postId));
        return fetchHandler(getEndpoint(RESOURCE, postId), { method: 'DELETE' }, onDeletePost);
    };
}

export function fetchGetPostById(postId, onReceivePost) {
    return fetchHandler(getEndpoint(RESOURCE, postId), {}, onReceivePost);
}

export function fetchInsertPost({ title, body, author, category }) {
    return (dispatch) => {
        const id = uuidv1();
        const payload = {
            id,
            timestamp: Date.now(),
            title,
            body,
            author,
            category,
        };
        const onInsertPost = () => dispatch(addPost({ id, title, body, author, category }));
        return fetchHandler(getEndpoint(RESOURCE), { method: 'POST', body: payload }, onInsertPost);
    };
}

export function fetchUpdatePost({ postId, title, body }) {
    return (dispatch) => {
        const payload = {
            title,
            body,
        };
        const onUpdatePost = () => dispatch(updatePost({ id: postId, title, body }));
        return fetchHandler(getEndpoint(RESOURCE, postId), { method: 'PUT', body: payload }, onUpdatePost);
    };
}
