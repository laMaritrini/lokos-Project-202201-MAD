import { useState } from 'react';
import { Header } from './components/core/Header';
import { Menu } from './components/core/Menu';
import { Footer } from './components/core/Footer';
import { Route, Routes } from 'react-router';

export function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <div className="app">
            <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />
            {menuOpen && <Menu />}
            <main>
            <Routes>
            <Route path="/" element={}></Route>
            <Route path="/favorites" element={}></Route>
            <Route path="/detail/:id" element={}></Route>
            <Route path="/about-us" element={}></Route>
            </Routes>
            </main>
            <Footer />
        </div>
    );
}
