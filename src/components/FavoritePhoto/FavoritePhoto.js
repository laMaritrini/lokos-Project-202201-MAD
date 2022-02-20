import { Link } from 'react-router-dom';
import './FavoritePhoto.scss';
import { useContext, useEffect, useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import Overlay from '../Overlay/Overlay';
import { Context } from '../../context/contextProvider';

export function FavoritePhoto({ photo }) {
    const { state, addPhoto, deletePhoto } = useContext(Context);
    const [isFavorite, setIsFavorite] = useState(false);

    const checkFavoriteState = () => {
        const checkFavorite = state.favoritePhotos.find(
            (item) => item.myId === photo.myId
        );
        setIsFavorite(checkFavorite);
    };
    const handleClick = () => {
        addPhoto(photo);
        checkFavoriteState();
    };
    const handleDeleteClick = () => {
        deletePhoto(photo);
        checkFavoriteState();
    };
    useEffect(() => {
        checkFavoriteState();
    });
    return (
        <div className="photo">
            <div className="photo__container">
                <Overlay photo={photo} />
                <Link to={`/detail/id=${photo.myId}`}>
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
                        role="button"
                        className="photo__heart-icon"
                    />
                ) : (
                    <AiOutlineHeart
                        onClick={handleClick}
                        role="button"
                        className="photo__heart-icon"
                    />
                )}
            </div>
        </div>
    );
}
