import { createContext } from 'react';
import { usePhotos } from '../hooks/usePhotos';

export const Context = createContext({
    state: {
        photos: [],
        favoritePhotos: [],
    },
    addPhoto: () => {},
    deletePhoto: () => {},
});

export function ContextProvider({ children }) {
    return <Context.Provider value={usePhotos()}>{children}</Context.Provider>;
}
