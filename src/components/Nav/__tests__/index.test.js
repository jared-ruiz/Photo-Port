import React from 'react';
import { render, cleanup, getAllByLabelText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
    //baseline
    it('renders', () => {
        render(<Nav />)
    })

    //snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />)
        //asert value comparison 
        expect(asFragment()).toMatchSnapshot();
    })

    describe('emoji is visable', () => {
        it('inserts emoji into the h2', () => {
            //arrange
            const { getByLabelText } = render(<Nav />)
            
            //assert
            expect(getByLabelText('camera')).toHaveTextContent('📸');

        })
    })

    describe('links are visable', () => {
        it('inserts text into the links', () => {
            //arrange
            const { getByTestId } = render(<Nav/>)

            //assert
            expect(getByTestId('link')).toHaveTextContent('Oh Snap!')
            expect(getByTestId('about')).toHaveTextContent('About Me')
        })
    })
})