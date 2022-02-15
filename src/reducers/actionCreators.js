import { photosActionTypes } from './actionTypes';

export const loadPhotos = (photoList) => ({
    type: photosActionTypes.load,
    photoList,
});
