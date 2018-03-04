export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

const CATEGORY_ENDPOINT = 'http://localhost:3001/categories';

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

export function fetchCategories() {
    return (dispatch) => {
        dispatch(requestCategories());
        return fetch(CATEGORY_ENDPOINT, { method: 'GET', headers: { authorization: 'readable' } })
            .then(response => response.json())
            .then(json => dispatch(receiveCategories(json)));
    };
}

