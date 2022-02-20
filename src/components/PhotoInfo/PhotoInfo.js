import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

export default function PhotoInfo({
    handleDeleteClick,
    handleClick,
    isFavorite,
    photo,
}) {
    return (
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
                    data-testid="delete-btn"
                />
            ) : (
                <AiOutlineHeart
                    onClick={handleClick}
                    role="button"
                    className="photo__heart-icon"
                    data-testid="add-btn"
                />
            )}
        </div>
    );
}
