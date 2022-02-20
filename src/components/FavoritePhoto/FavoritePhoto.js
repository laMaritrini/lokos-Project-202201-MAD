import { Link } from 'react-router-dom';
import './FavoritePhoto.scss';
import { useContext, useEffect, useState } from 'react';
import Overlay from '../Overlay/Overlay';
import { Context } from '../../context/contextProvider';
import { checkFavoriteState } from './checkFavoriteState';
import PhotoInfo from '../PhotoInfo/PhotoInfo';

export function FavoritePhoto({ photo }) {
    const { state, addPhoto, deletePhoto } = useContext(Context);
    const [isFavorite, setIsFavorite] = useState(false);

    const updateFavoriteState = () => {
        setIsFavorite(checkFavoriteState(state, photo));
    };
    const handleClick = () => {
        addPhoto(photo);
        updateFavoriteState();
    };
    const handleDeleteClick = () => {
        deletePhoto(photo);
        updateFavoriteState();
    };
    useEffect(() => {
        updateFavoriteState();
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
            <PhotoInfo
                handleDeleteClick={handleDeleteClick}
                handleClick={handleClick}
                isFavorite={isFavorite}
                photo={photo}
            />
        </div>
    );
}
