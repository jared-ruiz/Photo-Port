import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

afterEach(cleanup);

const currentPhoto = {
    name: 'Park Bench',
    category: 'landscape',
    description: 'Lorem ipsum',
    index: 1
}

const mockToggleModal = jest.fn();

describe('Modal componenet', () => {
    it('renders', () => {
        render(<Modal currentPhoto={currentPhoto} ></Modal>)
    })

    it('matches snapshot', () => {
        const { asFragment } = render(<Modal currentPhoto={currentPhoto}></Modal>)

        expect(asFragment()).toMatchSnapshot();
    })
})

describe('onClick Event', () => {
    it('calls onClose handler', () => {
        const { getByText } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
        />)
        fireEvent.click(getByText('Close This Modal'))

        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    })
})