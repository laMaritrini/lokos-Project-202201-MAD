export const checkFavoriteState = (state, photo) =>
    state.favoritePhotos.find((item) => item.myId === photo.id);
