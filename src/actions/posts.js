export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

const REQUEST_POSTS = 'REQUEST_POSTS';

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

function getPostsEndpoint(category) {
    const POSTS_BASE_ENDPOINT = 'http://localhost:3001';
    return category ? `${POSTS_BASE_ENDPOINT}/${category}/posts` : `${POSTS_BASE_ENDPOINT}/posts`;
}

export function fetchPosts(category) {
    return (dispatch) => {
        dispatch(requestPosts(category));
        return fetch(getPostsEndpoint(category), { method: 'GET', headers: { authorization: 'readable' } })
            .then(response => response.json())
            .then(json => dispatch(receivePosts(json)));
    };
}

export function addPost({ post }) {
    return {
        type: ADD_POST,
        payload: post,
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

export function deletePost({ id }) {
    return {
        type: DELETE_POST,
        payload: id,
    };
}
