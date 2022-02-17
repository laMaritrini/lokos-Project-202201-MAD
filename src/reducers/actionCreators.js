import { photosActionTypes } from './actionTypes';

export const loadPhotos = (photoList) => ({
    type: photosActionTypes.load,
    photoList,
});

export const loadFavoritePhotos = (favoritePhotoList) => ({
    type: photosActionTypes.loadFavorites,
    favoritePhotoList,
});

export const addPhotos = (photo) => ({
    type: photosActionTypes.add,
    photo,
});

export const removePhoto = (photo) => ({
    type: photosActionTypes.remove,
    photo,
});
export const updateComment = (photo) => ({
    type: photosActionTypes.update,
    photo,
});
