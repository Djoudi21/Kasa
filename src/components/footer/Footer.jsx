import styles from '../../css/_Footer.module.css';
import FooterLogo from "./FooterLogo";
import Copyright from "./Copyright";


export default function Footer() {
    return (
        <>
            <footer className={styles.container}>
                <FooterLogo />
                <Copyright />
            </footer>
        </>
    );
}
