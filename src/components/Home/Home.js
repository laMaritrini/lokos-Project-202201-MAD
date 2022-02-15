import { useContext } from 'react';
import { Context } from '../../context/contextProvider';

export function Home() {
    const { photos } = useContext(Context);
    console.log(photos);

    return <div>Home</div>;
}
