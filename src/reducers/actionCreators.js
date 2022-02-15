import { photosActionTypes } from './actionTypes';

export const loadPhotos = (photoList) => ({
    type: photosActionTypes.load,
    photoList,
});

export const addPhotos = (photo) => ({
    type: photosActionTypes.add,
    photo,
});
