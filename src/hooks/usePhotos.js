import { useReducer, useEffect } from 'react';
import { photosReducer } from '../reducers/reducers';
import * as service from '../services/apiRequest';
import * as actions from '../reducers/actionCreators';

export function usePhotos() {
    const [state, dispatch] = useReducer(photosReducer, {
        photos: [],
        favoritePhotos: [],
    });

    useEffect(() => {
        service
            .getHomePhotos()
            .then((resp) => dispatch(actions.loadPhotos(resp.data)));
        service
            .getFavoritePhotos()
            .then((resp) => dispatch(actions.loadFavoritePhotos(resp.data)));
    }, []);

    const addPhoto = (newPhoto) => {
        service.set(newPhoto).then((resp) => {
            dispatch(actions.addPhotos(resp.data));
        });
    };
    const deletePhoto = (photo) => {
        service.deleteFavoritePhoto(photo.id).then((resp) => {
            dispatch(actions.removePhoto(photo));
        });
    };

    const contextValue = {
        state,
        addPhoto,
        deletePhoto,
    };

    return contextValue;
}
