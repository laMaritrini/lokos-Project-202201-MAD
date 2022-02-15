import { useContext } from 'react';
import { Context } from '../../context/contextProvider';
import { Photo } from '../Photo/Photo';

export function Favorites() {
    const { favoritePhotos } = useContext(Context);

    return (
        <div className="home">
            {favoritePhotos.map((item) => (
                <Photo key={item.id} photo={item} />
            ))}
        </div>
    );
}
