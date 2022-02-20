export const checkFavoriteState = (state, photo) => {
    const checkFavorite = state.favoritePhotos.find(
        (item) => item.id === photo.id
    );

    return checkFavorite;
};
