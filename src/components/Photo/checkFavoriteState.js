export const checkFavoriteState = (state, photo) => {
    const checkFavorite = state.favoritePhotos.find(
        (item) => item.myId === photo.id
    );

    return checkFavorite;
};
