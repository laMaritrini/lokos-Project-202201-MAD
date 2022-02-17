import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { createContext } from 'react';
import { FavoritesComment } from './Favorites-comment';

const Context = createContext();

function ContextProvider({ children }) {
    return (
        <Context.Provider value={{ commentAddFavorite: jest.fn() }}>
            {children}
        </Context.Provider>
    );
}

describe('Given photo component', () => {
    describe('When passed a photo obj', () => {
        test('It should render', () => {
            render(
                <ContextProvider>
                    <FavoritesComment />
                </ContextProvider>
            );
            const submitBtn = screen.getByText(/Send/);
            expect(submitBtn).toBeInTheDocument();
        });
    });
});
