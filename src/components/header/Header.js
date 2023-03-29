import {Link} from "react-router-dom";
import HeaderLogo from "./HeaderLogo";
import styles from '../../css/_Header.module.css';



export default function Header() {
    return (
        <header className={styles.header}>
            <HeaderLogo/>
            <nav className={styles.nav}>
                <ul>
                    <li><Link to={'/'} className={'nav-item'}>ACCUEIL</Link></li>
                    <li><Link to={'/about'}>A PROPOS</Link></li>
                </ul>
            </nav>
        </header>
    );
}
