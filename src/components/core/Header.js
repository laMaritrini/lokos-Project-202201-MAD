import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.scss';
import {
    faBars,
    faXmark,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

export default function Header() {
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
                <div className="header__menu">
                    <FontAwesomeIcon
                        className="header__menu-burger header__menu-burger--open"
                        icon={faBars}
                    />

                    <FontAwesomeIcon
                        className="header__menu-burger header__menu-burger--closed"
                        icon={faXmark}
                    />
                </div>
            </header>
        </div>
    );
}
