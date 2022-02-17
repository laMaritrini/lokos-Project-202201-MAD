import { render, screen } from '@testing-library/react';
import { AboutUs } from './AboutUs';

test('renders AboutUs information', () => {
    render(<AboutUs />);
    const linkElement = screen.getByText(/Lorem ipsum dolor/i);
    expect(linkElement).toBeInTheDocument();
});
