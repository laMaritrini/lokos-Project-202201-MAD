import { render, screen } from '@testing-library/react';
import { UserDetails } from './User-details';

test('renders DetailsUser information', () => {
    render(<UserDetails />);
    const linkElement = screen.getByText(/Portfolio/i);
    expect(linkElement).toBeInTheDocument();
});
