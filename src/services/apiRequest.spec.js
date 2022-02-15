import axios from 'axios';
import * as service from './apiRequest';

jest.mock('axios');

describe('Given the function getHomePhotos', () => {
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
    });
});
