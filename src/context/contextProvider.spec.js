import { render, screen } from '@testing-library/react';
import { createContext, useContext } from 'react';
import { usePhotos } from '../hooks/usePhotos';
import { ContextProvider } from './contextProvider';

jest.mock('../hooks/usePhotos');
usePhotos.mockReturnValue({
    state: 'a',
});

const testContext = createContext({
    state: 'a',
});

function TestComponent() {
    const { state } = useContext(testContext);
    return <div>{state}</div>;
}

describe('Given the contextProvider', () => {
    describe('When called', () => {
        test('It passes the context properly', () => {
            render(
                <ContextProvider>
                    <TestComponent />
                </ContextProvider>
            );
            expect(screen.getByText(/a/)).toBeInTheDocument();
        });
    });
});
