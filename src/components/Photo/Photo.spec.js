import { prettyDOM, render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { Context } from '../../context/contextProvider';
import { Photo } from './Photo';

const mockPhoto = {
    urls: {
        small: 'Fake photo',
    },
    alt_description: 'Alt_description',
    user: {
        profile_image: {
            small: 'Small',
        },
        first_name: 'Heber',
        username: 'hebeready',
    },
};

describe('Given photo component', () => {
    describe('When passed a photo obj', () => {
        test('It should render', () => {
            render(
                <BrowserRouter>
                    <Photo photo={mockPhoto} />
                </BrowserRouter>
            );
            expect(screen.getByAltText(/Alt_description/)).toBeInTheDocument();
            expect(screen.getAllByText(/hebeready/)).toHaveLength(2);
        });

        // test('It should renders', () => {
        //     const contextValue = {
        //         state: {
        //             photo: [],
        //             favoritePhotos: [],
        //         },
        //         addPhoto: jest.fn(),
        //         deletePhoto: jest.fn(),
        //     };
        //     const { container } = render(
        //         <Context.Provider value={contextValue}>
        //             <MemoryRouter initialEntries={['/']}>
        //                 <Routes location={{ pathname: '/' }}>
        //                     <Route
        //                         path="/"
        //                         element={<Photo photo={mockPhoto} />}
        //                     />
        //                 </Routes>
        //             </MemoryRouter>
        //         </Context.Provider>
        //     );
        //     expect(screen.getByRole(/button/)).toBeInTheDocument();
        //     userEvent.click(screen.getByRole(/button/));
        //     expect(contextValue.addPhoto).toHaveBeenCalled();

        //     console.log(prettyDOM(container));

        //     userEvent.click(screen.getAllByRole(/button/)[1]);
        //     expect(contextValue.deletePhoto).toHaveBeenCalled();
        // });
    });
});
