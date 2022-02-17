import { photosReducer } from './reducers';
import * as actions from './actionCreators';

const stateGiven = {
    photos: [],
    favoritePhotos: [],
};
const photoList = [
    {
        id: 1,
    },
];
const resultState = {
    photos: [
        {
            id: 1,
        },
    ],
    favoritePhotos: [],
};
const resultLoadState = {
    photos: [],
    favoritePhotos: [
        {
            id: 1,
        },
    ],
};

describe('Given load', () => {
    it('Should return initial state', () => {
        expect(
            photosReducer(stateGiven, actions.loadPhotos(photoList))
        ).toEqual(resultState);
    });
});
describe('Given loadFavorites', () => {
    it('Should return initial state', () => {
        expect(
            photosReducer(stateGiven, actions.loadFavoritePhotos(photoList))
        ).toEqual(resultLoadState);
    });
});
describe('Given add', () => {
    it('Should return initial state', () => {
        const addPhoto = {
            id: 1,
        };
        expect(photosReducer(stateGiven, actions.addPhotos(addPhoto))).toEqual(
            resultLoadState
        );
    });
});
describe('Given remove', () => {
    it('Should return initial state', () => {
        const initialState = {
            photos: [],
            favoritePhotos: [
                {
                    id: 1,
                },
            ],
        };
        expect(
            photosReducer(
                initialState,
                actions.removePhoto({
                    id: 1,
                })
            )
        ).toEqual(stateGiven);
    });
});

describe('Given update', () => {
    it('Should return initial state', () => {
        const initialState = {
            photos: [],
            favoritePhotos: [
                {
                    id: 1,
                },
            ],
        };
        expect(
            photosReducer(
                initialState,
                actions.updateComment({
                    id: 1,
                })
            )
        ).toEqual(resultLoadState);
    });
});

describe('Given default', () => {
    it('Should return initial state', () => {
        const initialState = {
            photos: [],
            favoritePhotos: [
                {
                    id: 1,
                },
            ],
        };
        expect(photosReducer(initialState, 'heber')).toEqual(initialState);
    });
});
