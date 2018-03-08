import { RECEIVE_CATEGORIES } from '../actions/types';

function categories(state = [], action) {
    switch (action.type) {
        case RECEIVE_CATEGORIES:
            return action.categories;
        default:
            break;
    }
    return state;
}

export default categories;

