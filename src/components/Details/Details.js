import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetails } from '../../services/apiRequest';
import { Photo } from '../Photo/Photo';
import './Details.scss';
import { CameraDetails } from './Camera-details';
import { SocialDetails } from './Social-details';
import { UserDetails } from './User-details';

export function Details() {
    const [photoDetail, setPhotoDetail] = useState();
    const { id } = useParams();

    useEffect(() => {
        getDetails(id.replace('id=', '')).then((data) => {
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
                    <div className="details" />
                    <UserDetails
                        userName={photoDetail.user.name}
                        userLastName={photoDetail.user.last_name}
                        userPortfolio={photoDetail.user.portfolio_url}
                        userTwitter={photoDetail.user.twitter_username}
                        userBio={photoDetail.user.bio}
                    />
                    <CameraDetails
                        camera={photoDetail.exif.name}
                        exposure={photoDetail.exif.exposure_time}
                        aperture={photoDetail.exif.aperture}
                        focal={photoDetail.exif.focal_length}
                        iso={photoDetail.exif.iso}
                    />
                    <SocialDetails
                        view={photoDetail.views}
                        downloads={photoDetail.downloads}
                        likes={photoDetail.likes}
                        created={photoDetail.created_at}
                        location={photoDetail.location.city}
                    />
                </>
            )}
        </div>
    );
}
