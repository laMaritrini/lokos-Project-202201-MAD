import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from './Header';

test('renders header list', () => {
    render(<Header />);
    const linkElement = screen.getByAltText(/Oko logo/i);
    expect(linkElement).toBeInTheDocument();
});

test('Clicking burger button swaps the icon for the X icon', () => {
    const toggleMenu = jest.fn();
    render(<Header toggleMenu={toggleMenu} />);
    const buttonDiv = screen.getByRole('button');
    userEvent.click(buttonDiv);
    expect(toggleMenu).toHaveBeenCalled();
});
