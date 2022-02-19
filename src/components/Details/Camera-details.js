export function CameraDetails({ camera, exposure, aperture, focal, iso }) {
    return (
        <div className="details__container">
            <i className="details__container-icon" />
            <p>Camera Brand: {camera}</p>
            <p>Exposure Time: {exposure}</p>
            <p>Aperture: {aperture}</p>
            <p>Focal Length: {focal}</p>
            <p>ISO: {iso}</p>
        </div>
    );
}
