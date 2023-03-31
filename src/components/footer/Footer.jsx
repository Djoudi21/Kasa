import styles from '../../css/_Footer.module.css';
import FooterLogo from "./FooterLogo";
import FooterCopyright from "./FooterCopyright";
import {useEffect, useState} from "react";


export default function Footer() {
    let [screenSize, setScreenSize] = useState(window.innerWidth)

    useEffect(() => {
        function handleResize() {
            setScreenSize(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    },[screenSize]);
    return (
        <>
            <footer className={styles.container}>
                <FooterLogo />
                <FooterCopyright screenSize={screenSize} />
            </footer>
        </>
    );
}
