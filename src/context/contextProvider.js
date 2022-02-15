import { createContext, useReducer, useEffect } from 'react';
import { photosReducer } from '../reducers/reducers';
import * as service from '../services/apiRequest';
import * as actions from '../reducers/actionCreators';

export const Context = createContext({
    photos: [],
    favoritePhotos: [],
    addPhoto: () => {},
});

export function ContextProvider({ children }) {
    const [photos, dispatch] = useReducer(photosReducer, []);
    const [favoritePhotos, favoriteDispatch] = useReducer(photosReducer, []);

    useEffect(() => {
        service
            .getHomePhotos()
            .then((resp) => dispatch(actions.loadPhotos(resp.data)));
        service
            .getFavoritePhotos()
            .then((resp) => favoriteDispatch(actions.loadPhotos(resp.data)));
    }, []);

    const addPhoto = (newPhoto) => {
        service.set(newPhoto).then((resp) => {
            favoriteDispatch(actions.addPhotos(resp.data));
        });
    };

    const contextValue = {
        photos,
        addPhoto,
        favoritePhotos,
    };

    return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}
