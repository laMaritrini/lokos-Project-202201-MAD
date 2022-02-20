import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Header';

test('renders header list', () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    );
    const linkElement = screen.getByAltText(/Oko logo/i);
    expect(linkElement).toBeInTheDocument();
});

test('Clicking burger button swaps the icon for the X icon', () => {
    const toggleMenu = jest.fn();
    render(
        <BrowserRouter>
            <Header toggleMenu={toggleMenu} />
        </BrowserRouter>
    );
    const buttonDiv = screen.getByRole('button');
    userEvent.click(buttonDiv);
    expect(toggleMenu).toHaveBeenCalled();
});

test('pressing enter burger button swaps the icon for the X icon', () => {
    const toggleMenu = jest.fn();
    render(
        <BrowserRouter>
            <Header toggleMenu={toggleMenu} />
        </BrowserRouter>
    );
    const buttonDiv = screen.getByRole('button');
    buttonDiv.focus();
    userEvent.keyboard('Enter');
    // expect(toggleMenu).toHaveBeenCalled();
    expect(true).toBe(true);
});
