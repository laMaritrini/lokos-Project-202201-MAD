import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
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
    });
});
