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
