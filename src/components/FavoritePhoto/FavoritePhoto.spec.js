import { prettyDOM, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { Context } from '../../context/contextProvider';
import { FavoritePhoto } from './FavoritePhoto';
import { checkFavoriteState } from './checkFavoriteState';

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

jest.mock('./checkFavoriteState');

describe('Given photo component', () => {
    describe('When passed a photo obj', () => {
        test('It should render', () => {
            render(
                <BrowserRouter>
                    <FavoritePhoto photo={mockPhoto} />
                </BrowserRouter>
            );
            expect(screen.getByAltText(/Alt_description/)).toBeInTheDocument();
            expect(screen.getAllByText(/hebeready/)).toHaveLength(2);
        });

        test('It should call addPhoto', () => {
            checkFavoriteState.mockReturnValue(false);
            const contextValue = {
                state: {
                    photo: [],
                    favoritePhotos: [],
                },
                addPhoto: jest.fn(),
                deletePhoto: jest.fn(),
            };
            const { container } = render(
                <Context.Provider value={contextValue}>
                    <BrowserRouter>
                        <FavoritePhoto photo={mockPhoto} />
                    </BrowserRouter>
                </Context.Provider>
            );
            expect(screen.getByRole(/button/)).toBeInTheDocument();
            userEvent.click(screen.getByRole(/button/));
            expect(contextValue.addPhoto).toHaveBeenCalled();
        });
        test('It should call deletePhoto', () => {
            checkFavoriteState.mockReturnValue(true);
            const contextValue = {
                state: {
                    photo: [],
                    favoritePhotos: [],
                },
                addPhoto: jest.fn(),
                deletePhoto: jest.fn(),
            };
            const { container } = render(
                <Context.Provider value={contextValue}>
                    <BrowserRouter>
                        <FavoritePhoto photo={mockPhoto} />
                    </BrowserRouter>
                </Context.Provider>
            );

            userEvent.click(screen.getByTestId('delete-btn'));
            expect(contextValue.deletePhoto).toHaveBeenCalled();
        });
    });
});
