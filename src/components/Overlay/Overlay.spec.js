import { render, screen } from '@testing-library/react';
import Overlay from './Overlay';

describe('Given the Overlay component', () => {
    describe('When passed a photo object', () => {
        test('It renders the overlay', () => {
            const mockData = {
                user: {
                    username: 'TestUserName',
                    profile_image: {
                        small: 'small-photo',
                    },
                    first_name: 'Test Name',
                },
            };
            render(<Overlay photo={mockData} />);
            expect(screen.getByText(/TestUserName/i)).toBeInTheDocument();
            expect(screen.getByAltText(/Test Name/i)).toBeInTheDocument();
        });
    });
});
