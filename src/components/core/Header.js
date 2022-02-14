import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.scss';
import {
    faBars,
    faXmark,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

export default function Header({ menuOpen, toggleMenu }) {
    const handleClick = () => {
        toggleMenu();
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            toggleMenu();
        }
    };
    return (
        <div>
            <header className="header">
                <div className="header__logo">
                    <img src="./assets/logo.svg" alt="" />
                </div>
                <div className="header__input-container">
                    <input
                        className="header__input"
                        type="search"
                        placeholder="find your inspiration..."
                    />

                    <FontAwesomeIcon
                        className="header__magnifying-glass"
                        icon={faMagnifyingGlass}
                    />
                </div>
                <div
                    className="header__menu"
                    onClick={handleClick}
                    onKeyPress={handleKeyPress}
                    role="button"
                    tabIndex={0}
                >
                    {!menuOpen ? (
                        <FontAwesomeIcon
                            className="header__menu-burger header__menu-burger--closed"
                            icon={faBars}
                        />
                    ) : (
                        <FontAwesomeIcon
                            className="header__menu-burger header__menu-burger--open"
                            icon={faXmark}
                        />
                    )}
                </div>
            </header>
        </div>
    );
}
