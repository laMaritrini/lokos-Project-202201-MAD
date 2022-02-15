const homeUrl =
    'https://api.unsplash.com/photos/?client_id=oo0I3DWICf63uyMkzE5gcA_pGOBCPC-dTUzkOcWXDJI&per_page=20';

export async function getHomePhotos() {
    const response = await fetch(homeUrl);
    const data = await response.json();
    return data;
}
