export function SocialDetails({ view, downloads, likes, created, location }) {
    return (
        <div className="details__container">
            <i className="details__container-icon" />
            <p>Views: {view}</p>
            <p>Downloads: {downloads}</p>
            <p>Likes: {likes}</p>
            <p>Created at: {created}</p>
            <p>Location: {location}</p>
        </div>
    );
}
