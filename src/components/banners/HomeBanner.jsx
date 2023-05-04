import styles from '../../css/_Banner.module.css';
import logo from "../../assets/img-banner.png";

export default function HomeBanner() {
    return (
        <>
            <div className={`${styles.container} ${styles.w75} ${styles.p50} ${styles.homeBackGroundImg} ${styles.cardHeightHome} ${styles.cardHeightDesktop}`}>
                <img className={`${styles.homeBackGroundImg}`} src={logo}  alt={'toto'}/>
                <div className={`${styles.flex} ${styles.textContainer}`}>
                    <h3 className={styles.title}>Chez vous,</h3>
                    <h3 className={styles.title}>partout et ailleurs</h3>
                </div>
            </div>
        </>
    );
}
