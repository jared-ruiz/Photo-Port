import React from 'react'
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact component', () => {
    //baseline
    it('renders', () => {
        render(<Contact></Contact>)
    })

    it('matches snapshot', () => {
        const { asFragment } = render(<Contact></Contact>)

        expect(asFragment()).toMatchSnapshot();
    })

    describe('h1 element exists', () => {
        it('renders', () => {
            const { getByTestId } = render(<Contact></Contact>)

            expect(getByTestId('contact')).toHaveTextContent('Contact Me')
        })
    })

    describe('button element exists', () => {
        it('renders', () => {
            const { getByTestId } = render(<Contact></Contact>)

            expect(getByTestId('submit-button')).toHaveTextContent('Submit')
        })
    })
})