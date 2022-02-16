import { useContext } from 'react';
import { Context } from '../../context/contextProvider';
import { Photo } from '../Photo/Photo';

export function Favorites() {
    const { state } = useContext(Context);

    return (
        <div className="home">
            {state.favoritePhotos.map((item) => (
                <Photo key={item.id} photo={item} />
            ))}
        </div>
    );
}
