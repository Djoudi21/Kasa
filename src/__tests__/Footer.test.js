import { render, screen } from '@testing-library/react';
import Footer from '../components/footer/Footer';
import FooterLogo from '../components/footer/FooterLogo';
import Copyright from '../components/footer/Copyright';
import React from 'react'; // Add the correct import statement

describe('Footer', () => {
    it('Should render without crashing', () => {
        render(
            <Footer />
        );
    })

    it('Should display a copyright', () => {
        render(
            <Footer>
                <Copyright />
            </Footer>
        );
        const element = screen.getByTestId('copyright')
        expect(element).toBeTruthy()
    })

    it('Should display a logo', () => {
        render(
            <Footer>
                <FooterLogo />
            </Footer>
        );
        const element = screen.getByTestId('footer-logo')
        expect(element).toBeTruthy()
    })
})
