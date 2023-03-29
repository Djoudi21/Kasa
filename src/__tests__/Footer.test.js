import { render, screen } from '@testing-library/react';
import Footer from '../components/footer/Footer';
import FooterLogo from '../components/footer/FooterLogo';
import Copyright from '../components/footer/Copyright';
import {AccommodationsProvider} from "../utils";

describe('Footer', () => {
    it('Should render without crashing', () => {
        render(
            <AccommodationsProvider>
                <Footer />
            </AccommodationsProvider>
        );
    })

    it('Should display a copyright', () => {
        render(
            <AccommodationsProvider>
                <Footer>
                    <Copyright />
                </Footer>
            </AccommodationsProvider>
        );
        const element = screen.getByTestId('copyright')
        expect(element).toBeTruthy()
    })

    it('Should display a logo', () => {
        render(
            <AccommodationsProvider>
                <Footer>
                    <FooterLogo />
                </Footer>
            </AccommodationsProvider>
        );
        const element = screen.getByTestId('footer-logo')
        expect(element).toBeTruthy()
    })
})
