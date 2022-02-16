import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Context } from '../../context/contextProvider';
import { Favorites } from './Favorites';

const state = {
    state: {
        photos: [
            {
                id: 1,
                urls: {
                    small: 'Fake photo',
                },
                user: {
                    profile_image: {
                        small: 'Small',
                    },
                    first_name: 'Heber',
                    username: 'hebeready',
                },
            },
        ],
        favoritePhotos: [
            {
                id: 1,
                urls: {
                    small: 'Fake photo',
                },
                user: {
                    profile_image: {
                        small: 'Small',
                    },
                    first_name: 'Heber',
                    username: 'hebeready',
                },
            },
        ],
    },
};

describe('first', () => {
    test('should first', () => {
        render(
            <BrowserRouter>
                <Context.Provider value={state}>
                    <Favorites />
                </Context.Provider>
            </BrowserRouter>
        );
        expect(screen.getAllByText(/hebeready/)).toHaveLength(2);
    });
});
