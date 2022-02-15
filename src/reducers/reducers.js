import { photosActionTypes } from './actionTypes';

export function photosReducer(state, action) {
    switch (action.type) {
        case photosActionTypes.load:
            return [...action.photoList];
        case photosActionTypes.add:
            return [...state, action.photo];
        default:
            return state;
    }
}
