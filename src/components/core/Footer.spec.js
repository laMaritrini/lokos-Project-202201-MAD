import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

test('renders footer information', () => {
    render(<Footer />);
    const linkElement = screen.getByText(/Created by team/i);
    expect(linkElement).toBeInTheDocument();
});
