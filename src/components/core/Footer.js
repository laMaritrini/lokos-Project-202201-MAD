import {
    faFacebookF,
    faInstagram,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Footer() {
    return (
        <div>
            {/* <i className="fa-brands fa-facebook-f" />
            <i className="fa-brands fa-instagram" />
            <i className="fa-brands fa-twitter" /> */}
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faTwitter} />
            <address>
                <p className="footer-group">Created by team L&apos;OkOs</p>
                <p className="footer-group">ISDI Coders</p>
            </address>
        </div>
    );
}
