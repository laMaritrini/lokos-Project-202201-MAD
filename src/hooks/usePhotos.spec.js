/* eslint-disable testing-library/no-unnecessary-act */
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { useAuth0 } from '@auth0/auth0-react';
import { act } from 'react-dom/test-utils';
import { usePhotos } from './usePhotos';
import * as service from '../services/apiRequest';

jest.mock('../services/apiRequest');
jest.mock('@auth0/auth0-react');

const user = {
    email: 'johndoe@me.com',
    email_verified: true,
    sub: 'google-oauth2|2147627834623744883746',
};

describe('Given the usePhotos custom hook', () => {
    describe('When called', () => {
        beforeEach(() => {
            useAuth0.mockReturnValue({
                isAuthenticated: true,
                user,
                logout: jest.fn(),
                loginWithRedirect: jest.fn(),
            });
            service.getHomePhotos.mockResolvedValue({
                data: [{ id: 23 }],
            });
            service.getFavoritePhotos.mockResolvedValue({
                data: [],
            });
            service.set.mockResolvedValue({
                data: { id: 1 },
            });
            service.deleteFavoritePhoto.mockResolvedValue({
                data: { id: 1 },
            });
            service.uploadCommentFavorite.mockResolvedValue({
                data: { id: 1, comment: 'Hello' },
            });
        });
        test('It should return an object with a state and three functions', async () => {
            function TestComponent() {
                const { addPhoto, commentAddFavorite, deletePhoto, state } =
                    usePhotos();

                const mockPhoto = { id: 1 };
                const mockComment = '';
                const mockId = 23;

                return (
                    <div>
                        {JSON.stringify(state)}
                        <button
                            type="button"
                            data-testid="add"
                            onClick={() => addPhoto(mockPhoto)}
                        >
                            Add Photo
                        </button>
                        <button
                            type="button"
                            data-testid="remove"
                            onClick={() => deletePhoto(mockPhoto)}
                        >
                            Delete photo
                        </button>
                        <button
                            type="button"
                            data-testid="comment"
                            onClick={() => commentAddFavorite(mockComment)}
                        >
                            Comment photo
                        </button>
                    </div>
                );
            }

            await act(async () => render(<TestComponent />));
            expect(screen.getByText(/photos/)).toBeInTheDocument();
            expect(screen.getByText(/favoritephotos/i)).toBeInTheDocument();

            // testing add
            await act(async () => {
                userEvent.click(screen.getByTestId(/add/));
            });
            expect(
                screen.getByText(/"favoritePhotos":\[{"id":1}\]/)
            ).toBeInTheDocument();

            // testing remove
            await act(async () => {
                userEvent.click(screen.getByTestId(/remove/));
            });
            expect(
                screen.getByText(/"favoritePhotos":\[\]/)
            ).toBeInTheDocument();

            // testing add comment
            await act(async () => {
                userEvent.click(screen.getByTestId(/add/));
                userEvent.click(screen.getByTestId(/comment/));
            });
            expect(
                screen.getByText(/\[{"id":1,"comment":"Hello"}\]/)
            ).toBeInTheDocument();
        });
        test('It should return an object with a state and three functions', async () => {
            useAuth0.mockReturnValue({
                isAuthenticated: false,
                user,
                logout: jest.fn(),
                loginWithRedirect: jest.fn(),
            });
            service.getFavoritePhotos.mockResolvedValue({
                data: [{ id: 233 }],
            });
            function TestComponent() {
                const { addPhoto, commentAddFavorite, deletePhoto, state } =
                    usePhotos();

                const mockPhoto = { id: 1 };
                const mockComment = '';
                const mockId = 23;

                return (
                    <div>
                        {JSON.stringify(state)}
                        <button
                            type="button"
                            data-testid="add"
                            onClick={() => addPhoto(mockPhoto)}
                        >
                            Add Photo
                        </button>
                        <button
                            type="button"
                            data-testid="remove"
                            onClick={() => deletePhoto(mockPhoto)}
                        >
                            Delete photo
                        </button>
                        <button
                            type="button"
                            data-testid="comment"
                            onClick={() => commentAddFavorite(mockComment)}
                        >
                            Comment photo
                        </button>
                    </div>
                );
            }

            await act(async () => render(<TestComponent />));
            expect(screen.getByText(/photos/)).toBeInTheDocument();
            expect(
                screen.getByText(
                    /\{"photos":\[{"id":23}\],"favoritePhotos":\[\]}/
                )
            ).toBeInTheDocument();
        });
    });
});
