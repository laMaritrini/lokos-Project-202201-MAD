import { render, screen } from '@testing-library/react';
import reactDom from 'react-dom';
import { act } from 'react-dom/test-utils';
import { ContextProvider } from '../../context/contextProvider';
import { Home } from './Home';

// const mockPhoto = [
//     {
//         urls: {
//             small: 'Fake photo',
//         },
//         alt_description: 'Alt_description',
//         user: {
//             profile_image: {
//                 small: 'Small',
//             },
//             first_name: 'Heber',
//             username: 'hebeready',
//         },
//     },
//     {
//         urls: {
//             small: 'Fake photo',
//         },
//         alt_description: 'Alt_description',
//         user: {
//             profile_image: {
//                 small: 'Small',
//             },
//             first_name: 'Heber',
//             username: 'hebeready',
//         },
//     },
// ];
// describe('Given home component', () => {
//     describe('When passed a array', () => {
//         // let container;
// beforeEach(() => {
//     container = document.createElement('div');
//     document.body.appendChild(container);
// });

// afterEach(() => {
//     document.body.removeChild(container);
//     container = null;
// });

// test('with ReactDOM', () => {
//     // eslint-disable-next-line testing-library/no-unnecessary-act
//         render(
//             <ContextProvider.Provider value={mockPhoto}>
//                 <Home />
//             </ContextProvider.Provider>,
//             container
//         );

//     // eslint-disable-next-line testing-library/no-node-access
//     expect(
//         container.querySelectorAll('.photo__container')
//     ).toHaveLength(2);
//         });
//     });
// });
