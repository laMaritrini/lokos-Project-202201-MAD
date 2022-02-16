import { useContext } from 'react';
import { Context } from '../../context/contextProvider';
import { Photo } from '../Photo/Photo';
import './Home.scss';

export function Home() {
    const { state } = useContext(Context);

    console.log(state);

    return (
        <div className="home">
            {state.photos.map((item) => (
                <Photo key={item.id} photo={item} />
            ))}
        </div>
    );
}
