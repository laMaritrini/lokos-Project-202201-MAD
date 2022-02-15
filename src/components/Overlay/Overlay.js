import { AiOutlineHeart } from 'react-icons/ai';
import './Overlay.scss';

export default function Overlay({ photo }) {
    return (
        <div className="photo__overlay">
            <div className="photo__icon-overlay">
                <AiOutlineHeart className="photo__heart-icon" />
            </div>
            <div className="photo__user-container">
                <div className="photo__user-photo-container">
                    <img
                        src={photo.user.profile_image.small}
                        alt={photo.user.first_name}
                    />
                </div>
                <h2 className="photo__user-name photo__user-name--white">
                    {photo.user.username}
                </h2>
            </div>
        </div>
    );
}
