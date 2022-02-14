import './Menu.scss';

export default function Menu() {
    return (
        <nav className="menu">
            <ul className="menu__list">
                <li className="menu__list-item">Home</li>
                <li className="menu__list-item">Favorites</li>
                <li className="menu__list-item">About Us</li>
            </ul>
        </nav>
    );
}
