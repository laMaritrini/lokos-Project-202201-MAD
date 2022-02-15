import * as service from './apiRequest';

describe('Given the function getHomePhotos', () => {
    describe('When it will be executed', () => {
        beforeEach(() => {
            const mockResponse = [{ id: 1 }, { id: 2 }];
            jest.spyOn(global, 'fetch').mockResolvedValue({
                json: jest.fn().mockResolvedValue(mockResponse),
            });
        });
        test('The function to be used', () => {
            service.getHomePhotos();
            expect(global.fetch).toHaveBeenCalled();
        });
    });
});
