import axios from 'axios';
import * as service from './apiRequest';

jest.mock('axios');

describe('Given the function', () => {
    describe('When it will be executed', () => {
        beforeEach(() => {
            const resp = [{ id: 1 }, { id: 2 }];
            axios.get.mockResolvedValue(resp);
        });
        test('The function to be used', () => {
            const resp = [{ id: 1 }, { id: 2 }];
            return service.getHomePhotos().then((data) => {
                expect(data).toEqual(resp);
            });
        });

        test('The favorite function to be used', () => {
            const resp = [{ id: 1 }, { id: 2 }];
            return service.getFavoritePhotos().then((data) => {
                expect(data).toEqual(resp);
            });
        });
    });
});

describe('Given the set function', () => {
    describe('When it will be executed', () => {
        beforeEach(() => {
            const resp = [{ id: 1 }, { id: 2 }];
            axios.post.mockResolvedValue(resp);
        });

        test('The function to be used', () => {
            const resp = [{ id: 1 }, { id: 2 }];
            return service.set().then((data) => {
                expect(data).toEqual(resp);
            });
        });

        test('The function getDetails to be used', () => {
            const resp = [{ id: 1 }, { id: 2 }];
            return service.getDetails().then((id) => {
                expect(id).toEqual(id);
            });
        });
    });
});
describe('Given the setting function', () => {
    describe('When it will be executed', () => {
        beforeEach(() => {
            const resp = [{ id: 1 }, { id: 2 }];
            axios.post.mockResolvedValue(resp);
        });

        test('The function to be used', () => {
            const resp = [{ id: 1 }, { id: 2 }];
            return service.set().then((data) => {
                expect(data).toEqual(resp);
            });
        });
    });
});

describe('Given the deleting function', () => {
    describe('When it will be executed', () => {
        beforeEach(() => {
            const resp = [{ id: 1 }, { id: 2 }];
            axios.delete.mockResolvedValue(resp);
        });

        test('The function to be used', () => {
            const resp = [{ id: 1 }, { id: 2 }];
            return service.deleteFavoritePhoto().then((data) => {
                expect(data).toEqual(resp);
            });
        });
    });
});

describe('Given the uploading function', () => {
    describe('When it will be executed', () => {
        beforeEach(() => {
            const resp = [{ id: 1 }, { id: 2 }];
            axios.patch.mockResolvedValue(resp);
        });

        test('The function to be used', () => {
            const resp = [{ id: 1 }, { id: 2 }];
            return service.uploadCommentFavorite().then((data) => {
                expect(data).toEqual(resp);
            });
        });
    });
});
