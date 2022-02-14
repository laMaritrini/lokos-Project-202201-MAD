import {
    faFacebookF,
    faInstagram,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.scss';

export function Footer() {
    return (
        <div className="footer">
            <div className="footer__icons">
                <FontAwesomeIcon
                    className="footer__icons footer__icons--icon"
                    icon={faFacebookF}
                />
                <FontAwesomeIcon
                    className="footer__icons footer__icons--icon"
                    icon={faInstagram}
                />
                <FontAwesomeIcon
                    className="footer__icons footer__icons--icon"
                    icon={faTwitter}
                />
            </div>
            <address className="footer__info">
                <p className="footer__group">Created by team L&apos;OkOs</p>
                <p className="footer__group">ISDI Coders</p>
            </address>
        </div>
    );
}
