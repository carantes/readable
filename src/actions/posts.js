import uuidv1 from 'uuid/v1';

import {
    API_ENDPOINT,
    REQUEST_POSTS,
    RECEIVE_POSTS,
    UPDATE_POST_VOTE_COUNT,
    ADD_POST, EDIT_POST,
    DELETE_POST,
} from './types';

function getPostListEndpoint(category = '') {
    return category === '' ? `${API_ENDPOINT}/posts` : `${API_ENDPOINT}/${category}/posts`;
}

function getPostEndpoint(id = '') {
    return `${API_ENDPOINT}/posts/${id}`;
}

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

export function fetchGetPosts(category) {
    return (dispatch) => {
        dispatch(requestPosts(category));
        return fetch(getPostListEndpoint(category), { method: 'GET', headers: { authorization: 'readable' } })
            .then(response => response.json())
            .then(json => dispatch(receivePosts(json)));
    };
}

export function addPost(post) {
    return {
        type: ADD_POST,
        post,
    };
}

export function editPost({ id, newPost }) {
    return {
        type: EDIT_POST,
        payload: {
            id,
            newPost,
        },
    };
}

export function deletePost(id) {
    return {
        type: DELETE_POST,
        id,
    };
}

export function fetchUpdatePostVotes(postId, option) {
    const options = { method: 'POST', headers: { authorization: 'readable' }, body: { option } };
    return dispatch =>
        fetch(getPostEndpoint(postId), options)
            .then(response => response.json())
            .then(json => dispatch(updatePostVoteCount(postId, option)));
}

export function fetchDeletePost(postId) {
    const options = { method: 'DELETE', headers: { authorization: 'readable' } };
    return dispatch =>
        fetch(getPostEndpoint(postId), options)
            .then(response => response.json())
            .then(json => dispatch(deletePost(postId)));
}

export function fetchPostPost(post) {
    return (dispatch) => {
        const options = {
            method: 'POST',
            headers: { authorization: 'readable' },
            body: {
                id: uuidv1(),
                timestamp: Date.now(),
                title: post.title,
                body: post.body,
                author: post.author,
                category: post.category,
            },
        };
        fetch(getPostEndpoint(), options)
            .then(response => response.json())
            .then(json => dispatch(addPost(json)));
    };
}
