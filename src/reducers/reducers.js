import { photosActionTypes } from './actionTypes';

export function photosReducer(state, action) {
    switch (action.type) {
        case photosActionTypes.load:
            return { ...state, photos: [...action.photoList] };
        case photosActionTypes.loadFavorites:
            return {
                ...state,
                favoritePhotos: [
                    // action.favoritePhotoList.filter(
                    //     (item) => item.user.email === action.user.email
                    // ),
                    ...action.favoritePhotoList,
                ],
            };
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
        case photosActionTypes.update:
            return {
                ...state,
                favoritePhotos: state.favoritePhotos.map((item) =>
                    item.id === action.photo.id ? action.photo : item
                ),
            };
        default:
            return state;
    }
}
