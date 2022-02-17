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

describe('photosReducer', () => {
    it('Should return initial state', () => {
        expect(
            photosReducer(stateGiven, actions.loadPhotos(photoList))
        ).toEqual(resultState);
    });
});
