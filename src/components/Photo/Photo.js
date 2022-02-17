import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import './Photo.scss';
import { useContext, useEffect, useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import Overlay from '../Overlay/Overlay';
import { Context } from '../../context/contextProvider';

export function Photo({ photo }) {
    const { user } = useAuth0();
    const { state, addPhoto, deletePhoto } = useContext(Context);
    const [isFavorite, setIsFavorite] = useState(false);

    const checkFavoriteState = () => {
        let checkFavorite;
        if (
            window.location.pathname === '/' ||
            window.location.pathname.includes('/detail')
        ) {
            checkFavorite = state.favoritePhotos.find(
                (item) => item.myId === photo.id
            );
        } else if (window.location.pathname === '/favorites') {
            checkFavorite = state.favoritePhotos.find(
                (item) => item.myId === photo.myId
            );
        }
        setIsFavorite(checkFavorite);
    };
    const handleClick = () => {
        addPhoto(photo);
        checkFavoriteState();
    };
    const handleDeleteClick = () => {
        let payload;
        if (
            window.location.pathname === '/' ||
            window.location.pathname.includes('/detail')
        ) {
            payload = state.favoritePhotos.find(
                (item) => item.myId === photo.id
            );
        } else if (window.location.pathname === '/favorites') {
            payload = photo;
        }
        deletePhoto(payload);
        checkFavoriteState();
    };
    useEffect(() => {
        checkFavoriteState();
    });
    return (
        <div className="photo">
            <div className="photo__container">
                <Overlay photo={photo} />
                <Link
                    to={`/detail/id=${
                        window.location.pathname === '/favorites'
                            ? photo.myId
                            : photo.id
                    }`}
                >
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
                {isFavorite ? (
                    <AiFillHeart
                        onClick={handleDeleteClick}
                        className="photo__heart-icon"
                    />
                ) : (
                    <AiOutlineHeart
                        onClick={handleClick}
                        className="photo__heart-icon"
                    />
                )}
            </div>
        </div>
    );
}
