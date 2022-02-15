import { photosActionTypes } from './actionTypes';

export function photosReducer(state, action) {
    switch (action.type) {
        case photosActionTypes.load:
            return [...action.photoList];
        default:
            return state;
    }
}
