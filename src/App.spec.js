import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { Header } from './components/core/Header';
import { Footer } from './components/core/Footer';
import { Home } from './components/Home/Home';
import { Favorites } from './components/Favorites/Favorites';
import { Details } from './components/Details/Details';
import { AboutUs } from './components/AboutUs/AboutUs';
import { App } from './App';

jest.mock('./components/home/Home');
jest.mock('./components/core/Header');
jest.mock('./components/core/Footer');
jest.mock('./components/Favorites/Favorites');
jest.mock('./components/Details/Details');
jest.mock('./components/AboutUs/AboutUs');

describe('Tests for App Router', () => {
    test('Should render page header and Home on default route', () => {
        Header.mockImplementation(() => <div>PageHeaderMock</div>);
        Home.mockImplementation(() => <div>HomePageMock</div>);
        Footer.mockImplementation(() => <div>FooterPageMock</div>);
        Details.mockImplementation(() => <div>DetailsPageMock</div>);
        Favorites.mockImplementation(() => <div>FavoritesPageMock</div>);
        AboutUs.mockImplementation(() => <div>AboutUsPageMock</div>);

        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );

        expect(screen.getByText('PageHeaderMock')).toBeInTheDocument();
        expect(screen.getByText('HomePageMock')).toBeInTheDocument();
        expect(screen.getByText('FooterPageMock')).toBeInTheDocument();
    });
});
