import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetails } from '../../services/apiRequest';
import { Photo } from '../Photo/Photo';
import './Details.scss';
// import './Details.scss';

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
        <div className="outer-container">
            <h2 className="outer-container__title">Details</h2>
            {photoDetail && (
                <>
                    {' '}
                    <Photo photo={photoDetail} />
                    <div className="tags">
                        <div className="tags__container">
                            <h3 className="tags__title">Tags:</h3>
                            {photoDetail.tags_preview.map((item) => (
                                <span key={item.title}>{item.title} </span>
                            ))}
                        </div>
                        <i className="tags__icon" />
                    </div>
                    <div className="details">
                        <div className="details__container-author">
                            <i className="details__container-icon" />
                            <p>
                                Name: {photoDetail.user.name}{' '}
                                {photoDetail.user.last_name}
                            </p>
                            <p>Portfolio: {photoDetail.user.portfolio_url}</p>
                            <p>Twitter: {photoDetail.user.twitter_username}</p>
                            <p>Bio: {photoDetail.user.bio}</p>
                        </div>
                        <div className="details__container-camera">
                            <i className="details__container-icon" />
                            <p>Camara Brand: {photoDetail.exif.name}</p>
                            <p>
                                Exposure Time: {photoDetail.exif.exposure_time}
                            </p>
                            <p>Aperture: {photoDetail.exif.aperture}</p>
                            <p>Focal Length: {photoDetail.exif.focal_length}</p>
                            <p>ISO: {photoDetail.exif.iso}</p>
                        </div>
                        <div className="details__container-social">
                            <i className="details__container-icon" />
                            <p>Views: {photoDetail.views}</p>
                            <p>Downloads: {photoDetail.downloads}</p>
                            <p>Likes: {photoDetail.likes}</p>
                            <p>Created at: {photoDetail.created_at}</p>
                            <p>Location: {photoDetail.location.city}</p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
