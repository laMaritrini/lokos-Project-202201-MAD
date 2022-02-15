import axios from 'axios';

const homeUrl =
    'https://api.unsplash.com/photos/?client_id=oo0I3DWICf63uyMkzE5gcA_pGOBCPC-dTUzkOcWXDJI&per_page=20';

export async function getHomePhotos() {
    return axios.get(homeUrl);
}
