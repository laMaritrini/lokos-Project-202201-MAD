export const checkFavoriteState = (state, photo) =>
    state.favoritePhotos.find((item) => item.id === photo.id);
