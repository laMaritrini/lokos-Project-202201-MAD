import { useContext } from 'react';
import { Context } from '../../context/contextProvider';
import { Photo } from '../Photo';
import './Home.scss';

export function Home() {
    const { photos } = useContext(Context);
    console.log(photos);

    return (
        <div className="home">
            {photos.map((item) => (
                <Photo key={item.id} photo={item} />
            ))}
        </div>
    );
}
