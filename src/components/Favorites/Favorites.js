import { useContext } from 'react';
import { Context } from '../../context/contextProvider';
import { Photo } from '../Photo/Photo';
import './Favorites.scss';

export function Favorites() {
    const { state } = useContext(Context);

    return (
        <div className="home">
            <h2 className="favorites__title">My Favorites</h2>
            {state.favoritePhotos.map((item) => (
                <Photo key={item.id} photo={item} />
            ))}
        </div>
    );
}
