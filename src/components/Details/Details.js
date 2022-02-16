import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetails } from '../../services/apiRequest';
import { Photo } from '../Photo/Photo';

export function Details() {
    const [photoDetail, setPhotoDetail] = useState();
    const { id } = useParams();

    useEffect(() => {
        getDetails(id.replace('id=', '')).then((data) => {
            console.log(data);
            setPhotoDetail(data.data);
        });
    }, [id]);

    return (
        <div>
            <h3>DETAILS</h3>
            {photoDetail && <Photo photo={photoDetail} />}
            <div className="tags">
                <h2 className="tags__title">Tags:</h2>
                <i className="tags__icon" />
            </div>
            <div className="details">
                <div className="details__container-author">
                    <i className="details__container-icon" />
                    <p>Name:</p>
                    <p>Portfolio:</p>
                    <p>Twitter:</p>
                    <p>Bio:</p>
                </div>
                <div className="details__container-camera">
                    <i className="details__container-icon" />
                    <p>Camara Brand:</p>
                    <p>Exposure Time:</p>
                    <p>Aperture:</p>
                    <p>Focal Length:</p>
                    <p>ISO:</p>
                </div>
                <div className="details__container-social">
                    <i className="details__container-icon" />
                    <p>Views:</p>
                    <p>Downloads:</p>
                    <p>Likes:</p>
                    <p>Created at:</p>
                    <p>Location:</p>
                </div>
            </div>
        </div>
    );
}
