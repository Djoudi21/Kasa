import styles from '../../css/_Banner.module.css';
import logo from './titi.jpg';


export default function AboutBanner() {
    return (
        <>
            <div className={`${styles.container} ${styles.w90} ${styles.cardHeightAbout}  ${styles.cardHeightAbout}`}>
                <img className={`${styles.aboutBackGroundImg}`} src={logo}  alt={'toto'}/>
            </div>
        </>
    );
}
