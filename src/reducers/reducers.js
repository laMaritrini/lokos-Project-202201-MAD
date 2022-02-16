import { photosActionTypes } from './actionTypes';

export function photosReducer(state, action) {
    switch (action.type) {
        case photosActionTypes.load:
            return { ...state, photos: [...action.photoList] };
        case photosActionTypes.loadFavorites:
            return { ...state, favoritePhotos: [...action.favoritePhotoList] };
        case photosActionTypes.add:
            return {
                ...state,
                favoritePhotos: [...state.favoritePhotos, action.photo],
            };
        case photosActionTypes.remove:
            return {
                ...state,
                favoritePhotos: state.favoritePhotos.filter(
                    (item) => item.id !== action.photo.id
                ),
            };
        default:
            return state;
    }
}
