import axios from 'axios';

const homeUrl =
    'https://api.unsplash.com/photos/?client_id=oo0I3DWICf63uyMkzE5gcA_pGOBCPC-dTUzkOcWXDJI&per_page=20';
const localUrl = 'http://localhost:4500/favorites/';

export async function getHomePhotos() {
    return axios.get(homeUrl);
}

export async function getFavoritePhotos() {
    return axios.get(localUrl);
}

export async function set(photo) {
    return axios.post(localUrl, photo);
}
export async function getDetails(id) {
    const detailsUrl = `https://api.unsplash.com/photos/${id}/?client_id=oo0I3DWICf63uyMkzE5gcA_pGOBCPC-dTUzkOcWXDJI`;

    return axios.get(detailsUrl);
}

export async function deleteFavoritePhoto(id) {
    return axios.delete(localUrl + id);
}
export async function uploadCommentFavorite(id, comment) {
    return axios.patch(localUrl + id, { comment });
}
