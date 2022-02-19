import { render, screen } from '@testing-library/react';
import { SocialDetails } from './Social-details';

test('renders Social information', () => {
    render(<SocialDetails />);
    const linkElement = screen.getByText(/Downloads/i);
    expect(linkElement).toBeInTheDocument();
});
