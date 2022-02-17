import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import { Details } from './Details';
import { getDetails } from '../../services/apiRequest';

const detailObj = {
    id: '1',
    urls: {
        small: 'Fake photo',
    },
    user: {
        name: 'heber',
        last_name: 'bar',
        portfolio_url: 'test url',
        twitter_username: 'twitter',
        bio: 'bio',

        profile_image: {
            small: 'Small',
        },
        first_name: 'Heber',
        username: 'hebeready',
    },
    exif: {
        name: 'max',
        exposure_time: '100',
        aperture: 'open',
        focal_length: '23',
        iso: '100',
    },
    views: '123',
    downloads: '1234',
    likes: '12',
    created_at: 'london',
    location: {
        city: 'madrid',
    },
};

jest.mock('../../services/apiRequest');
getDetails.mockResolvedValue(detailObj);

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
    useParams: () => ({
        id: 'id=1',
    }),
    useRouteMatch: () => ({ url: '/detail/id=1' }),
}));

describe('first', () => {
    test('should first', () => {
        // const history = createMemoryHistory();
        // history.push('/detail/id=1');
        render(<Details />);
        expect(screen.getByText(/hebeready/)).toBeDefined();
    });
});
