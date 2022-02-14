import { useState } from 'react';
import './App.css';
import { Header } from './components/core/Header';
import { Menu } from './components/core/Menu';

import { Footer } from './components/core/Footer';

export function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <div className="app">
            <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />
            {menuOpen && <Menu />}

            <Footer />
        </div>
    );
}
