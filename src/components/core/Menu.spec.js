import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Menu } from './Menu';

test('renders Menu list', () => {
    const menuOptions = [
        { path: '/', label: 'Home' },
        { path: '/favorites', label: 'Favorites' },
        { path: '/about-us', label: 'About Us' },
    ];
    render(
        <BrowserRouter>
            <Menu menuOptions={menuOptions} />
        </BrowserRouter>
    );
    const linkElement = screen.getByText(/Home/i);
    expect(linkElement).toBeInTheDocument();
});
