import { useAuth0 } from '@auth0/auth0-react';
import { useReducer, useEffect } from 'react';
import { photosReducer } from '../reducers/reducers';
import * as service from '../services/apiRequest';
import * as actions from '../reducers/actionCreators';

export function usePhotos() {
    const { user, isAuthenticated } = useAuth0();
    const [state, dispatch] = useReducer(photosReducer, {
        photos: [],
        favoritePhotos: [],
    });

    useEffect(() => {
        service
            .getHomePhotos()
            .then((resp) => dispatch(actions.loadPhotos(resp.data)));
        if (isAuthenticated) {
            service.getFavoritePhotos(user.email).then((resp) => {
                dispatch(actions.loadFavoritePhotos(resp.data));
            });
        }
    }, [user, isAuthenticated]);

    const addPhoto = (newPhoto) => {
        const newPhotoCopy = { ...newPhoto };
        const myId = newPhotoCopy.id;
        delete newPhotoCopy.id;
        service
            .set({ ...newPhotoCopy, myUser: user.email, myId })
            .then((resp) => {
                dispatch(actions.addPhotos(resp.data));
            });
    };
    const deletePhoto = (photo) => {
        service.deleteFavoritePhoto(photo.id).then((resp) => {
            dispatch(actions.removePhoto(photo));
        });
    };
    const commentAddFavorite = (photo, comment) => {
        service.uploadCommentFavorite(photo.id, comment).then((resp) => {
            dispatch(actions.updateComment(resp.data));
        });
    };

    return {
        state,
        addPhoto,
        deletePhoto,
        commentAddFavorite,
    };
}
