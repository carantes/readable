import { REQUEST_CATEGORIES, RECEIVE_CATEGORIES } from './types';
import { fetchHandler, getEndpoint } from '../helpers/fetchHandler';

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
        const onReceiveCategories = categories => dispatch(receiveCategories(categories));
        return fetchHandler(getEndpoint('categories'), {}, onReceiveCategories);
    };
}
