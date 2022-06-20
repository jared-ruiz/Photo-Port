import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

describe('Nav component', () => {
    //baseline
    it('renders', () => {
        render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            mockSetContactSelected={mockSetContactSelected}
        />)
    })

    //snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            mockSetContactSelected={mockSetContactSelected}
        />)
        //asert value comparison 
        expect(asFragment()).toMatchSnapshot();
    })

    describe('emoji is visable', () => {
        it('inserts emoji into the h2', () => {
            //arrange
            const { getByLabelText } = render(<Nav
                categories={categories}
                setCurrentCategory={mockSetCurrentCategory}
                currentCategory={mockCurrentCategory}
                contactSelected={mockContactSelected}
                mockSetContactSelected={mockSetContactSelected}
            />)
            
            //assert
            expect(getByLabelText('camera')).toHaveTextContent('📸');

        })
    })

    describe('links are visable', () => {
        it('inserts text into the links', () => {
            //arrange
            const { getByTestId } = render(<Nav
                categories={categories}
                setCurrentCategory={mockSetCurrentCategory}
                currentCategory={mockCurrentCategory}
                contactSelected={mockContactSelected}
                mockSetContactSelected={mockSetContactSelected}
            />)

            //assert
            expect(getByTestId('link')).toHaveTextContent('Oh Snap!')
            expect(getByTestId('about')).toHaveTextContent('About Me')
        })
    })


})