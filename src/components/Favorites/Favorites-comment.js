import { useContext, useState } from 'react';
import { Context } from '../../context/contextProvider';

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
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add comment"
                onChange={handleChange}
                value={newComment}
            />
            <button type="submit">Send</button>
        </form>
    );
}
