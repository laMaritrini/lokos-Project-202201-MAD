import { Link } from 'react-router-dom';
import './Photo.scss';
import { useContext } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import Overlay from '../Overlay/Overlay';
import { Context } from '../../context/contextProvider';

export function Photo({ photo }) {
    const { addPhoto } = useContext(Context);
    const handleClick = () => {
        addPhoto(photo);
    };
    return (
        <div className="photo">
            <div className="photo__container">
                <Overlay photo={photo} />
                <Link to={`/detail/id=${photo.id}`}>
                    <img
                        className="photo__img"
                        src={photo.urls.small}
                        alt={photo.alt_description}
                    />
                </Link>
            </div>
            <div className="photo__info-container">
                <div className="photo__user-container">
                    <div className="photo__user-photo-container">
                        <img
                            src={photo.user.profile_image.small}
                            alt={photo.user.first_name}
                        />
                    </div>
                    <h2 className="photo__user-name">{photo.user.username}</h2>
                </div>
                <AiOutlineHeart
                    onClick={handleClick}
                    className="photo__heart-icon"
                />
            </div>
        </div>
    );
}
