import * as actions from './actionCreators';

describe('Given the actionCreators', () => {
    describe('When calling loadPhotos', () => {
        test('It gives us an action object', () => {
            expect(actions.loadPhotos([{ id: 1 }])).toBeDefined();
        });
    });
    describe('When calling loadFavoritePhotos', () => {
        test('It gives us an action object', () => {
            expect(actions.loadFavoritePhotos([{ id: 1 }])).toBeDefined();
        });
    });
    describe('When calling addPhotos', () => {
        test('It gives us an action object', () => {
            expect(actions.addPhotos({ id: 1 })).toBeDefined();
        });
    });
    describe('When calling removePhoto', () => {
        test('It gives us an action object', () => {
            expect(actions.removePhoto({ id: 1 })).toBeDefined();
        });
    });
    describe('When calling updateComment', () => {
        test('It gives us an action object', () => {
            expect(actions.updateComment({ id: 1 })).toBeDefined();
        });
    });
});
