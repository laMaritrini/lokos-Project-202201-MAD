import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import LoginButton from '../Auth/LoginButton/LoginButton';
import LogoutButton from '../Auth/LogoutButton/LogoutButton';
import './Menu.scss';

export function Menu({ menuOptions, toggleMenu }) {
    const handleClick = () => {
        toggleMenu();
    };
    const { isAuthenticated } = useAuth0();
    return (
        <nav className="menu">
            <ul className="menu__list">
                {menuOptions.map((item) => (
                    <li key={item.path} className="menu__list-item">
                        <Link
                            onClick={handleClick}
                            className="menu__link"
                            to={item.path}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
                {!isAuthenticated ? (
                    <li>
                        <LoginButton />
                    </li>
                ) : (
                    <li>
                        <LogoutButton />
                    </li>
                )}
            </ul>
        </nav>
    );
}
