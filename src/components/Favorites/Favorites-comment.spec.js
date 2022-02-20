import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { FavoritesComment } from './Favorites-comment';
import { Context } from '../../context/contextProvider';

const commentAddFavorite = jest.fn();
const wrapper = {
    commentAddFavorite,
};

describe('Given Favorite-comment component', () => {
    describe('When called', () => {
        test('It should render', () => {
            render(
                <Context.Provider value={wrapper}>
                    <FavoritesComment />
                </Context.Provider>
            );
            const submitBtn = screen.getByText(/Send/);
            expect(submitBtn).toBeInTheDocument();
        });
        test('When submitting the form it should call commentAddFavorite', () => {
            render(
                <Context.Provider value={wrapper}>
                    <FavoritesComment />
                </Context.Provider>
            );
            const submitBtn = screen.getByText(/Send/);
            const textBox = screen.getByPlaceholderText(/Add comment/);
            userEvent.click(textBox);
            userEvent.keyboard('Hello');
            userEvent.click(submitBtn);
            expect(commentAddFavorite).toHaveBeenCalled();
        });
    });
});
