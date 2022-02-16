import { Link } from 'react-router-dom';
import './Menu.scss';

export function Menu({ menuOptions, toggleMenu }) {
    const handleClick = () => {
        toggleMenu();
    };
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
            </ul>
        </nav>
    );
}
