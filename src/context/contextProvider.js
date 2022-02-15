import { createContext, useReducer, useEffect } from 'react';
import { photosReducer } from '../reducers/reducers';
import * as service from '../services/apiRequest';
import * as actions from '../reducers/actionCreators';

export const Context = createContext({
    photos: [],
});

export function ContextProvider({ children }) {
    const [photos, dispatch] = useReducer(photosReducer, []);

    useEffect(() => {
        service
            .getHomePhotos()
            .then((resp) => dispatch(actions.loadPhotos(resp.data)));
    }, []);

    const contextValue = {
        photos,
    };

    return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}
