import { useContext, useState } from 'react';
import { Context } from '../../context/contextProvider';
import './Favorites.scss';

export function FavoritesComment({ photo }) {
    const [newComment, setNewComment] = useState('');
    const { commentAddFavorite } = useContext(Context);
    const handleSubmit = (ev) => {
        ev.preventDefault();
        commentAddFavorite(photo, newComment);
        setNewComment('');
    };
    const handleChange = (ev) => {
        setNewComment(ev.target.value);
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                className="form__input"
                type="text"
                placeholder="Add comment"
                onChange={handleChange}
                value={newComment}
            />
            <button className="form__button" type="submit">
                Send
            </button>
        </form>
    );
}
