import { render, screen } from '@testing-library/react';
import { Menu } from './Menu';

test('renders Menu list', () => {
    render(<Menu />);
    const linkElement = screen.getByText(/Home/i);
    expect(linkElement).toBeInTheDocument();
});
