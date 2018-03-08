import { API_ENDPOINT, REQUEST_CATEGORIES, RECEIVE_CATEGORIES } from './types';

function getCategoryEndpoint() {
    return `${API_ENDPOINT}/categories`;
}

function requestCategories() {
    return {
        type: REQUEST_CATEGORIES,
        payload: {},
    };
}

function receiveCategories({ categories }) {
    return {
        type: RECEIVE_CATEGORIES,
        categories,
        receivedAt: Date.now(),
    };
}

export default function fetchCategories() {
    return (dispatch) => {
        dispatch(requestCategories());
        return fetch(getCategoryEndpoint(), { method: 'GET', headers: { authorization: 'readable' } })
            .then(response => response.json())
            .then(json => dispatch(receiveCategories(json)));
    };
}
