import { render, screen } from '@testing-library/react';
import { CameraDetails } from './Camera-details';

test('renders Camera information', () => {
    render(<CameraDetails />);
    const linkElement = screen.getByText(/Camera Brand/i);
    expect(linkElement).toBeInTheDocument();
});
