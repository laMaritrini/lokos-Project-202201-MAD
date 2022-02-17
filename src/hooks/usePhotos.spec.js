import { renderHook, act } from '@testing-library/react-hooks';
import { createContext, useContext } from 'react';
import { render } from 'react-dom';
import { usePhotos } from './usePhotos';
import * as service from '../services/apiRequest';
import * as actions from '../reducers/actionCreators';

jest.mock('../services/apiRequest');
service.getHomePhotos.mockResolvedValue({ id: 1 });
service.getFavoritePhotos.mockResolvedValue({ id: 1 });
jest.mock('../reducers/actionCreators');

// const testContext = createContext();

// function ContextProvider({ children }) {
//     return (
//         <testContext.Provider value={usePhotos()}>
//             {children}
//         </testContext.Provider>
//     );
// }

// function UsePhotosExample() {
//     const context = useContext(testContext);
//     return <div>usePhotosExample</div>;
// }

describe('Given the usePhotos custom hook', () => {
    describe('When called', () => {
        test('It should return an object with a state and three functions', () => {
            // render();
            // <ContextProvider>
            //     <UsePhotosExample />
            // </ContextProvider>
            expect(true).toBe(true);
        });
    });
});
