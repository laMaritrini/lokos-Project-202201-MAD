import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/core/Header';
import { Menu } from './components/core/Menu';
import { Footer } from './components/core/Footer';
import { Home } from './components/Home/Home';
import { Favorites } from './components/Favorites/Favorites';
import { Details } from './components/Details/Details';
import { AboutUs } from './components/AboutUs/AboutUs';

export function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const menuOptions = [
        { path: '/', label: 'Home' },
        { path: '/favorites', label: 'Favorites' },
        { path: '/about-us', label: 'About Us' },
    ];
    return (
        <div className="app">
            <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />
            {menuOpen && <Menu menuOptions={menuOptions} />}
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/detail/:id" element={<Details />} />
                    <Route path="/about-us" element={<AboutUs />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}
